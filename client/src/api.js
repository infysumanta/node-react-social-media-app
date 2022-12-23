import axios from "axios";

const baseURL = "/api";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

const authInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

authInstance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user-login-token");
    if (user) {
      const token = JSON.parse(user).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    return {
      success: true,
      response: await instance.post("/auth/login", data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const register = async (data) => {
  try {
    return {
      success: true,
      response: await instance.post("/auth/register", data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getUserDetails = async () => {
  try {
    return {
      success: true,
      response: await authInstance.post("/user/get-user-details"),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

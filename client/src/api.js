import axios from "axios";

const baseURL = "/api";

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

export const login = async (data) => {
  try {
    return {
      success: true,
      response: await apiClient.post("/auth/login", data),
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
      response: await apiClient.post("/auth/register", data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

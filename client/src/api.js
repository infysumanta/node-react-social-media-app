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
      response: await authInstance.post("/users/get-user-details"),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getUserDetailsByUsername = async (username) => {
  try {
    return {
      success: true,
      response: await authInstance.get(`/users/get-user-details/${username}`),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getUserListBySearch = async (search) => {
  try {
    return {
      success: true,
      response: await authInstance.get(
        `/users/get-user-list-search?search=${search}`
      ),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const sendFriendRequest = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post(`/users/send-friend-request`, data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const cancelFriendRequest = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post(`/users/cancel-friend-request`, data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const confirmFriendRequest = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post(`/users/confirm-friend-request`, data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getUserFriendsList = async (userId) => {
  try {
    return {
      success: true,
      response: await authInstance.get(
        `/users/get-user-friends-list/${userId}`
      ),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getUserNotificationsList = async (userId) => {
  try {
    return {
      success: true,
      response: await authInstance.get(`/users/get-user-notification-list`),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getUserAboutDetails = async (userId) => {
  try {
    return {
      success: true,
      response: await authInstance.get(`/users/get-about-details/${userId}`),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const updateUserDetails = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.put("/users/update-user-details", data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const readOneNotification = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post("/users/read-one-notification", data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const markAllNotificationAsRead = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post(
        "/users/marked-all-notification-as-read",
        data
      ),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

// Post Operation
export const createPost = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post("/posts/create", data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const deletePost = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.delete("/posts/delete", { data }),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getUserPost = async (userId) => {
  try {
    return {
      success: true,
      response: await authInstance.get(`/posts/get-user-post/${userId}`),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getFeedPost = async () => {
  try {
    return {
      success: true,
      response: await authInstance.get("/posts/get-feed-post"),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getSinglePost = async (userId) => {
  try {
    return {
      success: true,
      response: await authInstance.get(`/posts/get-single-post/${userId}`),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const likePost = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post(`/posts/post-like`, data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const dislikePost = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post(`/posts/post-dislike`, data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const saveComment = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.post(`/comments/create`, data),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const getCommentByPost = async (post_id) => {
  try {
    return {
      success: true,
      response: await authInstance.get(`/comments/comments-by-post/${post_id}`),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

export const deleteComments = async (data) => {
  try {
    return {
      success: true,
      response: await authInstance.delete(`/comments/delete`, { data }),
    };
  } catch (response) {
    return {
      success: false,
      response: response,
    };
  }
};

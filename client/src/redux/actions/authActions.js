import { toast } from "react-hot-toast";
import { authTypes } from "../types/authTypes";
import * as api from "./../../api";

export const getAuthAction = (dispatch) => {
  return {
    login: (data, navigate) => dispatch(login(data, navigate)),
    register: (data, navigate) => dispatch(register(data, navigate)),
    getUserDetails: (navigate) => dispatch(getUserDetails(navigate)),
    logout: (navigate) => dispatch(logout(navigate)),
    updateUserDetails: (data, navigate) =>
      dispatch(updateUserDetails(data, navigate)),
  };
};

const setUserDetails = (data) => {
  return {
    type: authTypes.SET_USER_DETAILS,
    payload: data,
  };
};

const login = (data, navigate) => {
  return async (dispatch) => {
    const response = await api.login(data);

    if (!response.success) {
      toast.error(response.response.response.data?.message);
    } else {
      toast.success(response.response.data?.message);
      localStorage.setItem(
        "user-login-token",
        JSON.stringify(response.response.data?.user)
      );
      dispatch(setUserDetails(response.response.data?.user));
      navigate("/");
    }
  };
};

const register = (data, navigate) => {
  return async (dispatch) => {
    const response = await api.register(data);
    if (!response.success) {
      toast.error(response.response.response.data?.message);
    } else {
      toast.success(response.response.data?.message);
      navigate("/login");
    }
  };
};

const deleteUserDetails = () => {
  return {
    type: authTypes.LOG_OUT,
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    localStorage.removeItem("user-login-token");
    dispatch(deleteUserDetails());
    navigate("/login");
  };
};

export const getUserDetails = (navigate) => {
  return async (dispatch) => {
    const response = await api.getUserDetails();

    if (!response.success) {
      console.log(response);
      dispatch(logout(navigate));
    }
  };
};

export const updateUserDetails = (data) => {
  return async (dispatch) => {
    const response = await api.updateUserDetails(data);
    if (!response.success) {
      toast.error(response.response.response.data?.message);
    } else {
      toast.success(response.response.data?.message);
      localStorage.setItem(
        "user-login-token",
        JSON.stringify(response.response.data?.user)
      );
      dispatch(setUserDetails(response.response.data?.user));
    }
  };
};

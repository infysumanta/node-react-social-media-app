import { toast } from "react-hot-toast";
import { authTypes } from "../types/authTypes";
import * as api from "./../../api";

export const getAuthAction = (dispatch) => {
  return {
    login: (data, navigate) => dispatch(login(data, navigate)),
    register: (data, navigate) => dispatch(register(data, navigate)),
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

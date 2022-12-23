import { authTypes } from "../types/authTypes";

const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_USER_DETAILS:
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    case authTypes.LOG_OUT:
      return {
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;

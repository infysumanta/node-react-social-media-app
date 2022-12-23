import { themeTypes } from "../types/themeTypes";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeTypes.DARK:
      return {
        ...state,
        theme: "dark",
      };
    case themeTypes.LIGHT:
      return {
        ...state,
        theme: "light",
      };
    default:
      return state;
  }
};

export default themeReducer;

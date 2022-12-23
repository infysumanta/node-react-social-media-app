import { themeTypes } from "../types/themeTypes";

export const getThemeActions = (dispatch) => {
  return {
    darkMode: () => dispatch(darkMode()),
    lightMode: () => dispatch(lightMode()),
  };
};

const changeToDarkMode = () => {
  return {
    type: themeTypes.DARK,
  };
};
const changeToLightMode = () => {
  return {
    type: themeTypes.LIGHT,
  };
};

export const darkMode = () => {
  return async (dispatch) => {
    dispatch(changeToDarkMode());
  };
};
export const lightMode = () => {
  return async (dispatch) => {
    dispatch(changeToLightMode());
  };
};

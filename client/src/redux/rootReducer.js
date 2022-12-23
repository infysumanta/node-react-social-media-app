import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

export default rootReducer;

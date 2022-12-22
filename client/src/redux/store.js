import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisitConfig = {
  key: "social-media-app",
  storage,
};

const persistedReducer = persistReducer(persisitConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };

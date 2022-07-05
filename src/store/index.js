import { createStore, compose } from "redux";
import reducer from "./reducers";
import ReduxThunk from "redux-thunk";
import localStorage from "redux-persist/lib/storage";
import { applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(persistedReducer, composeEnhancers(middleware));
const persistor = persistStore(store);
export { store, persistor };

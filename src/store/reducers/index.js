import { combineReducers } from "redux";
import { accountReducer } from "./account_reducer";
import { authReducer } from "./auth_reducer";
import { changeState } from "./layout_reducer";

const reducer = combineReducers({
  account: accountReducer,
  layout: changeState,
  auth: authReducer,
});

export default reducer;

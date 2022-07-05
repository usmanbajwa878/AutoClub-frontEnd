import {
  LOGIN_PENDING,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT,
} from "../actiontypes";

const intialState = {
  userData: {},
  loading: false,
  error: null,
  token: null,
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case LOGIN_COMPLETED:
      console.log("ACTION_PAYLOAD++", action);
      return {
        ...state,
        loading: false,
        userData: action.payload.data,
        token: action.payload.token,
      };
    case LOGOUT:
      return intialState;
    default:
      return state;
  }
};

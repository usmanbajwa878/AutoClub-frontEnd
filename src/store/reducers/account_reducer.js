import {
  CREATE_ACCOUNT_COMPLETED,
  CREATE_ACCOUNT_PENDING,
  CREATE_ACCOUNT_ERROR,
} from "../actiontypes";

const intialState = {
  accounts: [],
  loading: false,
  error: null,
};

export const accountReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CREATE_ACCOUNT_COMPLETED:
      return {
        ...state,
        loading: false,
        accounts: [...state.accounts, action.payload.data],
      };
    default:
      return state;
  }
};

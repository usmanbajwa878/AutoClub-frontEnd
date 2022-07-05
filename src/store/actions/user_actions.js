import { ERROR_MESSAGES } from "src/services/api/errorHandling";
import { login } from "../../services/api";
import { LOGIN_COMPLETED, LOGIN_ERROR, LOGIN_PENDING } from "../actiontypes";

export const LOGIN_ACTION = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_PENDING,
      });
      const response = await login(email, password);

      if (response?.status === 200) {
        console.log("RESPONSE", response.data);
        const responseData = response?.data;

        dispatch({
          type: LOGIN_COMPLETED,
          payload: {
            data: responseData?.data?.user,
            token: responseData?.data?.token,
          },
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: { error: response?.originalError },
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        error: ERROR_MESSAGES.GENERAL_ERROR,
      });
    }
  };
};

import { ERROR_MESSAGES } from "src/services/api/errorHandling";
import { createAccount } from "../../services/api";
import {
  CREATE_ACCOUNT_COMPLETED,
  CREATE_ACCOUNT_ERROR,
  CREATE_ACCOUNT_PENDING,
} from "../actiontypes";

export const ACCOUNT_CREATION_ACTION = async (
  userId,
  salary,
  bankDetails = {},
  salaryPaidRecord = {},
  salaryDeductions = {},
  loans = {},
  Attendence = {},
  leaveAssigned = 0,
  currentMonthWorkingDays = 0
) => {
  const data = {
    userId,
    salary,
    bankDetails,
    salaryPaidRecord,
    salaryDeductions,
    loans,
    Attendence,
    leaveAssigned,
    currentMonthWorkingDays,
  };
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_ACCOUNT_PENDING });
      const result = await createAccount(data);
      if (result.ok) {
        dispatch({
          type: CREATE_ACCOUNT_COMPLETED,
          payload: { data: result?.data },
        });
      } else {
        dispatch({
          type: CREATE_ACCOUNT_ERROR,
          payload: { error: result?.data },
        });
      }
    } catch (error) {
      dispatch({
        type: CREATE_ACCOUNT_ERROR,
        payload: { error: { message: ERROR_MESSAGES.GENERAL_ERROR } },
      });
    }
  };
};



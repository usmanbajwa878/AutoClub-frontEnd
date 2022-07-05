import { getEnvironment } from "src/constants/config";
import apiClient from "./ApiClient";
import { API_ROUTES } from "./apiRoutes";

export const createAccount = (body) => {
  return apiClient.post(API_ROUTES[getEnvironment()].create_account, body);
};

export default {
  createAccount,
};

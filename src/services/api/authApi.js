import { getEnvironment } from "src/constants/config";
import apiClient from "./ApiClient";
import { API_ROUTES } from "./apiRoutes";

export const login = (email, password) => {
  const url = API_ROUTES[getEnvironment()].login;
  return apiClient.post(url, {
    email: email,
    password: password,
  });
};

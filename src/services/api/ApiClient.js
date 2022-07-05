import { create } from "apisauce";
import { getBaseUrl } from "src/constants/config";

let headers = {
  "Cache-Control": "no-cache",
  Accept: "application/json",
};

const apiClient = create({
  baseURL: getBaseUrl(),
  headers: headers,
});

export default apiClient;

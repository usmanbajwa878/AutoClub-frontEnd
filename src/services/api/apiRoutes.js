export const API_ROUTES = {
  dev: {
    baseURl: "http:localhost:5000/api/",
    create_account: "account/create",
    login: "user/login",
    register: "user/register",
  },
  prod: {
    baseURl: "http:localhost:5000",
    create_account: "account/create",
    login: "user/login",
    register: "user/register",
  },
};

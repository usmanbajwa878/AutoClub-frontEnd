const env = "dev";

const environment = {
  dev: {
    _baseURL: "http://localhost:4000/api/",
  },
  prod: {
    _baseURL: "http://localhost:4000/api/",
  },
};

export const getBaseUrl = () => {
  return environment?.[env]._baseURL;
};

export const getEnvironment = () => {
  return env;
};

import { BACKEND_API_URL, DEV_API_URL, TEST_API_URL } from "./config";

const api = (path, options) => {
  const getHost = env => {
    switch (process.env.NODE_ENV) {
      case "production":
        return BACKEND_API_URL;
      case "test":
        return TEST_API_URL;
      default:
        return DEV_API_URL;
    }
  };
  const domain = getHost(process.env.NODE_ENV);
  const url = domain + path;
  return fetch(url, options);
};

export const getCategories = async () => {
  const res = await api("/categories/");
  const data = await res.json();
  return data.results;
};

export const categoryIdFromUrl = url => {
  const trailingSlash = url[url.length - 1] === "/";
  const tokens = url.split("/");
  const number = trailingSlash
    ? tokens[tokens.length - 2]
    : tokens[tokens.length - 1];
  if (number) {
    const int = parseInt(number);
    if (Number.isInteger(int)) {
      return int;
    }
  }
  return null;
};

export default api;

import { BACKEND_API_URL, DEV_API_URL } from "./config";

const apiFactory = fetch => (path, options) => {
  const domain =
    process.env.NODE_ENV === "production" ? BACKEND_API_URL : DEV_API_URL;
  const url = domain + path;
  return fetch(url, options);
};

export default apiFactory;

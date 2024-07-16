import axios from "axios";
import { API_URL_VEDIKA, TOKEN_LOGIN } from "@/constants";

const instance = axios.create({
  baseURL: API_URL_VEDIKA,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-AUTH-TOKEN": TOKEN_LOGIN,
  },
});

instance.interceptors.request.use(
  (config) => {
    const TOKEN_USER = sessionStorage.getItem("authorization");
    if (TOKEN_USER) {
      if (!config.headers.common) {
        config.headers.common = {};
      }
      config.headers.common["x-auth-token"] = TOKEN_USER;
    } else {
      if (config.headers.common) {
        delete config.headers.common["x-auth-token"];
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export { instance };

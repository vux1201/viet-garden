import axios, { InternalAxiosRequestConfig } from "axios";

const baseUrl = "https://pxh09.cloud/viet-garden/api";

const api = axios.create({
  baseURL: baseUrl,
  paramsSerializer: {
    indexes: null,
  },
});

const authApi = axios.create({
  baseURL: baseUrl,
  paramsSerializer: {
    indexes: null,
  },
});

const onFulfilled = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("access-token");
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
  return config;
};
authApi.interceptors.request.use(onFulfilled);
export { api, authApi };

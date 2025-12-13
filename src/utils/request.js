import axios from "axios";
const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (response) => {
    response.data = JSON.parse(response.data);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;

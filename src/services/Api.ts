import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

const Api = axios.create({
  baseURL,
});

Api.interceptors.request.use(
  (config) => {
    config.headers['x-api-key'] = process.env.EXPO_PUBLIC_API_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default Api;
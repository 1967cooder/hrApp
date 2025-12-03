import axios from "axios";

const BASE_URL = "https://hrapp-mock-api.onrender.com/api"; // always is going with live back end

// const BASE_URL = import.meta.env.PROD
//   ? "https://hrapp-mock-api.onrender.com/api" //live backend
//   : "http://localhost:3000/api"; //local backend

const useAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define common API methods

const _get = (url, config = {}) => {
  return useAxios.get(url, config);
};

const _post = (url, data = {}, config = {}) => {
  return useAxios.post(url, data, config);
};

const _patch = (url, data = {}, config = {}) => {
  return useAxios.patch(url, data, config);
};
export { _get, _post, _patch };

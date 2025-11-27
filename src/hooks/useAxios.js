import axios from "axios";

const BASE_URL = "http://localhost:3001";

const useAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "aplication/json",
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

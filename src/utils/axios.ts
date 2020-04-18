import axios from "axios";

const { REACT_APP_API_KEY } = process.env;

const axiosInstance = axios.create({
  timeout: 1000,
  headers: { "x-api-key": REACT_APP_API_KEY },
});

export { axiosInstance as axios };

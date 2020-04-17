import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const { API_KEY } = process.env;

const axiosInstance = axios.create({
  timeout: 1000,
  headers: { "x-api-key": API_KEY },
});

export default axiosInstance;

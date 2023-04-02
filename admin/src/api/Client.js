import axios from "axios";

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_ENDPOINT
});

export default axiosClient;
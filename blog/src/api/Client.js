import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
});

export default axiosClient;
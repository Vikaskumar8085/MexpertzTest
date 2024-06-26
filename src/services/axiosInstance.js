import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://child.onrender.com/api/",
});

export default axiosInstance;

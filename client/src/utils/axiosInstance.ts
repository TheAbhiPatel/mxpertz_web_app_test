import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3001/api/v1",
  timeout: 2000,
});

axiosInstance.interceptors.request.use((req) => {
  const userInfo = localStorage.getItem("@userInfo");
  let token = "";
  if (userInfo) {
    const temp = JSON.parse(userInfo);
    token = temp.token;
  }
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default axiosInstance;

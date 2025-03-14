import axios from "axios";

export const axiosInstence = axios.create({
  baseURL: "https://medium-backend-seven.vercel.app/",
  // baseURL: "http://localhost:2000/",
});

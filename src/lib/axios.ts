import axios from "axios";

export const axiosInstence = axios.create({
  baseURL: "https://medium-backend-mu.vercel.app/",
});

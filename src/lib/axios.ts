import axios from "axios";

export const axiosInstence = axios.create({
  baseURL: "http://localhost:2000/",
});

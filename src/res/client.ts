import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/",
  //   headers: {
  //     Authorization: getToken() || "",
  //     Content_type: "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
});

export default api;

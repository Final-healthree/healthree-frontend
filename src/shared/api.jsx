import axios from "axios";

export const api = axios.create({
  baseURL: "http://wetube-phenomenonlee.shop/",
  headers: {
    // Authorization: `Bearer ${token}`,
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// api.defaults.withCredentials = true;

// api.interceptors.request.use(function (config) {
//   const accessToken = sessionStorage.getItem("token");
//   config.headers.common["authorization"] = `Bearer ${accessToken}`;
//   return config;
// });




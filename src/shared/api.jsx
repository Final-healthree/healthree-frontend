import axios from "axios";

export const api = axios.create({
  baseURL: "http://wetube-phenomenonlee.shop/",
  // baseURL: "http://52.78.100.140/",
  // baseURL: "http://54.180.113.121/",
  // baseURL: "http://15.164.233.193/",
  headers: {
    // Authorization: `Bearer ${token}`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjMsIm5pY2tuYW1lIjoi7Jyg7JiBIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9ielNMRDgvYnRySTJjd3lZYmcvMDJvTkNvWVVlZXF4czdReVp3a2E2MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjYzNjQ5OTA5LCJleHAiOjE2NjM3MzYzMDl9.qNH-DrnMXV2r59mdtaf-a8_tVuDVkrmoRqUEEzAyLso`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjIsIm5pY2tuYW1lIjoi7J207IOB7ZiEIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi80SWxMcS9idHJJUkZaMWdyUy9GQWFYOXlNMGc3UWN4M05LcmhzblNLL2ltZ182NDB4NjQwLmpwZyJ9LCJpYXQiOjE2NjM3NDAwMjMsImV4cCI6MTY2MzgyNjQyM30.tcJQzHsXF4z_ijux5pEPyJTKi4mskI1B4Xu1-ZX9__o`,
    
    "Content-Type": "application/json;charset=UTF-8",
    // "Content-Type": "multipart/form-data",
    // accept: "application/json,",
  },
});


// api.defaults.withCredentials = true;

// api.interceptors.request.use(function (config) {
//   const accessToken = sessionStorage.getItem("token");
//   config.headers.common["authorization"] = `Bearer ${accessToken}`;
//   return config;
// });




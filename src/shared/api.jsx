import axios from "axios";

export const api = axios.create({
  baseURL: "http://wetube-phenomenonlee.shop/",
  // baseURL: "http://52.78.100.140/",
  // baseURL: "http://54.180.113.121/",
  // baseURL: "http://15.164.233.193/",
  headers: {
    // Authorization: `Bearer ${token}`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjMsIm5pY2tuYW1lIjoi7Jyg7JiBIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9ielNMRDgvYnRySTJjd3lZYmcvMDJvTkNvWVVlZXF4czdReVp3a2E2MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjYzNjQ5OTA5LCJleHAiOjE2NjM3MzYzMDl9.qNH-DrnMXV2r59mdtaf-a8_tVuDVkrmoRqUEEzAyLso`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjIsIm5pY2tuYW1lIjoi7J207IOB7ZiEIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi80SWxMcS9idHJJUkZaMWdyUy9GQWFYOXlNMGc3UWN4M05LcmhzblNLL2ltZ182NDB4NjQwLmpwZyJ9LCJpYXQiOjE2NjM4MzE2OTcsImV4cCI6MTY2MzkxODA5N30.FdpX1za0v5V_SfaOfkEB9PlMu7sC5WjvgSJFvv0I50g`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjEsIm5pY2tuYW1lIjoi7J207IOB7ZiEIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi80SWxMcS9idHJJUkZaMWdyUy9GQWFYOXlNMGc3UWN4M05LcmhzblNLL2ltZ182NDB4NjQwLmpwZyJ9LCJpYXQiOjE2NjM5Mjk5MDYsImV4cCI6MTY2NDAxNjMwNn0.UEeQJ2J-BkvPpwqBr7Sm1ZyFaS_pQIxd-4Lzb4xFfDY`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjQsIm5pY2tuYW1lIjoi7LCo7IiY6528IiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9iZndUZHAvYnRxMEEwMXc4OFEvS1RGMTJrS081eG5kUm4xMGtxbXV4MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjY0MTcxMzE2LCJleHAiOjE2NjQyNTc3MTZ9.blSwXXRBIaMrTlG6fQjl5MAFgZEromfFAFvNEC5hohE`,
    
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




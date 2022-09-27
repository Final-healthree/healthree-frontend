import axios from "axios";

export const api = axios.create({
  baseURL: "https://wetube-phenomenonlee.shop/",
  // baseURL: "http://3.35.55.219/",
  // baseURL: "http://52.78.100.140/",
  // baseURL: "http://54.180.113.121/",
  // baseURL: "http://15.164.233.193/",
  headers: {
    // Authorization: `Bearer ${token}`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjQsIm5pY2tuYW1lIjoi7LCo7IiY6528IiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9iZndUZHAvYnRxMEEwMXc4OFEvS1RGMTJrS081eG5kUm4xMGtxbXV4MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjY0MTcxMzE2LCJleHAiOjE2NjQyNTc3MTZ9.blSwXXRBIaMrTlG6fQjl5MAFgZEromfFAFvNEC5hohE`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjQsIm5pY2tuYW1lIjoi7LCo7IiY6528IiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9iZndUZHAvYnRxMEEwMXc4OFEvS1RGMTJrS081eG5kUm4xMGtxbXV4MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjY0MjUyNjE0LCJleHAiOjE2NjQzMzkwMTR9.He4t55-fLbQENyHx6eJtE-mbd-X0haDM1P-JoIqdwBo`,
    
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




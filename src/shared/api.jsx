import axios from "axios";

export const api = axios.create({
  baseURL: "http://wetube-phenomenonlee.shop/",
  // baseURL: "http://52.78.100.140/",
  // baseURL: "http://54.180.113.121/",
  // baseURL: "http://15.164.233.193/",
  headers: {
    // Authorization: `Bearer ${token}`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjEsIm5pY2tuYW1lIjoi7J207IOB7ZiEIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi80SWxMcS9idHJJUkZaMWdyUy9GQWFYOXlNMGc3UWN4M05LcmhzblNLL2ltZ182NDB4NjQwLmpwZyJ9LCJpYXQiOjE2NjMwNjkwNDAsImV4cCI6MTY2MzA3OTg0MH0.u8lLgzFLbMx9aoMCDOMn8b-njN8w7kyiWeK_7QJklbs`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjEsIm5pY2tuYW1lIjoi7J207IOB7ZiEIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi80SWxMcS9idHJJUkZaMWdyUy9GQWFYOXlNMGc3UWN4M05LcmhzblNLL2ltZ182NDB4NjQwLmpwZyJ9LCJpYXQiOjE2NjMyNDE4NjksImV4cCI6MTY2MzMyODI2OX0.RWtecZvF4CRmWpy7l0EcBACy4b2Khk8Wvyw3PRglh_A`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjQsIm5pY2tuYW1lIjoi7Jyg7JiBIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9ielNMRDgvYnRySTJjd3lZYmcvMDJvTkNvWVVlZXF4czdReVp3a2E2MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjYzMjQyOTU2LCJleHAiOjE2NjMzMjkzNTZ9.oAT2fyf4-9voEgJHCIEAHFjRBLF8lDGOv_tEfu5fNTk`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjQsIm5pY2tuYW1lIjoi7Jyg7JiBIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9ielNMRDgvYnRySTJjd3lZYmcvMDJvTkNvWVVlZXF4czdReVp3a2E2MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjYzMDY3MTg5LCJleHAiOjE2NjMwNzc5ODl9.mkjPXvEY_GerJ_ktWEnBdVcw4Dx9_s4U_4UG5iX9icI`,
    
    // "content-type": "application/json;charset=UTF-8",
    "Content-Type": "multipart/form-data",
    accept: "application/json,",
  },
});


// api.defaults.withCredentials = true;

// api.interceptors.request.use(function (config) {
//   const accessToken = sessionStorage.getItem("token");
//   config.headers.common["authorization"] = `Bearer ${accessToken}`;
//   return config;
// });




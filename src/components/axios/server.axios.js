import axios from "axios";
import { isExpired } from "react-jwt";
const serverAxios = axios.create({
  baseURL: process.env.REACT_APP_REST_API_KEY,
});
/** @param { Request } req */
const requestHandler = async (req) => {
  //   const accessToken = getToken().accessToken;
  //   request.headers.Authorization = `Bearer ${accessToken}`;
  const Token = localStorage.getItem("Token");
  // console.log(Token);

  const isMyTokenExpired = isExpired(Token);

  if (isMyTokenExpired === true) {
    //True인 경우
    // 1. 토큰이 만료된 경우
    // 2. 토큰이 없거나 이상한것이 들어있을 경우
    try {
      alert("로그인필요");
      return window.location.replace("/");
    } catch (error) {
      // 에러가뜬경우 (status가 4xx, 5xx인 경우)
      // 1. 토큰이 아닌게 왔을 경우
      // 2. 다른사람이 만든 토큰이 왔을 경우
      // 3. 만료된 refreshToken이 왔을 경우
      // 4. 알 수 없는 에러
      localStorage.clear();
      return req;
    }
  } else {
    // console.log("성공");
    req.headers.Authorization = `Bearer ${Token}`;

    return req;
  }
};
serverAxios.interceptors.request.use((request) => requestHandler(request));
export default serverAxios;

import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjEsIm5pY2tuYW1lIjoi7J207IOB7ZiEIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi80SWxMcS9idHJJUkZaMWdyUy9GQWFYOXlNMGc3UWN4M05LcmhzblNLL2ltZ182NDB4NjQwLmpwZyJ9LCJpYXQiOjE2NjMyNDE4NjksImV4cCI6MTY2MzMyODI2OX0.RWtecZvF4CRmWpy7l0EcBACy4b2Khk8Wvyw3PRglh_A";
  return (
    <div>
      <StLoginArea>
        <a href="http://wetube-phenomenonlee.shop/api/users/auth/kakao">
          <img src={kakaoLogin}></img>
        </a>
      </StLoginArea>
    </div>
  );
};

export default LoginForm;

const StLoginArea = styled.div`
  display: flex;
  cursor: pointer;
`;

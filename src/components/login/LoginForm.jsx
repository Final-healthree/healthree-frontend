import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
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

console.log()
export default LoginForm;

const StLoginArea = styled.div`
  display: flex;
  cursor: pointer;
`;

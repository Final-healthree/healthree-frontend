import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  const token = process.env.REACT_APP_TOKEN;
  const tokenTest = () => {
    localStorage.setItem("accessToken", token);
  };

  return (
    <div>
      <StLoginArea>
        <img
          src={kakaoLogin}
          onClick={() => {
            tokenTest();
            console.log("hi");
          }}
        />
      </StLoginArea>
    </div>
  );
};

export default LoginForm;

const StLoginArea = styled.div`
  display: flex;
`;

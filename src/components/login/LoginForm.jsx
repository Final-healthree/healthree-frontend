import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjUsIm5pY2tuYW1lIjoi7KGw7JiB7J2AIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9kcGs5bDEvYnRxbUdoQTJsS0wvT3owd0R1Sm4xWVYyREluOTJmNkRWSy9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjYzMjIyMjMyLCJleHAiOjE2NjMzMDg2MzJ9.8Z8kyNx0KRa1e42ZOiw38Q-SYJ9KxSQxPLfa_NEPOGc";
  return (
    <div>
      <StLoginArea>

        <img
          src={kakaoLogin}
          onClick={() => {
            localStorage.setItem("Token", token);
          }}
        ></img>
        {/* <a href="http://wetube-phenomenonlee.shop/api/users/auth/kakao">
          로그인
        </a> */}

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

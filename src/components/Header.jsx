import React from "react";
import styled from "styled-components";

//svg 이미지
import headerLogo from "../assets/headerFooter/headerLogo.svg";
// import back from "../assets/images/back.svg";

const Header = () => {
  //로그인 페이지 헤더 숨기기
  const token = localStorage.getItem("Token");
  if (token === null) return null;

  return (
    <StHeader>
        <img src={headerLogo} alt=""/>
        <Goservey href="https://forms.gle/hknQyvw9iR4DfuzKA">
          설문조사 하러가기
        </Goservey>
    </StHeader>
  );
};
export default Header;
const StHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  border-bottom: 1px solid gray;
  flex-direction: row;
  padding: 3px 0;
  background-color: #fff;
`;

const Goservey = styled.a`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-weight: 700;
  text-decoration: none;
  color: black;
  font-size: 14px;
  margin-left: 35px;

  :hover {
    color: #2c8d65;
    font-weight: 900;
  }
`;

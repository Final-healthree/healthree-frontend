import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import footerMain from "../assets/headerFooter/footerMain.svg";
import footerMainC from "../assets/headerFooter/footerMainC.svg";
import footerCommunity from "../assets/headerFooter/footerCommunity.svg";
import footerCommunityC from "../assets/headerFooter/footerCommunityC.svg";
import footerMypage from "../assets/headerFooter/footerMypage.svg";
import footerMypageC from "../assets/headerFooter/footerMypageC.svg";
const Footer = () => {
  const navigate = useNavigate();
  const [isListHoverMain, setIsListHoverMain] = useState(false);
  const [isListHoverCommunity, setIsListHoverCommunity] = useState(false);
  const [isListHoverMypage, setIsListHoverMypage] = useState(false);
  const [show, setShow] = useState(false);
  //로그인 페이지 푸터 숨기기
  if (window.location.pathname === '/login') return null;
  return (
    <StFooterMain>

      <li
        onMouseOver={() => setIsListHoverMain(true)}
        onMouseOut={() => setIsListHoverMain(false)}
        onClick={() => {
          setShow(true)
          navigate("/");
        }}
      >
        <img src={isListHoverMain ? footerMainC : footerMain} />
      </li>

      <li
        onMouseOver={() => setIsListHoverCommunity(true)}
        onMouseOut={() => setIsListHoverCommunity(false)}
        onClick={() => {
          navigate("/community");
        }}
      >
        <img src={isListHoverCommunity ? footerCommunityC : footerCommunity} />
      </li>

      <li
        onMouseOver={() => setIsListHoverMypage(true)}
        onMouseOut={() => setIsListHoverMypage(false)}
        onClick={() => {
          navigate("/Mypage");
        }}
      >
        <img src={isListHoverMypage ? footerMypageC : footerMypage} />
      </li>
    </StFooterMain>
  );
};


const StFooterMain = styled.ul`
  min-width: 360px;
  max-width: 375px;
  display: flex;
  list-style: none;
  flex: 0 0 auto;
  padding: 0px 1em 0;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 -7px 5px -5px #9c939376;
  position: absolute;
  bottom: 0;
  //중앙 정렬
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  `;

export default Footer;


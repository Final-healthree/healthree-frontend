import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import footerMain from "../assets/images/footerMain.svg";
import footerMainC from "../assets/images/footerMainC.svg";
import footerCommunity from "../assets/images/footerCommunity.svg";
import footerCommunityC from "../assets/images/footerCommunityC.svg";
import footerMypage from "../assets/images/footerMypage.svg";
import footerMypageC from "../assets/images/footerMypageC.svg";

const Footer = () => {
  const navigate = useNavigate();
  const [isListHoverMain, setIsListHoverMain] = useState(false);
  const [isListHoverCommunity, setIsListHoverCommunity] = useState(false);
  const [isListHoverMypage, setIsListHoverMypage] = useState(false);

  return (
    <StFooterMain>
      <li
        onMouseOver={() => setIsListHoverMain(true)}
        onMouseOut={() => setIsListHoverMain(false)}
        onClick={() => {
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
  padding: 6px 1em 0;
  justify-content: space-between;
  background-color: #fff;

  position: absolute;
  bottom: 0;
  //중앙 정렬
  left: 50%;
  transform: translateX(-50%);
`;

export default Footer;

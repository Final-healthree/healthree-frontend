import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import footerMain from "../../assets/headerFooter/footerMain.svg";
import footerMainC from "../../assets/headerFooter/footerMainC.svg";
import footerCommunity from "../../assets/headerFooter/footerCommunity.svg";
import footerCommunityC from "../../assets/headerFooter/footerCommunityC.svg";
import footerMypage from "../../assets/headerFooter/footerMypage.svg";
import footerMypageC from "../../assets/headerFooter/footerMypageC.svg";

const Footer = () => {
  const navigate = useNavigate();
  const [isListHoverMain, setIsListHoverMain] = useState(false);
  const [isListHoverCommunity, setIsListHoverCommunity] = useState(false);
  const [isListHoverRank, setIsListHoverRank] = useState(false);
  const [isListHoverMypage, setIsListHoverMypage] = useState(false);

  const [show, setShow] = useState(false);
  const green = () => {
    setShow(true);
  };

  //로그인 페이지 푸터 숨기기
  if (window.location.pathname === "/") return null;
  return (
    <StFooterMain>
      <li
        onMouseOver={() => setIsListHoverMain(true)}
        onMouseOut={() => setIsListHoverMain(false)}
        onClick={() => {
          navigate("/main");
        }}
      >
        <img src={isListHoverMain ? footerMainC : footerMain} alt="" />
      </li>

      <li
        onMouseOver={() => setIsListHoverCommunity(true)}
        onMouseOut={() => setIsListHoverCommunity(false)}
        onClick={() => {
          navigate("/community");
        }}
      >
        <img
          src={isListHoverCommunity ? footerCommunityC : footerCommunity}
          alt=""
        />
      </li>

      {/* <li
        onMouseOver={() => setIsListHoverRank(true)}
        onMouseOut={() => setIsListHoverRank(false)}
        onClick={() => {
          navigate("/Rank");
        }}
      >
        <img src={isListHoverRank ? footerRankC : footerRank} />
      </li> */}

      <li
        onMouseOver={() => setIsListHoverMypage(true)}
        onMouseOut={() => setIsListHoverMypage(false)}
        onClick={() => {
          navigate("/Mypage");
        }}
      >
        <img src={isListHoverMypage ? footerMypageC : footerMypage} alt="" />
      </li>
    </StFooterMain>
  );
};

export default Footer;

const StFooterMain = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 -7px 5px -5px #9c939376;
  margin: 0;

  width: 100%;
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;

  cursor: pointer;
`;

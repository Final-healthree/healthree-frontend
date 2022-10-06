import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import footerMain from "../../assets/headerFooter/footerMain.svg";
import footerMainC from "../../assets/headerFooter/footerMainC.svg";
import footerCommunity from "../../assets/headerFooter/footerCommunity.svg";
import footerCommunityC from "../../assets/headerFooter/footerCommunityC.svg";
import footerMypage from "../../assets/headerFooter/footerMypage.svg";
import footerMypageC from "../../assets/headerFooter/footerMypageC.svg";
import footerSetting from "../../assets/headerFooter/footerSetting.svg";
import footerSettingC from "../../assets/headerFooter/footerSettingC.svg";

const Footer = () => {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  const [isListHoverMain, setIsListHoverMain] = useState(false);
  const [isListHoverCommunity, setIsListHoverCommunity] = useState(false);
  const [isListHoverSetting, setIsListHoverSetting] = useState(false);
  const [isListHoverMypage, setIsListHoverMypage] = useState(false);

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
        <img
          src={
            isListHoverMain === true || pathName === "/main"
              ? footerMainC
              : footerMain
          }
          alt=""
        />
      </li>

      <li
        onMouseOver={() => setIsListHoverCommunity(true)}
        onMouseOut={() => setIsListHoverCommunity(false)}
        onClick={() => {
          navigate("/community");
        }}
      >
        <img
          src={
            isListHoverCommunity === true || pathName === "/community"
              ? footerCommunityC
              : footerCommunity
          }
          alt=""
        />
      </li>

      <li
        onMouseOver={() => setIsListHoverMypage(true)}
        onMouseOut={() => setIsListHoverMypage(false)}
        onClick={() => {
          navigate("/mypage");
        }}
      >
        <img
          src={
            isListHoverMypage === true || pathName === "/mypage"
              ? footerMypageC
              : footerMypage
          }
          alt=""
        />
      </li>

      <li
        onMouseOver={() => setIsListHoverSetting(true)}
        onMouseOut={() => setIsListHoverSetting(false)}
        onClick={() => {
          navigate("/setting");
        }}
      >
        <img
          src={
            isListHoverSetting === true || pathName === "/setting"
              ? footerSettingC
              : footerSetting
          }
          alt=""
        />
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

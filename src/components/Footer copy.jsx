import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import footerMain from '../assets/images/footerMain.svg'
import footerMainC from '../assets/images/footerMainC.svg'
import footerCommunity from '../assets/images/footerCommunity.svg'
import footerCommunityC from '../assets/images/footerCommunityC.svg'
import footerMypage from '../assets/images/footerMypage.svg'
import footerMypageC from '../assets/images/footerMypageC.svg'

const Footer = () => {
  const navigate = useNavigate();
  const [isListHoverMain, setIsListHoverMain] = useState(false);
  const [isListHoverCommunity, setIsListHoverCommunity] = useState(false);
  const [isListHoverMypage, setIsListHoverMypage] = useState(false);




  return (
    <StFooter>
        <StFooterMain>
          <li onMouseOver={() => setIsListHoverMain(true)}
            onMouseOut={() => setIsListHoverMain(false)}
            onClick={() => {
              navigate('/')
            }}>
            <img src={isListHoverMain ? footerMainC : footerMain} />
          </li>

          <li onMouseOver={() => setIsListHoverCommunity(true)}
            onMouseOut={() => setIsListHoverCommunity(false)}
            onClick={() => {
              navigate('/community')
            }}>
            <img src={isListHoverCommunity ? footerCommunityC : footerCommunity} />

          </li>

          <li onMouseOver={() => setIsListHoverMypage(true)}
            onMouseOut={() => setIsListHoverMypage(false)}
            onClick={() => {
              navigate('/ImUser')
            }}>
            <img src={isListHoverMypage ? footerMypageC : footerMypage} />

          </li>
        </StFooterMain>

    </StFooter>
  )
}

const StFooterLayout = styled.div`

`;

export default Footer;


const StFooter = styled.div`
  height: 80px;
  background-color: #fff;
  /* display: flex; */
  

  `
const StFooterMain = styled.ul`
  display: flex;
  list-style: none;
  
  flex: 1 1 auto;
      
      display: flex;
      align-items: center;
      justify-content: center;
`
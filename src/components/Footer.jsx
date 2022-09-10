import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//임시 아이콘
import { ImHome2, ImUsers, ImUserCheck  } from "react-icons/im";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <StFooter>
      <ul className="footer_menu">
        <li onClick={() => {
          navigate('/main')
        }}>
          <div className="icon_box">
            <ImHome2 />
          </div>
        </li>
        <li onClick={() => {
          navigate('/community')
        }}>
           <div className="icon_box">
            <ImUsers />
          </div>
        </li>
        <li onClick={() => {
          navigate('/ImUser')
        }}>
          <div className="icon_box">
            <ImUserCheck />
          </div>
        </li>
      </ul>
    </StFooter>
  )
}

const StFooterLayout = styled.div`

div {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

const StLine = styled.hr`
  border: 1px solid black;
`;


const StFooter = styled.div`
  height: 80px;
  background-color: #fff;


  .footer_menu {
    display: flex;
    justify-content: space-between;
    text-align: center;
    
    li {
      flex: 1 1 auto;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .icon_box {
      width: 70%;
      height: 75px;

      font-size: 2.3em;
      
      border-radius: 20px;
      color: #888;

      cursor: pointer;
      transition: all 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover, &.active {
        color: #533483
      }
    }
  }
  `


export default Footer;
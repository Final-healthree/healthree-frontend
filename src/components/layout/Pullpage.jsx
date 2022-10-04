import React from "react";
import styled from "styled-components";

import web_phone from "../../assets/backgroundImg/phone.png";
import web_intro from "../../assets/backgroundImg/Frame.png";

const Pullpage = (props) => {
  return (
    <Web>
      <Phone>
        <WebViewLayout>{props.children}</WebViewLayout>
      </Phone>
    </Web>
  );
};

const Web = styled.div`
  width: 90vw;
  height: 90vh;
  background: url(${web_intro});
  background-size: 714px 197px;
  background-position: 20% 30%;
  background-repeat: no-repeat;
`;

const Phone = styled.div`
  width: 428px;
  height: 85%;
  min-height: 750px;
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background: url(${web_phone}) no-repeat;
  background-size: 100% 100%;
  border: 1px solid pink;

  @media screen and (min-width: 1120px) {
    //1120px이상일 경우
    right: 20%;
    top: 50%;
    transform: translate(15%, -50%);
  }
`;
const WebViewLayout = styled.div`
  width: 385px;
  height: calc(100% - 40px);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  overflow: hidden;
  background: #fff;
`;

export default Pullpage;

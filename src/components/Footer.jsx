import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StFooterLayout>
      <StLine />
      <div>
        Footer
      </div>
    </StFooterLayout>
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


export default Footer;
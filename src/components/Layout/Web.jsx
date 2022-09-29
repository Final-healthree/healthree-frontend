import React from "react";
import styled from "styled-components";
import background from "../../assets/layout/background.png"
import mobileFrame from "../../assets/layout/phone.png"

const Web = () => {
  return (
    <StWebLayout>
      <StBgImg>
        <img src={background} alt=""/>
      </StBgImg>
      {/* <img src = {mobileFrame} alt="" /> */}
    </StWebLayout>
  )
};

const StWebLayout = styled.div`
  
`;

const StBgImg = styled.div`

  & > img {
    width: 100%;
    height: auto;
    max-width: 1920px;
    margin: 0 auto;
  }
`;

const StMFImg = styled.div`

`;

export default Web;

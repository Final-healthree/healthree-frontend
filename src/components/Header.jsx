import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeaderLayout>
      <div>
        Header
      </div>
      <StLine />
    </StHeaderLayout>
  )
}

const StHeaderLayout = styled.div`

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


export default Header;
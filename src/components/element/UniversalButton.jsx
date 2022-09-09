import React from "react";
import styled from "styled-components";

const UniversalButton = () => {
  return (
    <div>
      <StButton>버튼입니다.</StButton>
    </div>
  )
}

const StButton = styled.button`
  color: red;
`;

export default UniversalButton;
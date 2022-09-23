import React from "react";
import styled from "styled-components";

const UniversalButton = (props) => {
  return (
    <div>
      <StButton>{props.name}</StButton>
    </div>
  )
}

const StButton = styled.button`
    width: 95%;
    height: 52px;
    background: #70CCA6;  
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 2px;
`;

export default UniversalButton;
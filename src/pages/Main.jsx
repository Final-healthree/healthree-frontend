import React from "react";
import styled from "styled-components";
import MainGoal from "../components/main/MainGoal";


const Main = () => {
  return (
    <StMainContainer>
      <MainGoal />
    </StMainContainer>
  )
}     

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: red; */
`;

export default Main;
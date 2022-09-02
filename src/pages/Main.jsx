import React from "react";
import styled from "styled-components";
import RegCalendar from "../components/register/Calendar";
import MainGoal from "../components/main/MainGoal";

const Main = () => {
  return (
    <StMainContainer>
      <MainGoal />
      //<RegCalendar />
    </StMainContainer>
  );
};

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: red; */
`;

export default Main;

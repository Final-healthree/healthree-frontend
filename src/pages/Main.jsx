import React from "react";
import styled from "styled-components";
import RegCalendar from "../components/register/Calendar";
import MainGoal from "../components/main/MainGoal";

const Main = () => {
  return (
    <StMainContainer>
      <div>
        Main
        </div>

    </StMainContainer>
  );
};

const StMainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px - 80px );
  overflow-y: scroll;
  /* background-color: red; */
  

`;

export default Main;

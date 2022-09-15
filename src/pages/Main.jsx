import React from "react";
import styled from "styled-components";
import RegCalendar from "../components/register/Calendar";
import GoalSlider from "../components/main/GoalSlider";

const Main = () => {
  return (
    <StMainContainer>
      <GoalSlider />
      {/* <RegCalendar /> */}
    </StMainContainer>
  );
};

const StMainContainer = styled.div`
  /* width: 100%; */
  /* height: calc(100vh-54px-70px); */
  /* height: 100vh; */
`;

export default Main;

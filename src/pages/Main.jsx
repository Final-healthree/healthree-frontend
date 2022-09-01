import React from "react";
import styled from "styled-components";
import RegCalendar from "../components/register/Calendar";
const Main = () => {
  return (
    <StMainContainer>
      <RegCalendar />
    </StMainContainer>
  );
};

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
`;

export default Main;

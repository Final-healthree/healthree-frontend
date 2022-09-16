import React, { useEffect } from "react";
import styled from "styled-components";
import RegCalendar from "../components/register/Calendar";
import GoalSlider from "../components/main/GoalSlider";
import serverAxios from "../components/axios/server.axios";
import { useState } from "react";

const Main = () => {
  // const [existGoal, setExistGoal] = useState(false);

  // let getToken = localStorage.getItem("Token");
  // if (getToken === null) {
  //   let token = new URL(window.location.href).searchParams.get("token");
  //   localStorage.setItem("Token", token);
  // }

  // const ToMainGoal = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 100));
  //   await serverAxios
  //     .get(process.env.REACT_APP_REST_API_KEY + `api/main/goal_day`)
  //     .then((res) => {
  //       setExistGoal(res.data.success);
  //       console.log(res);
  //     });
  // };

  // useEffect(() => {
  //   ToMainGoal();
  // }, []);

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

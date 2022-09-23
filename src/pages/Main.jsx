import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import RegCalendar from "../components/register/Calendar";
import GoalSlider from "../components/main/GoalSlider";
import MyVideo from "../components/video/MyVideo";
import serverAxios from "../components/axios/server.axios";

const Main = () => {
  const [existgoal, setExistgoal] = useState(false);
  console.log(existgoal);

  if (window.location.href.includes("token")) {
    const [url, token] = window.location.href.split("=");
    localStorage.setItem("Token", token);
  }

  const ToMainGoal = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/goals/exist`)
      .then((res) => {
        setExistgoal(res.data.success);
      });
  };

  useEffect(() => {
    ToMainGoal();
  }, []);

  return (
    <StMainContainer>
      {existgoal ? <MyVideo /> : <RegCalendar />}
    </StMainContainer>
  );
};

const StMainContainer = styled.div`
  /* width: 100%; */
  /* height: calc(100vh-54px-70px); */
  /* height: 100vh; */
`;

export default Main;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import RegCalendar from "../components/register/Calendar";
import GoalSlider from "../components/main/GoalSlider";
import serverAxios from "../components/axios/server.axios";

import { existgoal } from "../redux/modules/existgoal";

const Main = () => {
  const exist = useSelector((state) => state.existgoal.exist);
  const dispatch = useDispatch();

  if (window.location.href.includes("token")) {
    const [url, token] = window.location.href.split("=");
    localStorage.setItem("Token", token);
  }

  const ToMainGoal = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/goals/exist`)
      .then((res) => {
        dispatch(existgoal({ exist: res.data.result }));
      });
  };

  useEffect(() => {
    ToMainGoal();
  }, []);

  return (
    <>
      {exist ? <GoalSlider /> : <RegCalendar />}
    </>

  );
};



export default Main;

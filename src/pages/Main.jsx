import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import serverAxios from "../components/axios/server.axios";

import RegCalendar from "../components/register/Calendar";
import GoalSlider from "../components/main/GoalSlider";
import LoadingPage from "./LoadingPage";

import { __existGoal } from "../redux/modules/existgoalSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [regtoday, setRegToday] = useState(true);
  const { isLoading, exist } = useSelector((state) => state.existgoalSlice);

  if (window.location.href.includes("token")) {
    const [url, token] = window.location.href.split("=");
    localStorage.setItem("Token", token);
  }

  const isRegToday = async () => {
    await serverAxios
      .get("/api/goals/is_today_register")
      .then((res) => setRegToday(res.data.result));
  };
  useEffect(() => {
    dispatch(__existGoal());
    isRegToday();
  }, [exist]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <>{exist ? <GoalSlider /> : <RegCalendar regtoday={regtoday} />}</>;
};

export default Main;

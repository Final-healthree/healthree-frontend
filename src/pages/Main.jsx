import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import RegCalendar from "../components/register/Calendar";
import GoalSlider from "../components/main/GoalSlider";
import LoadingPage from "./LoadingPage";

import { __existGoal } from "../redux/modules/existgoalSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, exist } = useSelector((state) => state.existgoalSlice);

  if (window.location.href.includes("token")) {
    const [url, token] = window.location.href.split("=");
    localStorage.setItem("Token", token);
  }
  useEffect(() => {
    dispatch(__existGoal());
  }, [exist]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <>{exist ? <GoalSlider /> : <RegCalendar />}</>;
};

export default Main;

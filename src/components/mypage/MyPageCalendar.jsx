import React, { useState, useEffect } from "react";
import styled from "styled-components";

import serverAxios from "../axios/server.axios";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

import getDateOption from "./get-date-option";

import CalendarCss from "../calendar/calendar";

function MyPageCalendar() {
  const [success, setSuccess] = useState([]);
  const [fail, setFail] = useState([]);

  const getDates = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/goals/mine`)
      .then((res) => {
        setSuccess([...res.data.result.date.success]);
        setFail([...res.data.result.date.fail]);
      });
  };

  useEffect(() => {
    getDates();
  }, []);

  const { modifiers, modifiersStyles } = getDateOption({
    success: success,
    fail: fail,
  });

  return (
    <Container>
      <CalendarCss />

      <DayPicker
        locale={ko}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </Container>
  );
}
export default MyPageCalendar;

const Container = styled.div`
  overflow: auto;
  flex: 1;
  margin: 0 auto;
`;

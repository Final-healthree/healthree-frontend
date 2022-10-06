import React, { useState, useEffect } from "react";
import styled from "styled-components";

import serverAxios from "../axios/server.axios";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

import getDate from "./getdate/get-date";

import CalendarCss from "../calendar/calendar";
import { format } from "date-fns";

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

  const { modifiers, modifiersStyles } = getDate({
    success: success,
    fail: fail,
  });

  const formatCaption = (date, options) => {
    const y = format(date, "yyyy");
    const m = format(date, "MM", { locale: options?.locale });
    return `${y}년 ${m}월 `;
  };

  return (
    <Container>
      <CalendarCss />

      <DayPicker
        locale={ko}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
        formatters={{ formatCaption }}
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

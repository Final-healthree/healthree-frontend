import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/modules/regday";

import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

import { addDays, format } from "date-fns";
import CalendarCss from "../calendar/calendar";
import { DayPicker } from "react-day-picker";

const RegCalendar = ({ regtoday }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = new Date();

  const handleDayClick = (day) => {
    setRange({ from: day, to: addDays(day, 2) });
  };

  const sendDay = (e) => {
    dispatch(
      register({
        start: format(range.from, "yyyy/MM/dd"),
        last: format(range.to, "yyyy/MM/dd"),
      })
    );
    navigate("/register");
  };

  const defaultSelected = (status) => {
    if (status) {
      return { from: today, to: addDays(today, 2) };
    } else {
      return { from: addDays(today, 1), to: addDays(today, 3) };
    }
  };

  const [range, setRange] = useState(defaultSelected(regtoday));

  // const week = [{ dayOfWeek: [0, 6] }];
  // const weekStyle = {
  //   color: "red",
  // };

  const formatCaption = (date, options) => {
    const y = format(date, "yyyy");
    const m = format(date, "MM", { locale: options?.locale });
    return `${y}년 ${m}월 `;
  };

  const day = [
    regtoday ? { before: new Date() } : { before: addDays(today, 1) },
  ];

  return (
    <Container>
      <HeaderArea>
        <Title>목표를 세워보세요!</Title>
        <Today>{format(new Date(today), "yyyy.MM.dd")}</Today>
      </HeaderArea>

      <CalendarArea>
        <CalendarCss />
        <DayPicker
          showOutsideDays
          locale={ko}
          mode="range"
          defaultMonth={today}
          selected={range} //이 범위 만큼 선택
          onDayClick={handleDayClick}
          disabled={day}
          formatters={{ formatCaption }}
        ></DayPicker>
      </CalendarArea>

      <BtnArea>
        <RegBtn onClick={sendDay}>운동 시작하기</RegBtn>
      </BtnArea>
    </Container>
  );
};

export default RegCalendar;

const Container = styled.div`
  flex: 1;
  overflow: auto;
`;

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 10px 0 10px;
`;
const Title = styled.h3`
  margin: 0;
`;

const Today = styled.span`
  color: #4b4b4b;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 16px;
`;

const CalendarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  height: 445px;
`;

const BtnArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const RegBtn = styled.button`
  position: absolute;
  top: 20px;

  width: 340px;
  height: 52px;
  background: #70cca6;
  border-radius: 2px;
  border: none;
  font-size: medium;
  font-weight: 900;
  font-family: sans-serif;
  cursor: pointer;
`;

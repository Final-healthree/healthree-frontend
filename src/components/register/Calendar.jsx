import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/modules/regday";

import { DayPicker } from "react-day-picker";
import { addDays, format } from "date-fns";
import ko from "date-fns/locale/ko";
import "./day-picker.css";

const RegCalendar = () => {
  const dispatch = useDispatch();
  const regDay = useSelector((state) => state.registerday);
  const navigate = useNavigate();

  const [last, setLast] = useState(new Date());
  const lastday = new Date(last.setDate(last.getDate() + 2));
  const [day, setday] = useState([new Date(), new Date(lastday)]);
  const onChange = (value) => {
    setday([new Date(value), new Date(value.setDate(value.getDate() + 2))]);
  };

  const sendDay = (e) => {
    dispatch(register(day));
    navigate("/register");
  };

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  function toStringByFormatting(source, delimiter = "-") {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }

  const pastMonth = new Date(2020, 10, 15);

  const defaultSelected = {
    from: pastMonth,
    to: addDays(pastMonth, 2),
  };

  const [range, setRange] = useState(defaultSelected);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const handleDayClick = (day) => setSelectedDay(day);


  return (
    <Container>
      <HeaderArea>
        <Title>목표를 세워보세요!</Title>
        <Today>{toStringByFormatting(new Date(), ".")}</Today>
      </HeaderArea>

      <CalendarArea>
        <DayPicker
          mode="range"
          defaultMonth={pastMonth}
          selected={range}
          onDayClick={handleDayClick}
          locale={ko}
        />
      </CalendarArea>

      <BtnArea>
        <RegBtn onClick={sendDay}>날짜 등록하기</RegBtn>
      </BtnArea>
    </Container>
  );
};

export default RegCalendar;

const Container = styled.div``;

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 8px;
`;
const Title = styled.h3`
  margin: 0;
`;

const Today = styled.span`
  color: #4b4b4b;
`;

const CalendarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 300px; */
`;

const BtnArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const RegBtn = styled.button`
  position: absolute;
  top: 130px;

  width: 340px;
  height: 52px;
  background: #70cca6;
  border-radius: 2px;
  border: none;
  font-size: medium;
  font-weight: 700;
`;

const Test = styled.p`
  border: 1px solid pink;
`;

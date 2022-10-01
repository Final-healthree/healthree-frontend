import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/modules/regday";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

import { addDays, format } from "date-fns";
import CalendarCss from "../calendar/calendar";
// function CustomCaption(props: CaptionProps) {
//   // const { goToMonth, nextMonth, previousMonth } = useNavigation();
//   return <h2>{format(props.displayMonth, "MMM yyy")}</h2>;
// }

const RegCalendar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const today = new Date();
  const defaultSelected = {
    from: today,
    to: addDays(today, 2),
  };
  const [range, setRange] = useState(defaultSelected);

  const week = [{ dayOfWeek: [0, 6] }];
  const weekStyle = {
    color: "red",
  };

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
          modifiers={{ week: week }}
          modifiersStyles={{ week: weekStyle }}
          disabled={[{ before: new Date() }]}
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

  padding: 0 8px;
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

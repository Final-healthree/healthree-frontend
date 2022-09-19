import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/modules/regday";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

import { addDays, formatISO9075 } from "date-fns";

const RegCalendar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDayClick = (day) => {
    console.log(range);
    console.log(formatISO9075(new Date(day), { representation: "date" }));
    setRange({ from: day, to: addDays(day, 2) });
  };

  const sendDay = (e) => {
    dispatch(register(range));
    navigate("/register");
  };

  const today = new Date();

  const defaultSelected = {
    from: today,
    to: addDays(today, 2),
  };
  const [range, setRange] = useState(defaultSelected);

  return (
    <Container>
      <HeaderArea>
        <Title>목표를 세워보세요!</Title>
        <Today>
          {formatISO9075(new Date(today), { representation: "date" })}
        </Today>
      </HeaderArea>

      <CalendarArea>
        <style>{css}</style>
        <DayPicker
          showOutsideDays
          locale={ko}
          mode="range"
          defaultMonth={today}
          selected={range} //이 범위 만큼 선택
          onDayClick={handleDayClick}
        ></DayPicker>
      </CalendarArea>

      <BtnArea>
        <RegBtn onClick={sendDay}>날짜 등록하기</RegBtn>
      </BtnArea>
    </Container>
  );
};

export default RegCalendar;

const css = `
  .rdp {
    --rdp-cell-size: 46px;
    --rdp-accent-color: #70CCA6;
    --rdp-outline: none;
  }
  .rdp-day_outside {
    color: #DADADA;
  }

  .rdp-caption {
    width: 322px;
    height: 81px;

    background: #2C8D65;
  }

  .rdp-caption_label{
    color : #fff
  }

  .rdp-head_row,
  .rdp-head,
  .rdp-head_cell {
    background: #70CCA6;
    margin : 0;
    color : #fff;
  }

  .DayPicker-Day--monday {
    color: #00bcd4;
  }


`;

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
  height: 400px;
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
  cursor: pointer;
`;

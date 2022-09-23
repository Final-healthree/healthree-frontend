import React, { useState, useEffect } from "react";
import styled from "styled-components";

//svg 이미지
import serverAxios from "../axios/server.axios";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

function MyPageCalendar2() {
  const dataList = [
    {
      goal_id: 38,
      date: ["2022-09-03 09:00:00", "2022-09-04 09:00:00"],
    },
    {
      goal_id: 89,
      date: ["2022-08-01 09:00:00", "2022-08-02 09:00:00"],
    },
    {
      goal_id: 90,
      date: ["2022-08-04 09:00:00", "2022-08-05 09:00:00"],
    },
    {
      goal_id: 91,
      date: ["2022-08-07 09:00:00"],
    },
    {
      goal_id: 92,
      date: [
        "2022-08-10 09:00:00",
        "2022-08-11 09:00:00",
        "2022-08-12 09:00:00",
      ],
    },
    {
      goal_id: 93,
      date: [
        "2022-08-13 09:00:00",
        "2022-08-14 09:00:00",
        "2022-08-15 09:00:00",
      ],
    },
    {
      goal_id: 94,
      date: [
        "2022-08-16 09:00:00",
        "2022-08-17 09:00:00",
        "2022-08-18 09:00:00",
      ],
    },
    {
      goal_id: 95,
      date: [
        "2022-08-19 09:00:00",
        "2022-08-20 09:00:00",
        "2022-08-21 09:00:00",
      ],
    },
    {
      goal_id: 108,
      date: [
        "2022-09-14 09:00:00",
        "2022-09-15 09:00:00",
        "2022-09-16 09:00:00",
      ],
    },
  ];

  const { getDateOption } = require("./get-date-option");
  const { modifiers, modifiersStyles } = getDateOption(dataList);
  // 값 받아올 때 res 값에 함수 넣기

  return (
    <Container>
      <style>{css}</style>
      <DayPicker
        locale={ko}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </Container>
  );
}
export default MyPageCalendar2;

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

  .rdp-button_reset {
    color : #fff;
  }


`;

const Container = styled.div``;

const Stcalendar = styled.div`
  padding-top: 23px;
`;

const Stamp = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  transform: translate(5px, -22px);

  background-size: cover;
  background-position: center;
  z-index: 2;
`;

const HilightOne = styled.div`
  width: 33px;
  height: 33px;
  position: absolute;
  transform: translate(2px, -26px);
  border-radius: 100px 100px 100px 100px;
  background-color: #eeae67;
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

const OhilightAA = styled.div`
  width: 41px;
  height: 33px;
  position: absolute;
  transform: translate(2px, -26px);
  border-radius: 100px 0px 0px 100px;
  background-color: #eeae67;
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

const OhilightBB = styled.div`
  width: 41px;
  height: 33px;
  position: absolute;
  transform: translate(-7px, -26px);
  border-radius: 0px 100px 100px 0px;
  background-color: #eeae67;

  background-size: cover;
  background-position: center;
  z-index: -100;
`;

const GhilightAA = styled.div`
  width: 41px;
  height: 33px;
  position: absolute;
  transform: translate(3px, -26px);
  border-radius: 100px 0px 0px 100px;
  background-color: #70cca6;
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

const GhilightBB = styled.div`
  width: 50px;
  height: 33px;
  position: absolute;
  transform: translate(-7px, -26px);
  border-radius: 0px 0px 0x 0px;
  background-color: #70cca6;
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

const GhilightCC = styled.div`
  width: 42px;
  height: 33px;
  position: absolute;
  transform: translate(-7px, -26px);
  border-radius: 0px 100px 100px 0px;
  background-color: #70cca6;
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

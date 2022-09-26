import React, { useState, useEffect } from "react";
import styled from "styled-components";

import serverAxios from "../axios/server.axios";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

import getDateOption from "./get-date-option";

function MyPageCalendar() {
  const dataList = {
    success: [
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
    ],
    fail: [
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
    ],
  };
  const { modifiers, modifiersStyles } = getDateOption({
    success: dataList.success,
    fail: dataList.fail,
  });

  // const getDates = async () => {
  //   await serverAxios
  //     .get(process.env.REACT_APP_REST_API_KEY + `api/users/my_calendar`)
  //     .then((data) => {
  //       setDates([...dates, ...data.data.result.date]);
  //     });
  // };

  // useEffect(() => {
  //   getDateOption(dataList.success);
  // }, []);

  // console.log(dataList);

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
export default MyPageCalendar;

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

const Stcalendar = styled.div`
  padding-top: 23px;
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import serverAxios from "../axios/server.axios";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

import getDateOption from "./get-date-option";

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

  .rdp-nav_button {
    color : #fff;
  }


`;

const Container = styled.div`
  overflow: auto;
  flex: 1;
`;

const Stcalendar = styled.div`
  padding-top: 23px;
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

//svg 이미지
import stamp from "../../assets/myCalendar/stamp.svg";
import serverAxios from "../axios/server.axios";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ko from "date-fns/locale/ko";

function MyPageCalendar() {
  const [dates, setDates] = useState([]);
  const date1 = [];
  const date2 = [];
  const date3 = [];

  // const getDates = async () => {
  //   await serverAxios
  //     .get(process.env.REACT_APP_REST_API_KEY + `api/users/my_calendar`)
  //     .then((data) => {
  //       setDates([...dates, ...data.data.result.date]);
  //     });
  // };

  // useEffect(() => {
  //   getDates();
  // }, []);

  dates.map((item) => {
    if (item.date.length === 3) {
      date3.push(...item.date);
    } else if (item.date.length === 2) {
      date2.push(...item.date);
    } else {
      date1.push(item.date);
    }
  });

  const failA = date2.filter((day, inx) => inx % 2 === 0);
  const failB = date2.filter((day, inx) => inx % 2 !== 0);
  const completeA = date3.filter((day, inx) => inx % 3 === 0);
  const completeB = date3.filter((day, inx) => inx % 3 === 1);
  const completeC = date3.filter((day, inx) => inx % 3 === 2);

  return (
    <Container>
      <style>{css}</style>
      <DayPicker showOutsideDays locale={ko} />
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

const Stamp = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  transform: translate(5px, -22px);
  background-image: url(${stamp});
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

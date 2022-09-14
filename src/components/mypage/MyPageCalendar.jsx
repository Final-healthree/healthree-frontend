import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
//svg 이미지
import stamp from "../../assets/myCalendar/stamp.svg";

function MyPageCalendar() {
  //목 Data
  const result = {
    data: [
      { goal_id: "goal-id2", date: ["2022.10.02.", "2022.10.03."] },
      { goal_id: "goal-id2", date: ["2022.10.15.", "2022.10.16."] },
      {
        goal_id: "goal-id4",
        date: ["2022.10.21.", "2022.10.22.", "2022.10.23."],
      },
      {
        goal_id: "goal-id4",
        date: ["2022.10.08.", "2022.10.09.", "2022.10.10."],
      },
      { goal_id: "goal-id5", date: ["2022.10.29."] },
    ],
  };
  const test = result.data;
  const test1 = [];
  const test2 = [];
  const test3 = [];

  test.map((item) => {
    if (item.date.length === 3) {
      test3.push(...item.date);
    } else if (item.date.length === 2) {
      test2.push(...item.date);
    } else {
      test1.push(item.date);
    }
  });


  const failA = test2.filter((item, inx) => inx % 2 == 0)
  const failB = test2.filter((item, inx) => inx % 2 !== 0)
  const completeA = test3.filter((item, inx) => inx % 3 == 0)
  const completeB = test3.filter((item, inx) => inx % 3 == 1)
  const completeC = test3.filter((item, inx) => inx % 3 == 2)

  return (
    <Stcalendar>
      <Calendar
        tileContent={(e) => {
          if (test1.find((x) => new Date(x).getTime() === e.date.getTime())) {
            return (
              <>
                <Stamp />
                <HilightOne />
              </>
            );
          }

          if (failA.find((x) => new Date(x).getTime() === e.date.getTime())) {
            return (
              <>
                <Stamp />
                <OhilightAA />
              </>
            );
          }
          if (failB.find((x) => new Date(x).getTime() === e.date.getTime())) {
            return (
              <>
                <Stamp />
                <OhilightBB />
              </>
            );
          }

          if (
            completeA.find((x) => new Date(x).getTime() === e.date.getTime())
          ) {
            return (
              <>
                <Stamp />
                <GhilightAA />
              </>
            );
          }
          if (
            completeB.find((x) => new Date(x).getTime() === e.date.getTime())
          ) {
            return (
              <>
                <Stamp />
                <GhilightBB />
              </>
            );
          }
          if (
            completeC.find((x) => new Date(x).getTime() === e.date.getTime())
          ) {
            return (
              <>
                <Stamp />
                <GhilightCC />
              </>
            );
          }
        }}
      />
    </Stcalendar>

  );
}
export default MyPageCalendar;
const Stcalendar = styled.div`
 padding-top:23px;
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
  background-color: #EEAE67;

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

import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
//svg 이미지
import GhilightA from "../../assets/myCalendar/GhilightA.svg";
// import GhilightB from '../../assets/myCalendar/GhilightB.svg'
// import GhilightC from '../../assets/myCalendar/GhilightC.svg'
import OhilightA from "../../assets/myCalendar/OhilightA.svg";
// import OhilightB from '../../assets/myCalendar/OhilightB.svg'
import OhilightOne from "../../assets/myCalendar/OhilightOne.svg";
import stamp from "../../assets/myCalendar/stamp.svg";

function MyPageCalendar() {
  const [value, onChange] = useState(new Date());
  //목 Data
  const result = {
    data: [
      { goal_id: "goal-id2", date: ["2022.9.15.", "2022.9.16."] },
      { goal_id: "goal-id3", date: ["2022.9.20."] },
      {
        goal_id: "goal-id4",
        date: ["2022.9.21.", "2022.9.22.", "2022.9.23."],
      },
      { goal_id: "goal-id5", date: ["2022.9.29."] },
      { goal_id: "goal-id2", date: ["2022.9.18.", "2022.9.19."] },
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

  console.log(test2);

  const aa = test2.filter((item, inx) => inx % 2 == 0); //foreach 사용해서 다시 구현해보기
  const bb = test2.filter((item, inx) => inx % 2 !== 0);

  console.log(aa);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={(e) => {
          if (test1.find((x) => new Date(x).getTime() === e.date.getTime())) {
            return (
              <>
                <Stamp />
                <HilightC />
              </>
            );
          }

          if (test2.find((x) => new Date(x).getTime() === e.date.getTime())) {
          }
          if (aa.find((x) => new Date(x).getTime() === e.date.getTime())) {
            return (
              <>
                <Stamp />
                <HilightA />
              </>
            );
          }
          if (bb.find((x) => new Date(x).getTime() === e.date.getTime())) {
            return (
              <>
                <Stamp />
                <HilightB />
              </>
            );
          }

          if (test3.find((x) => new Date(x).getTime() === e.date.getTime())) {
            return (
              <>
                <Stamp />
                <HilightA />
              </>
            );
          }
        }}
      />
    </div>
  );
}
export default MyPageCalendar;

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

const HilightA = styled.div`
  width: 33px;
  height: 33px;
  position: absolute;
  transform: translate(1px, -25px);
  background-image: url(${OhilightOne});
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

const HilightB = styled.div`
  width: 33px;
  height: 33px;
  position: absolute;
  transform: translate(1px, -25px);
  background-image: url(${OhilightA});
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

const HilightC = styled.div`
  width: 33px;
  height: 33px;
  position: absolute;
  transform: translate(2px, -25px);
  background-image: url(${GhilightA});
  background-size: cover;
  background-position: center;
  z-index: -100;
`;

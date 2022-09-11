import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
//svg 이미지
// import GhilightA from '../../assets/myCalendar/GhilightA.svg'
// import GhilightB from '../.ㄴ/assets/myCalendar/GhilightB.svg' 
// import GhilightC from '../../assets/myCalendar/GhilightC.svg' 
// import OhilightA from '../../assets/myCalendar/OhilightA.svg' 
// import OhilightB from '../../assets/myCalendar/OhilightB.svg'
import OhilightOne from '../../assets/myCalendar/OhilightOne.svg'
import stamp from '../../assets/myCalendar/stamp.svg'







function MyPageCalendar() {
  const [value, onChange] = useState(new Date());
  console.log(value)

  const test1 = ["2022. 9 .5."]
  const test2 = ["2022. 9 .6.", "2022-9-7."]
  const test3 = ["2022. 9 .8.", "2022-9-9.", "2022. 9 . 10."]

  return (
    <div>
      <Calendar onChange={onChange} value={value} 
      tileContent={(e)=>{
        console.log(e)
      if (test1.find((x) => new Date(x).getTime() === e.date.getTime())){
        return <>
        <HilightA/>
        <HilightB/>
        </>
      
      }
       if (test2.find((x) => new Date(x).getTime() === e.date.getTime())){
         return <>
         <HilightA/>
         <HilightB/>
         </>
       }
       if (test3.find((x) => new Date(x).getTime() === e.date.getTime())){
       return <>
       <HilightA/>
       <HilightB/>
       </>
       }
      }}
      />
    </div>
  );
}
export default MyPageCalendar

const HilightA = styled.div`
width: 25px;
height: 25px;
position: absolute;
transform: translate(5px, -22px);
background-image: url(${stamp});
background-size: cover;
background-position: center;
z-index: 2;
`

const HilightB = styled.div`
width: 33px;
height: 33px;
position: absolute;
transform: translate(1px, -25px);
background-image: url(${OhilightOne});
background-size: cover;
background-position: center;
z-index: -100;
`

const HilightC = styled.div`
width: 35px;
height: 35px;
position: absolute;
transform: translate(1px, -27px);
background-image: url(${stamp});
background-size: cover;
background-position: center;
`
import React, { useState } from "react";
import styled from "styled-components";
//svg 이미지
// import tapMycalendarA from '../../assets/myCalendar/tabMycalendarA.svg'
// import tapMycalendarB from '../../assets/myCalendar/tabMycalendarB.svg'
// import tapMyVideoA from '../../assets/myCalendar/tabMyVideoA.svg'
// import tapMyVideoB from '../../assets/myCalendar/tabMyVideoB.svg'


function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'MyCalendar', content: " Tab menu One" },
    { name: 'MyVideo', content: " Tab menu Two" },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((ele, index) => {
            console.log(index)
            return (
              <li
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            )
          })}
        </TabMenu>
      </div>
    </>
  );
};

export default Tab

const TabMenu = styled.ul`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
    &:hover, &.active {
      color: #2C8D65;
    }
`;

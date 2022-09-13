import React, { useEffect } from "react";
import styled from "styled-components";
import serverAxios from "../components/axios/server.axios";

import Tab from "../components/mypage/Tab";
import MyPageCalendar from "../components/mypage/MyPageCalendar";
// import MyVideo from "../components/video/MyVideo";

const Mypage = () => {
  const fetchTodos = async () => {
    const data = await serverAxios.get(process.env.REACT_APP_REST_API_KEY+"api/users/my_calendar");
  console.log(data)
  };
  
  useEffect(()=> {fetchTodos()},[])
  

  return (
    <StMainContainer>
      <Tab />
      {/* <MyPageCalendar /> */}
      {/* <MyVideo /> */}
    </StMainContainer>
  );
};

export default Mypage;

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
`;

import React, { useEffect } from "react";
import MyVideo from "../components/video/MyVideo";
import styled from "styled-components";
import serverAxios from "../components/axios/server.axios";

const Mypage = () => {
  const fetchTodos = async () => {
    const data = await serverAxios.get(process.env.REACT_APP_REST_API_KEY+"api/users/my_calendar");
  console.log(data)
  };
  
  useEffect(()=> {fetchTodos()},[])
  

  return (
    <StMainContainer>
      Mypage
      <MyVideo />
    </StMainContainer>
  );
};

export default Mypage;

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
`;

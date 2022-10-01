import React, { useState, useEffect } from "react";
import styled from "styled-components";
import serverAxios from "../axios/server.axios";
import { useNavigate } from "react-router-dom";
import btn from "../../assets/setting/PaginationBtn.png"

const SettingDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");

  const [profileImage, setProfileImage] = useState();
  const [nickName, setNickName] = useState();

  const getProfile = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/goals/mine`)
      .then((result) => {
        setProfileImage(result.data.result.profile_image);
        setNickName(result.data.result.nickname);
      });
  };

  const Logout = () => {
    alert("로그아웃 성공");
    localStorage.clear();
    window.location.replace("/");
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <StSettingLayout>
      <StProfileLayout>
        <StProfile>
          <img style={{ width: "34px", height: "34px" }} src={profileImage} alt=""/>
        </StProfile>
        <StNickName>{nickName}</StNickName>
      </StProfileLayout>

      <StSettingContainer>
        <div>
          <p>앱 다운로드</p>
          <img src={btn} alt="" />
        </div>
          <hr />
        <div>
          <p>사용자 가이드</p>
          <img src={btn} alt="" />
        </div>
          <hr />
        <div>
          <p>버그 신고</p>
          <img onClick={()=>{
            window.open("https://forms.gle/khRnXR5PzqhHZEe58", "_blank")
          }} 
          src={btn} alt="" />
        </div>
          <hr />
        <div>
          <p>로그아웃</p>
          <img onClick={()=>{
            Logout();
          }} 
          src={btn} alt="" />
        </div>
          <hr />
      </StSettingContainer>
    </StSettingLayout>
  )
}

const StSettingLayout = styled.div`
  margin-top: 10px;
`;

const StProfileLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;  
`;

const StProfile = styled.div`
  display: block;
  width: 34px;
  height: 34px;
  border-radius: 70%;
  overflow: hidden;
`;

const StNickName = styled.div``;


const StSettingContainer = styled.div`
  margin-top: 30px;
 
  & > div {
    display: flex;
    justify-content: space-between;

    padding: 0 20px;

    & > img {
      cursor: pointer;
    }

    & > p {
      font-family: sans-serif;
      font-weight: 700;
    }
  }
`;

export default SettingDetail;
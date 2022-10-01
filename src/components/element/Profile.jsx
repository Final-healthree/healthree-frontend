import React, { useEffect, useState } from "react";
import styled from "styled-components";
import serverAxios from "../axios/server.axios";
import { useNavigate } from "react-router-dom";

function Profile() {
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
    <StArea>
      <StProfile>
        <img style={{ width: "34px", height: "34px" }} src={profileImage} alt=""/>
      </StProfile>
      <StNickName>{nickName}</StNickName>
      <Login onClick={Logout}>로그아웃</Login>
    </StArea>
  );
}

export default Profile;

const StArea = styled.div`
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

const Login = styled.button`
  color: #eeae67;
  background-color: #fff;
  border: none;
  margin-left: 150px;

  font-family: sans-serif;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid #eeae67;
  }
`;

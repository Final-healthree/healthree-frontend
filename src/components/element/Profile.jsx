import React, { useEffect, useState } from "react";
import styled from "styled-components";
import serverAxios from "../axios/server.axios";

function Profile() {
  const [profileImage, setProfileImage] = useState();
  const [nickName, setNickName] = useState();

  const getProfile = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/users/my_calendar`)
      .then((result) => {
        // console.log(result);
        setProfileImage(result.data.result.profile_image);
        setNickName(result.data.result.nickname);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <StArea>
      <StProfile>
        <img style={{ width: "34px", height: "34px" }} src={profileImage} />
      </StProfile>
      <StNickName>{nickName}</StNickName>
    </StArea>
  );
}

export default Profile;

const StArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 0px 10px 0px;
`;

const StProfile = styled.div`
  display: block;
  width: 34px;
  height: 34px;
  border-radius: 70%;
  overflow: hidden;
`;

const StNickName = styled.div``;

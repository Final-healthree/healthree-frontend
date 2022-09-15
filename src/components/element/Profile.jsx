import React, { useEffect, useState } from "react";
import serverAxios from "../axios/server.axios";

function Profile() {
  const [profileImage, setProfileImage] = useState();
  const [nickName, setNickName] = useState();

  const getProfile = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/users/my_calendar`)
      .then((result) => {
        console.log(result);
        setProfileImage(result.data.result.profile);
        setNickName(result.data.result.nickname);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <img style={{ width: "100px", height: "100px" }} src={profileImage} />
      <h2> {nickName} </h2>
    </div>
  );
}

export default Profile;

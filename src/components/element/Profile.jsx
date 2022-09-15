import React, { useEffect, useState } from "react";
import serverAxios from "../axios/server.axios";

function Profile() {
    const [profileImage, setProfileImage] = useState();
    const [nickName, setNickName] = useState();
    
    const getProfile = async () => {
        await serverAxios
        .get(process.env.REACT_APP_REST_API_KEY + `api/users/my_calendar`)
        .then((result) => {
            setProfileImage([...profileImage, ...result.date]);
        });
    };

    const getNickName = async () => {
        await serverAxios
        .get(process.env.REACT_APP_REST_API_KEY + `api/users/my_calendar`)
        .then((result) => {
            setNickName([...profileImage, ...result.date]);
        });
    };
    useEffect(() => {
        getProfile();
          }, []);
    
    return (
        <div>
            <img src={profileImage} />
            <h2> {nickName} </h2>
        </div>


    );
};

export default Profile

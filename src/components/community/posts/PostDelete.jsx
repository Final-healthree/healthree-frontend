import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";
import { decodeToken } from "react-jwt";

import Delete from "../../../assets/community/postDelete/delete.svg"
import Cancle from "../../../assets/community/postDelete/cancle.svg"

function DeleteHandler({}){
  const param = useParams();
  const navigate = useNavigate();
  const [getpost, setGetpost] = useState({});

  const token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(token);

    const deletePost = () => {
        serverAxios.delete(`api/posts/${param.postid}`).then((res) => {
          if (res.data.success) {
            alert("삭제되었습니다.");
            navigate("/community");
          }
        });
      };
    return (
        <StDeleteModalLayout>
            <StDeleteModalContainer>
                <StGuideTitle>
                    <p> 삭제하시겠습니까?</p>
                </StGuideTitle>
                <StButton>
                {myDecodedToken.payload.user_id === getpost.user_id ? (
                    <image src={Delete} 
                        onClick={deletePost}
                        alt=""
                    />
                ) : null}
                    <image src={Cancle}
                        onClick={() => {
                            
                        }}
                    />
                </StButton>
            </StDeleteModalContainer>
        </StDeleteModalLayout>
    )
};
export default DeleteHandler;

const StDeleteModalLayout = styled.div`
    /* position: relative;
    left: 0px;
    right: 0;
    top: 0px;
    bottom: 0;

    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    margin: auto;
    margin-left: 0px;
    
    width: 320px;
    height: 500px;
    
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column; */
    z-index: 100;
    `;

const StDeleteModalContainer = styled.div`
width: 311px;
height: 130px;

background-color: #fff;
border-radius: 2px;

z-index: 100;
margin: auto;
margin-left: 0px;
position: relative;
left: -0px;
right: 0;
top: -0px;
bottom: 0;

display: flex;
flex-flow: column;
`;

const StGuideTitle = styled.div`
`;

const StButton = styled.div`
display: flex;
`;
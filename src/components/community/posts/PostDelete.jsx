import { React, useState } from "react";
import styled from "styled-components";
import Delete from "../../../assets/community/postDelete/delete.svg"
import Cancle from "../../../assets/community/postDelete/cancle.svg"

const PostDelete = (props) => {
    const { setmodal } = props;

    return (
        <StDeleteModalLayout>
            <StDeleteModalContainer>
                <StGuideTitle>
                    <p> 게시글을 삭제하시겠습니까?</p>
                </StGuideTitle>
                <StButton>
                    <image src={Delete} />
                    <image src={Cancle}
                        onClick={() => {
                            setmodal(false);
                        }}
                    />
                </StButton>
            </StDeleteModalContainer>
        </StDeleteModalLayout>
    )
};
export default PostDelete;

const StDeleteModalLayout = styled.div`
    position: relative;
    left: -13px;
    right: 0;
    top: -200px;
    bottom: 0;

    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    z-index: 100;
    margin: auto;
    margin-left: 25px;

    width: 320px;
    height: 500px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`;

const StDeleteModalContainer = styled.div`
width: 311px;
height: 130px;

background-color: #fff;
border-radius: 2px;

/* z-index: 100;
margin: auto;
margin-left: 0px;
position: relative;
left: -0px;
right: 0;
top: -0px;
bottom: 0; */

display: flex;
flex-flow: column;
`;

const StGuideTitle = styled.div`
`;

const StButton = styled.div`
display: flex;
`;
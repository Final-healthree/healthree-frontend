import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import serverAxios from "../../axios/server.axios";
import { useJwt } from "react-jwt";

function CommentInput(props) {
console.log(props)
    const [newcomments, setNewComments] = useState({
        comment: "",
    });

    const onChangeHandler = (e) => {
        const { value } = e.target;
        setNewComments({ comment: value, });
    };

    console.log(newcomments)

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (newcomments === "") {
            return alert("댓글을 입력해주세요");
        }
        await serverAxios
            .post(process.env.REACT_APP_REST_API_KEY + `api/comments/${props.data}`, newcomments)
            .then((res) => console.log(res))
    }

        return (
            <StWrap>
                <InputBox>
                    <input
                        onChange={onChangeHandler}
                        type="text"
                        value={newcomments.comment}
                        placeholder="Text"
                    />
                    <InPutBtn 
                    onClick ={onSubmitHandler}>
                        댓글달기
                    </InPutBtn>
                </InputBox>
            </StWrap>
        );
    };


export default CommentInput;

const StWrap = styled.div`
 width: 100%;
 min-height: 88px;
  
 padding: 10px 24px;
 
 display: flex;
 gap: 10px;
  
 position: absolute;
 bottom: 0;

`
const InputBox = styled.button`
border:0;
outline: 0;
background-color: transparent;
`;

const InPutBtn = styled.button`
color: black;
background-color: #70CCA6;
border:0;
outline: 0;
`;

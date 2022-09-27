import React, { useState } from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

function CommentInput(props) {
  const [newcomments, setNewComments] = useState({
    comment: "",
  });

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNewComments({ comment: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (newcomments === "") {
      return alert("댓글을 입력해주세요");
    }
    await serverAxios
      .post(
        process.env.REACT_APP_REST_API_KEY + `api/comments/${props.data}`,
        newcomments
      )
      .then((res) => console.log(res));
  };

  return (
    <StWrap>
      <InputBox>
        <Input
          onChange={onChangeHandler}
          type="text"
          value={newcomments.comment}
          placeholder="Text"
        />
      </InputBox>
        <InPutBtn onClick={onSubmitHandler}>댓글달기</InPutBtn>
    </StWrap>
  );
}

export default CommentInput;

const StWrap = styled.div`
  width: 100%;
  min-height: 20px;

  padding: 10px 24px;
  display: flex;

  gap: 6px

  /* position: absolute; */
  /* bottom: 0; */
`;
const Input = styled.input`
width : 270px;
height : 27px;
font-size : 16px
`

const InputBox = styled.div`
  
border: 0;
  outline: 0;
  background-color: transparent;
  gap: 10px;

`;

const InPutBtn = styled.button`
  color: black;
  background-color: #70cca6;
  border: 0;
  outline: 0;
`;

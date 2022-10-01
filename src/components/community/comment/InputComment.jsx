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
      return alert("댓글을 입력해주세요:(");
    }
    await serverAxios
      .post(
        process.env.REACT_APP_REST_API_KEY + `api/comments/${props.data}`,
        newcomments
      )
      .then((res) => {
        if (res.data.success) {
          alert("댓글이 등록되었어요:)");
          window.location.reload();
        }
      });
  };

  return (
    <StWrap>
      <InputBox>
        <Input
          onChange={onChangeHandler}
          type="text"
          value={newcomments.comment}
          placeholder="댓글을 달아주세요:)"
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

  margin-left: 16px;
  margin-top: 15px;
  margin-bottom: 3px;
  display: flex;

  gap: 7px;

  /* position: absolute; */
  /* bottom: 0; */
`;
const Input = styled.input`
  width: 260px;
  height: 27px;
  font-size: 15px;
  font-family: sans-serif;
  padding-left: 5px;
`;

const InputBox = styled.div`
  border: 0;
  outline: 0;
  background-color: transparent;
  gap: 10px;
`;

const InPutBtn = styled.button`
  color: black;
  background-color: #70cca6;
  border: none;
  outline: 0;
  font-family: sans-serif;
  font-weight: 700;
`;

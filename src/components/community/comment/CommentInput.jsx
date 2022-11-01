import React, { useState } from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

function CommentInput(props) {
  const create = props.create;
  const setCreate = props.setCreate;
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
      .post(`api/comments/${props.data}`, newcomments)
      .then((res) => {
        if (res.data.success) {
          setCreate(!create);
          setNewComments({ comment: "" });
        }
      });
  };

  return (
    <StWrap>
      <Input
        onChange={onChangeHandler}
        type="text"
        value={newcomments.comment}
        placeholder="댓글은 40자 이하 작성가능합니다."
        maxLength={40}
      />
      <InPutBtn onClick={onSubmitHandler}>댓글달기</InPutBtn>
    </StWrap>
  );
}

export default CommentInput;

const StWrap = styled.div`
  display: flex;
  width: 355px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dadada;
  padding: 20px 5px 10px;
`;
const Input = styled.input`
  width: 254px;
  height: 32px;
  font-size: 15px;
  font-family: sans-serif;
  padding-left: 5px;
  margin-right: 10px;
  border-radius: 3px;
  border: 1px solid #4b4b4b;
  resize: none;
`;

const InPutBtn = styled.button`
  width: 72px;
  height: 34px;
  color: black;
  background-color: #70cca6;
  border: none;
  border-radius: 3px;
  font-family: sans-serif;
  font-weight: 600;
`;

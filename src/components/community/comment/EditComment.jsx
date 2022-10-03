import React, { useState } from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import { decodeToken } from "react-jwt";

function StCommentText(props) {
  const token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(token);

  const commentID = props.comment_id;
  const userID = props.userId;
  const remove = props.remove;
  const setRemove = props.setRemove;

  const [edit, setEdit] = useState(true);
  const [editComment, setEditComment] = useState({
    comment: props.value,
  });

  const editHandler = () => {
    setEdit(false);
  };

  const onChange = (e) => {
    setEditComment({
      ...editComment,
      comment: e.target.value,
    });
  };

  const saveHandler = () => {
    setEdit(true);
    serverAxios.put(`api/comments/${commentID}`, editComment).then((res) => {
      if (res.data.success === true) {
      }
    });
  };

  const onDeleteHandler = async () => {
    await serverAxios.delete(`api/comments/${props.comment_id}`).then((res) => {
      if (res.data.success === true) {
        setRemove(!remove);
      }
    });
  };

  return (
    <Stcontent>
      <StComment
        disabled={edit}
        value={editComment.comment}
        onChange={onChange}
        maxLength={40}
      />

      {myDecodedToken.payload.user_id === userID ? (
        <BtnArea>
          {edit === true ? (
            <EditBtn onClick={() => editHandler()}>수정하기</EditBtn>
          ) : (
            <EditBtn onClick={() => saveHandler()}>완료하기</EditBtn>
          )}
          {edit === true ? (
            <EditBtn onClick={() => onDeleteHandler()}>삭제하기</EditBtn>
          ) : (
            <EditBtn onClick={() => setEdit(true)}>취소하기</EditBtn>
          )}
        </BtnArea>
      ) : null}
    </Stcontent>
  );
}

export default StCommentText;

const Stcontent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-sizing: border-box;
  padding-top: 9px;
`;

const StComment = styled.textarea`
  border: ${(props) => (props.disabled ? "none" : "1px solid gray")};
  border-radius: 2px;
  font-size: 13px;
  background-color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  width: 180px;
  height: 40px;
  resize: none;
`;

const BtnArea = styled.div`
  display: flex;
  margin: 0;
`;
const EditBtn = styled.button`
  width: 60px;
  height: 15px;
  color: #a0a0a0;
  background-color: transparent;
  border: none;
  font-family: sans-serif;
  font-size: 11px;

  cursor: pointer;
`;

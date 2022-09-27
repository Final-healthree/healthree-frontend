import React, { useState } from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import { decodeToken } from "react-jwt";

function StCommentText(props) {
  const token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(token);

  const commentID = props.comment_id;
  const userID = props.userId;

  const [editComment, setEditComment] = useState({
    comment: props.value,
  });

  const [onEdit, setOnEdit] = useState(true);
  const editHandler = () => {
    setOnEdit(false);
  };

  const onChange = (e) => {
    setEditComment({
      ...editComment,
      comment: e.target.value,
    });
  };

  const saveHandler = () => {
    setOnEdit(true);
    serverAxios
      .put(
        process.env.REACT_APP_REST_API_KEY + `api/comments/${commentID}`,
        editComment
      )
      .then((res) => {
        if (res.data.success === true) {
          alert("수정 완료");
        }
      });
  };

  const onDeleteHandler = async () => {
    await serverAxios
      .delete(
        process.env.REACT_APP_REST_API_KEY + `api/comments/${props.comment_id}`
      )
      .then((res) => {
        if (res.data.success === true) {
          alert("삭제 완료");
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <StComment
        disabled={onEdit}
        value={editComment.comment}
        onChange={onChange}
      />
      {myDecodedToken.payload.user_id === userID ? (
        <BtnArea>
          {onEdit === true ? (
            <EditBtn onClick={editHandler}>수정</EditBtn>
          ) : (
            <EditBtn onClick={saveHandler}>완료</EditBtn>
          )}
          {onEdit === true ? (
            <EditBtn onClick={onDeleteHandler}>삭제</EditBtn>
          ) : (
            <EditBtn onClick={setOnEdit(true)}>취소</EditBtn>
          )}
        </BtnArea>
      ) : null}
    </div>
  );
}

export default StCommentText;

const StComment = styled.input`
  border: none;
  font-size: 14px;
  background-color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  width: 200px;
  white-space: nowrap;
`;
const BtnArea = styled.div`
  bottom: 0;
`;
const EditBtn = styled.button`
  color: gray;
  background-color: transparent;
  border: 0;
  outline: 0;
  font-family: sans-serif;
`;

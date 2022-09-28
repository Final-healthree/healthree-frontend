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

  const [edit, setEdit] = useState(true);
  const [input, setInput] = useState(false);

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
    serverAxios
      .put(
        process.env.REACT_APP_REST_API_KEY + `api/comments/${commentID}`,
        editComment
      )
      .then((res) => {
        if (res.data.success === true) {
          alert("수정 완료:)");
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
          alert("삭제 완료:)");
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <StComment
        disabled={edit}
        value={editComment.comment}
        onChange={onChange}
      />
      {myDecodedToken.payload.user_id === userID ? (
        <BtnArea>
          {edit === true ? (
            <EditBtn onClick={() => editHandler()}>수정</EditBtn>
          ) : (
            <EditBtn onClick={() => saveHandler()}>완료</EditBtn>
          )}
          {edit === true ? (
            <EditBtn onClick={() => onDeleteHandler()}>삭제</EditBtn>
          ) : (
            <EditBtn onClick={() => setEdit(true)}>취소</EditBtn>
          )}
        </BtnArea>
      ) : null}
    </div>
  );
}

export default StCommentText;

const StComment = styled.input`
  border: ${(props) => (props.disabled ? "none" : "1px solid gray")};
  border-radius: 2px;
  font-size: 13px;
  background-color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  width: 230px;
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

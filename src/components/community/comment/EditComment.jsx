import React, { useState } from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import { decodeToken } from "react-jwt";

import DateComment from "./DateComment";
import DeleteModal from "../posts/DeleteModal";

function StCommentText({
  content,
  commentId,
  userId,
  commentTime,
  remove,
  setRemove,
}) {
  const Token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(Token);
  const NowUser = myDecodedToken.payload.user_id;
  const Time = DateComment({ date: commentTime });
  const [modalopen, setModalOpen] = useState(false);

  const [edit, setEdit] = useState(true);
  const [editComment, setEditComment] = useState({
    comment: content,
  });

  const onChange = (e) => {
    setEditComment({
      ...editComment,
      comment: e.target.value,
    });
  };

  const onEditHandler = () => {
    setEdit(!edit);
  };

  const onSaveHandler = async () => {
    setEdit(true);
    await serverAxios
      .put(`api/comments/${commentId}`, editComment)
      .then((res) => {
        if (res.data.success === true) {
        }
      });
  };

  const onDeleteHandler = async () => {
    setModalOpen(true);
  };

  return (
    <Stcontent>
      <StComment
        disabled={edit}
        value={editComment.comment}
        onChange={onChange}
        maxLength={40}
      />
      <StBottom>
        <BtnArea>
          {NowUser === userId ? (
            edit ? (
              <>
                <EditBtn onClick={onEditHandler}>수정하기</EditBtn>
                <EditBtn onClick={onDeleteHandler}>삭제하기</EditBtn>
              </>
            ) : (
              <>
                <EditBtn onClick={onSaveHandler}>완료하기</EditBtn>
                <EditBtn onClick={onEditHandler}>취소하기</EditBtn>
              </>
            )
          ) : null}
        </BtnArea>
        {modalopen ? (
          <DeleteModal
            content={"댓글"}
            setModalOpen={setModalOpen}
            commentId={commentId}
            remove={remove}
            setRemove={setRemove}
          />
        ) : null}
        <CommentTime>{Time}</CommentTime>
      </StBottom>
    </Stcontent>
  );
}

export default StCommentText;

const Stcontent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
`;

const StComment = styled.textarea`
  width: 100%;
  resize: none;

  border: ${(props) => (props.disabled ? "none" : "1px solid gray")};
  border-radius: 2px;
  font-size: 13px;
  background-color: #fff;
  font-weight: 600;
  font-family: sans-serif;
`;

const StBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BtnArea = styled.div`
  display: flex;
  flex: 1;
`;
const EditBtn = styled.button`
  color: #a0a0a0;
  background-color: transparent;
  border: none;
  font-family: sans-serif;
  font-size: 11px;

  cursor: pointer;
`;

const CommentTime = styled.div`
  width: 60px;
  color: #70cca6;
  font-family: sans-serif;
  font-size: 10px;
`;

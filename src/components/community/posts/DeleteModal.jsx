import { React } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import Cancle from "../../../assets/community/postDelete/cancle.svg";

function DeleteHandler({
  content,
  setModalOpen,
  commentId,
  remove,
  setRemove,
}) {
  const param = useParams();
  const navigate = useNavigate();
  console.log(commentId);

  const deletePost = () => {
    serverAxios.delete(`api/posts/${param.postid}`).then((res) => {
      if (res.data.success) {
        setModalOpen(false);
        navigate("/community");
      }
    });
  };

  const deleteComment = () => {
    serverAxios.delete(`api/comments/${commentId}`).then((res) => {
      if (res.data.success === true) {
        setModalOpen(false);
        setRemove(!remove);
      }
    });
  };

  return (
    <StDeleteModalLayout>
      <StDeleteModalContainer>
        <StGuideTitle>{content}삭제하시겠습니까?</StGuideTitle>
        <ButtonBox>
          <StButton
            onClick={commentId === undefined ? deletePost : deleteComment}
          >
            삭제
          </StButton>
          <StButton
            cancle
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <img src={Cancle} />
            그대로 남겨두기
          </StButton>
        </ButtonBox>
      </StDeleteModalContainer>
    </StDeleteModalLayout>
  );
}
export default DeleteHandler;

const StDeleteModalLayout = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(75, 75, 75, 0.8);

  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

const StDeleteModalContainer = styled.div`
  width: 311px;
  height: 120px;

  background-color: #fff;
  border-radius: 2px;

  z-index: 100;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StGuideTitle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-family: sans-serif;
  font-weight: 600;
`;

const ButtonBox = styled.div`
  display: flex;
  flex: 1;
  gap: 4px;
`;
const StButton = styled.button`
  display: flex;
  width: ${(props) => (props.cancle ? "155px" : "93px")};
  height: 32px;

  align-items: center;
  justify-content: center;

  font-family: sans-serif;
  font-weight: 600;

  background-color: ${(props) => (props.cancle ? "#70CCA6" : "#DADADA")};
  border: none;
  border-radius: 2px;
`;

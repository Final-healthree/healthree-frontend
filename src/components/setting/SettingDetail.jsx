import React, { useState } from "react";
import styled from "styled-components";
import btn from "../../assets/setting/PaginationBtn.png";
import GuideModal from "./GuideModal";
import {
  userClickedAddToHome,
  deferredInstallPrompt,
} from "./deferredInstallPrompt";
import Profile from "../mypage/Profile";

const SettingDetail = () => {
  const [modalopen, setModalOpen] = useState(false);

  const Logout = () => {
    alert("로그아웃 성공");
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <StSettingLayout>
      <Profile />
      <StSettingContainer>
        {deferredInstallPrompt ? (
          <>
            <div>
              <p>앱 다운로드</p>
              <img
                onClick={() => {
                  userClickedAddToHome();
                }}
                src={btn}
                alt=""
              />
            </div>
          </>
        ) : null}
        <hr />
        <div>
          <p>사용자 가이드</p>
          <img
            onClick={() => {
              setModalOpen(true);
            }}
            src={btn}
            alt=""
          />
        </div>
        {modalopen === true ? <GuideModal setmodal={setModalOpen} /> : null}
        <hr />
        <div>
          <p>버그 신고</p>
          <img
            onClick={() => {
              window.open("https://forms.gle/khRnXR5PzqhHZEe58", "_blank");
            }}
            src={btn}
            alt=""
          />
        </div>
        <hr />
        <div>
          <p>로그아웃</p>
          <img
            onClick={() => {
              Logout();
            }}
            src={btn}
            alt=""
          />
        </div>
        <hr />
      </StSettingContainer>
    </StSettingLayout>
  );
};

const StSettingLayout = styled.div``;

const StSettingContainer = styled.div`
  margin-top: 10px;

  & > div {
    display: flex;
    justify-content: space-between;

    padding: 0 20px;

    & > img {
      cursor: pointer;
    }

    & > p {
      font-family: sans-serif;
      font-weight: 700;
    }
  }
`;

export default SettingDetail;

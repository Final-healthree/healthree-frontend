import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import serverAxios from "../axios/server.axios";

import { addDays, format } from "date-fns";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { existgoal } from "../../redux/modules/existgoal";

const GoalReg = () => {
  const regDay = useSelector((state) => state.registerday);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    day1: format(new Date(regDay.start), "yyyy-MM-dd"),
    day2: format(addDays(new Date(regDay.start), 1), "yyyy-MM-dd"),
    day3: format(new Date(regDay.last), "yyyy-MM-dd"),
    goal_name: "",
  });

  const [confirm, setConfirm] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setInfo({
      ...info,
      goal_name: value,
    });
    value.length > 0 ? setConfirm(true) : setConfirm(false);
  };

  const submit = async () => {
    if (info.goal_name.length === 0) {
      alert("목표를 입력해주세요");
    }
    await serverAxios
      .post("/api/goals/register", info)
      .then((res) => {
        alert(res.data.messgae);
        dispatch(existgoal({ exist: true }));
        navigate("/main");
      })
      .catch((error) => {
        if (error.response.data.success === false) {
          const type = error.response.data.message;
          switch (type) {
            case "이미 진행중인 작심삼일이 있습니다.":
              alert(type);
              break;
            case "날짜값이 제대로 오지 않았습니다.":
              alert(type);
              break;
            default:
          }
        }
      });
  };

  return (
    <Container>
      <HeaderArea>
        <Title>작심삼일 목표를 입력해 주세요.</Title>
      </HeaderArea>

      <GoalArea>
        <Label>나의 목표</Label>
        <GoalInput
          placeholder="목표를 입력해주세요"
          onChange={onChange}
          name="goal_name"
          value={info.goal_name}
          borderColor={confirm ? "#70cca6" : "black"}
        ></GoalInput>
        {/* 입력에 따라 버튼이랑 테두리 유무 */}

        <Label>목표 기간</Label>
        <Period>
          {regDay.start} ~ {""}
          {regDay.last}
        </Period>
      </GoalArea>

      <BtnArea>
        <RegBtn onClick={submit}>목표 등록하기</RegBtn>
      </BtnArea>
    </Container>
  );
};

export default GoalReg;

const Container = styled.div`
  overflow: auto;
  flex: 1;
`;

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 8px;
`;

const Title = styled.h3`
  margin: 0;
`;

const GoalArea = styled.div`
  padding: 0 13px;
  /* margin: 30px 0; */

  height: 390px;
`;

const Label = styled.div`
  padding: 10px 0;
  font-weight: 700;
  font-size: medium;
`;

const GoalInput = styled.input`
  box-sizing: border-box;
  width: 340px;
  height: 52px;
  border: 1px solid ${(props) => props.borderColor};
  margin-bottom: 20px;
  font-family: sans-serif;
  padding-left: 15px;
  font-weight: 500;
  font-size: 16px;
`;

const Period = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 340px;
  height: 52px;
  background: #70cca6;

  font-weight: 600;

  font-family: sans-serif;
`;

const BtnArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const RegBtn = styled.button`
  position: absolute;
  top: 85px;
  width: 340px;
  height: 52px;
  background: #70cca6;
  border-radius: 2px;
  border: none;
  font-size: medium;
  font-weight: 900;

  font-family: sans-serif;

  cursor: pointer;
`;

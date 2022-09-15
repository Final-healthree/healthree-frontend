import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import serverAxios from "../axios/server.axios";

const GoalReg = () => {
  const regDay = useSelector((state) => state.registerday);
  console.log(regDay);
  const year = regDay.start.getFullYear();
  const month = regDay.start.getMonth() + 1;
  const Month = leftPad(month);
  const Day = leftPad(regDay.start.getDate() + 1);

  console.log(typeof month);

  const [info, setInfo] = useState({
    day1: toStringByFormatting(regDay.start),
    day2: `${year}-${Month}-${Day}`,
    day3: toStringByFormatting(regDay.last),
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

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  function toStringByFormatting(source, delimiter = "-") {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }

  const submit = async () => {
    await serverAxios
      .post(process.env.REACT_APP_REST_API_KEY + "api/main/register", info)
      .then((res) => {
        alert(res.data.messgae);
        console.log(res);
      })
      .catch((error) => {
        const type = error.response.data.message;
        switch (type) {
          case "하루에 한번만 작심삼일을 등록할 수 있습니다.":
            alert("하루에 한번만 작심삼일을 등록할 수 있습니다.");
            break;
          default:
        }
      });
  };

  console.log(info);

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
          {toStringByFormatting(regDay.start, "/")} ~ {""}
          {toStringByFormatting(regDay.last, "/")}
        </Period>
      </GoalArea>

      <BtnArea>
        <RegBtn onClick={submit}>목표 등록하기</RegBtn>
      </BtnArea>
    </Container>
  );
};

export default GoalReg;

const Container = styled.div``;

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

  height: 300px;
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
  border: 2px solid ${(props) => props.borderColor};
  margin-bottom: 20px;
`;

const Period = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 340px;
  height: 52px;
  background: #70cca6;

  font-weight: 600;
`;

const BtnArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const RegBtn = styled.button`
  position: absolute;
  top: 130px;

  width: 340px;
  height: 52px;
  background: #70cca6;
  border-radius: 2px;
  border: none;
  font-size: medium;
  font-weight: 700;

  cursor: pointer;
`;

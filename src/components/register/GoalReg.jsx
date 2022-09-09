import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const GoalReg = () => {
  const regDay = useSelector((state) => state.registerday);
  console.log(regDay);
  return (
    <Container>
      <Box>
        <Label>나의 목표</Label>
        <GoalInput placeholder="목표를 입력해주세요"></GoalInput>
      </Box>
      <Box>
        <Label></Label>
        <Period>
          {regDay.start.toDateString()} - {regDay.last.toDateString()}
        </Period>
      </Box>

      <RegBtn>목표 등록하기</RegBtn>
    </Container>
  );
};

export default GoalReg;

const Container = styled.div``;

const Box = styled.div`
  padding: 2px;
`;

const Label = styled.div`
  font-weight: 600;
`;

const GoalInput = styled.input`
  width: 340px;
  height: 52px;
  border: 1px solid #70cca6;
`;

const Period = styled.div`
  width: 340px;
  height: 52px;
  background: #70cca6;
`;

const RegBtn = styled.button`
  width: 340px;
  height: 52px;
  background: #70cca6;
  border-radius: 2px;
  border: none;
`;

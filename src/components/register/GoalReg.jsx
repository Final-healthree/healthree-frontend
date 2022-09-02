import React from "react";
import styled from "styled-components";

const GoalReg = () => {
  return (
    <Container>
      <Box>
        <Label>나의 목표</Label>
        <GoalInput placeholder="목표를 입력해주세요"></GoalInput>
      </Box>
      <Box>
        <Label>목표 기간</Label>
        <Period>2022.08.31 - 2022.09.02</Period>
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
  width: 90%;
`;

const Period = styled.div``;

const RegBtn = styled.button`
  width: 90%;
  height: 20px;
`;

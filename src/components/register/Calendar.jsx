import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../redux/modules/regday";

const RegCalendar = () => {
  const dispatch = useDispatch();
  const regDay = useSelector((state) => state.registerday);
  const navigate = useNavigate();
  console.log(regDay);
  const [last, setLast] = useState(new Date());
  const lastday = new Date(last.setDate(last.getDate() + 2));
  const [day, setday] = useState([new Date(), new Date(lastday)]);
  console.log(day);
  const onChange = (value) => {
    setday([new Date(value), new Date(value.setDate(value.getDate() + 2))]);
  };

  const sendDay = (e) => {
    dispatch(register(day));
    navigate("/register");
  };

  return (
    <Container>
      <HeaderArea>
        <Title>목표를 세워보세요.</Title>
        <Today>{new Date().toDateString()}</Today>
      </HeaderArea>

      <div>
        <Calendar onChange={onChange} value={day} />
      </div>
      <RegBtn onClick={sendDay}>날짜 등록하기</RegBtn>
    </Container>
  );
};

export default RegCalendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  width: 340px;
  height: 50px;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
`;

const Today = styled.div`
  display: flex;
  width: 185px;
  height: 18px;
  color: #4b4b4b;
  margin: 0;
  box-sizing: content-box;
`;

const RegBtn = styled.button`
  width: 340px;
  height: 52px;
  background: #70cca6;
  border-radius: 2px;
  border: none;
  bottom: 2px;
  margin-top: 120px;

  font-weight: 700;
`;

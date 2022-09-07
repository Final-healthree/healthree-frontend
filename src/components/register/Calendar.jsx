import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const RegCalendar = () => {
  const [last, setLast] = useState(new Date());
  const lastday = new Date(last.setDate(last.getDate() + 2));
  const [day, setday] = useState([new Date(), new Date(lastday)]);
  console.log(day);
  const onChange = (value) => {
    setday([new Date(value), new Date(value.setDate(value.getDate() + 2))]);
  };

  return (
    <div>
      <h3 className="text-center">목표를 세워보세요.</h3>
      <div>
        <Calendar onChange={onChange} value={day} />
      </div>

      {day.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {day[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {day[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{" "}
          {day.toDateString()}
        </p>
      )}
    </div>
  );
};

export default RegCalendar;

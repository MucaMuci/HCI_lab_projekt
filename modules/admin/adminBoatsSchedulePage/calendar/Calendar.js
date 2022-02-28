import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BigCalendar = () => {
  const [date, setDate] = useState(new Date());
  function onChange(nextValue) {
    setDate(nextValue);
  }
  return (
    <div className="border border-hci-siva shadow-btn-sjena rounded-3xl sm:w-2/5 mb-5 h-fit mr-3">
      <Calendar
        className="text-center w-full"
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default BigCalendar;

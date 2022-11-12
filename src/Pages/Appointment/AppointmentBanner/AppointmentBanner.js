import img from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import { useState } from "react";

export default function AppointmentBanner() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <header className="my-6">
      <div className="hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>You have selected date: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

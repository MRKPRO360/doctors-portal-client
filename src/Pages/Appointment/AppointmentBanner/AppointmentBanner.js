import img from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

export default function AppointmentBanner({ selectedDate, setSelectedDate }) {
  return (
    <header className="my-6">
      <div className="hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={img}
            className="rounded-lg shadow-2xl lg:w-1/2"
            alt="dentist chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

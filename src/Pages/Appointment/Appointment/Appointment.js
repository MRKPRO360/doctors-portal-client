import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { useState } from "react";
export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointments selectedDate={selectedDate} />
    </div>
  );
}

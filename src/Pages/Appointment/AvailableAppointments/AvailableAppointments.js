import { format } from "date-fns";
export default function AvailableAppointments({ selectedDate }) {
  return (
    <section className="mt-16">
      <p className="font-bold text-center text-secondary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </section>
  );
}

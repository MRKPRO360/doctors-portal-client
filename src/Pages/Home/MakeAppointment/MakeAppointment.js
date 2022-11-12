import img from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
export default function MakeAppointment() {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            alt="doctor appointment"
            className="lg:w-1/2 rounded-lg hidden md:block -mt-28"
          />
          <div>
            <span className="text-lg font-semibold uppercase text-primary">
              Appointment
            </span>

            <h1 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
}

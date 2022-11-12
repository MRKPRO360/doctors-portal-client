import img from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
export default function Contact() {
  return (
    <section style={{ background: `url(${img})` }} className="mt-40 ">
      <div className="text-center max-w-sm md:max-w-lg mx-auto py-16">
        <span className="text-lg font-semibold text-primary">Contact Us</span>
        <h3 className="mt-2 text-3xl text-white tracking-widest">
          Stay Connected With Us
        </h3>
        <form className="my-10 space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full bg-slate-50"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full bg-slate-50"
          />

          <textarea
            rows={4}
            className="textarea bg-slate-50 w-full"
            placeholder="Your Message"
          ></textarea>
          <PrimaryButton type="submit" text="Submit" />
        </form>
      </div>
    </section>
  );
}

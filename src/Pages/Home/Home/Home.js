import React from "react";
import Banner from "../Banner/Banner";
import Care from "../Care/Care";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="mx-5">
      <Banner />
      <Info />
      <Services />
      <Care />
      <MakeAppointment />
      <Testimonials />
      <Contact />
    </div>
  );
}

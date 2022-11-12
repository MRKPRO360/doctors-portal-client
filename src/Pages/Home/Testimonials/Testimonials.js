import img1 from "../../../assets/images/people1.png";
import img2 from "../../../assets/images/people2.png";
import img3 from "../../../assets/images/people3.png";
import TestimonialsCard from "./TestimonialsCard";

import code from "../../../assets/icons/quote.svg";

const testimonials = [
  {
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    img: img1,
    name: "Winsom Herry",
    living: "Callifornia",
  },
  {
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    img: img2,
    name: "Arthur Collins",
    living: "San Fransisco",
  },
  {
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    img: img3,
    name: "Heilly Alexa",
    living: "Las Vegas",
  },
];
export default function Testimonials() {
  return (
    <section className="mt-40 mb-64 relative">
      <img
        className="absolute top-0 right-0 lg:w-48 w-24"
        src={code}
        alt="code"
      />
      <div>
        <span className="text-lg font-semibold text-primary">Testimonial</span>
        <h3 className="mt-2 text-3xl">What Our Patient Says</h3>

        <div className="flex flex-wrap gap-5 items-center mt-36 justify-center">
          {testimonials.map((el, i) => (
            <TestimonialsCard
              key={i}
              text={el.text}
              name={el.name}
              living={el.living}
              img={el.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const services = [
  {
    img: img1,
    heading: "Flouride Treatment",
    text: "lorem ipmsum dollar sit ammet adipsusm adiscunda bummit",
  },
  {
    img: img2,
    heading: "Cavity Filling",
    text: "lorem ipmsum dollar sit ammet adipsusm adiscunda bummit",
  },
  {
    img: img3,
    heading: "Teeth Whitening",
    text: "lorem ipmsum dollar sit ammet adipsusm adiscunda bummit",
  },
];

export default function Services() {
  return (
    <div className="mt-36">
      <div className="text-center">
        <span className="text-lg font-semibold uppercase text-primary">
          Our services
        </span>
        <h3 className="mt-2 text-3xl">Services We Provide</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            img={service.img}
            heading={service.heading}
            text={service.text}
          />
        ))}
      </div>
    </div>
  );
}

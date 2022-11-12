import icon1 from "../../../assets/icons/clock.svg";
import icon2 from "../../../assets/icons/marker.svg";
import icon3 from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const cards = [
  {
    icon: icon1,
    heading: "Opening Hours",
    text: "Lorem ipsum dolor sit amet consectetur",
    from: "primary",
    to: "secondary",
  },
  {
    icon: icon2,
    heading: "Visit our location",
    text: "Brooklyn, NY 10036, United States",
    from: "primary",
    to: "secondary",
  },
  {
    icon: icon3,
    heading: "Contact us nows",
    text: "+000 123 456789",
    from: "primary",
    to: "secondary",
  },
];
export default function Info() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-6 pt-60">
      {cards.map((card, i) => (
        <InfoCard
          key={i}
          icon={card.icon}
          heading={card.heading}
          text={card.text}
          from={card.from}
          to={card.to}
        />
      ))}
    </div>
  );
}

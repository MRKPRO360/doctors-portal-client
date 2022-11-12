export default function InfoCard({ icon, heading, text, from, to }) {
  return (
    <div
      className={`shadow-xl card card-side bg-gradient-to-r from-${from} to-${to} basis-[450px] text-white`}
    >
      <figure>
        <img src={icon} className="pl-6" alt={heading} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

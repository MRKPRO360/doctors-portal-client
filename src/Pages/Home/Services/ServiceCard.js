export default function ServiceCard({ img, heading, text }) {
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={img} alt={heading} className="rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

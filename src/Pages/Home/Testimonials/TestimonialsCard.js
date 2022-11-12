export default function TestimonialsCard({ text, name, living, img }) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl p-8">
      <p className="mb-9 font-semibold">{text}</p>

      <div className="flex gap-4">
        <img
          src={img}
          className="h-16 w-16 rounded-full ring-4 ring-offset-1 ring-secondary"
          alt={name}
        />
        <div className="">
          <h3 className="text-xl font-semibold">{name}</h3>
          <span>{living}</span>
        </div>
      </div>
    </div>
  );
}

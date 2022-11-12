export default function PrimaryButton({ text, ...rest }) {
  return (
    <button
      {...rest}
      style={{ color: "#fff" }}
      className=" btn btn-primary bg-gradient-to-r from-primary to-secondary"
    >
      {text}
    </button>
  );
}

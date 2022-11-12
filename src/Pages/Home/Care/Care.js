import img from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
export default function Care() {
  return (
    <div className="mt-40 mb-64 hero">
      <div
        style={{ gap: "102px" }}
        className="flex-col lg:flex-row hero-content"
      >
        <img
          src={img}
          alt="patient treatment"
          className="w-[458px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-600">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="my-6 mb-11">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton text="Get Started" />
        </div>
      </div>
    </div>
  );
}

import img from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
export default function Banner() {
  return (
    <div className=" hero">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src={img} alt="hero" className="rounded-lg shadow-2xl lg:w-1/2" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton text="Get Started" />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Hero from "../../assets/images/hero.jpg";
export default function HeroSection() {
  return (
    <>
      <div className="relative">
        <div className="absolute w-[40%]   left-20 top-[30%] flex flex-col gap-4 justify-start">
          <h1>Transforming Ideas into Impactful Digital Experiences</h1>
          <p
            className="text-lg  text-white font-medium
          "
          >
            We help brands connect with their audience through powerful
            websites, creative designs, and seamless user experiences.
          </p>
          <button className=" w-max py-2     px-8 rounded-full text-center">
            Get Started Today →
          </button>
        </div>
        <Image src={Hero} alt="Hero" className="  w-full   rounded-lg m-auto " />
      </div>
    </>
  );
}

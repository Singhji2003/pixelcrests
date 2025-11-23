import Image from "next/image";

import Creative from "../../assets/images/creative.png";
import Modern from "../../assets/images/modern.png";
import Result from "../../assets/images/result.png";
import Brand from "../../assets/images/brand.png";

export default function AboutSection() {
  return (
    <div className="mt-12 text-center">
      <h2 className="text-[#005097] text-4xl font-[900] italic text-center">
        {" "}
        Who Are We
      </h2>
      <p className="text-[#005097] mt-2 font-bold text-2xl">
        Building Digital Experiences That Inspire Growth
      </p>
      <p className="w-[62%] mt-2 font-light text-center m-auto ">
        At <strong className="font-bold"> PIXELCRESTS</strong>, we turn ideas
        into impactful digital experiences. As a full-service digital agency, we
        specialize in{" "}
        <strong className="font-bold">
          {" "}
          web development, branding, and advertising
        </strong>{" "}
        — helping businesses grow, connect, and succeed online.
      </p>{" "}
      <p className="w-[62%] mt-3 font-light text-center m-auto ">
        Our team blends{" "}
        <strong className="font-bold">
          {" "}
          creativity, strategy, and technology{" "}
        </strong>
        to craft websites that convert, brands that inspire, and campaigns that
        deliver measurable results. Whether you’re a startup or an established
        business, we create digital solutions tailored to your goals and vision.
      </p>
      <div className="mt-6 flex justify-between w-full  gap-4">
        <div className="flex flex-col border-2 w-[250px] items-center border-solid border-[#007EEE] rounded-lg">
          <div className="bg-[#007EEE] w-full  py-2 text-lg text-white font-semibold">
            Creative Strategy
          </div>
          <Image src={Creative} className="w-[180px] h-auto" alt="Image" />
        </div>
        <div className="flex flex-col border-2 w-[250px] items-center border-solid border-[#007EEE] rounded-lg">
          <div className="bg-[#007EEE] w-full  py-2 text-lg text-white font-semibold">
            Modern Technology
          </div>
          <Image src={Modern} className="w-[180px] h-auto" alt="Image" />
        </div>
        <div className="flex flex-col border-2 w-[250px] items-center border-solid border-[#007EEE] rounded-lg">
          <div className="bg-[#007EEE] w-full  py-2 text-lg text-white font-semibold">
            Result-Driven Approach
          </div>
          <Image src={Result} className="w-[180px] h-auto" alt="Image" />
        </div>
        <div className="flex flex-col border-2 w-[250px] items-center border-solid border-[#007EEE] rounded-lg">
          <div className="bg-[#007EEE] w-full  py-2 text-lg text-white font-semibold">
            Brand Identity Experts
          </div>
          <Image src={Brand} className="w-[180px] h-auto" alt="Image" />
        </div>
      </div>
      <p className="w-[62%] mt-6 font-light text-center m-auto ">
        We plan every project with purpose — focusing on storytelling and brand
        voice. Using{" "}
        <strong className="font-bold">
          {" "}
          React.js, Next.js, and WordPress, we build fast and secure websites{" "}
        </strong>{" "}
        . Every service is designed to drive engagement, leads, and conversions.
        We design brands that connect emotionally and stand out visually
      </p>
    </div>
  );
}

import Image from "next/image";
import Web from "../../assets/images/web.png";
import Brand from "../../assets/images/brand-icon.png";
import Ads from "../../assets/images/ads.png";
import Seo from "../../assets/images/seo.png";
import Uiux from "../../assets/images/uiux.png";

export default function BannerSection() {
  return (
    <div className="bg-[#DDEFFE] -mx-8 py-8 mt-12">
      <h2 className="text-[#000000] text-2xl font-black text-center">
        Better discussions, better decisions
      </h2>

      <p className="w-[62%] mt-2 font-light text-center m-auto">
        We work with dreamers, creators, and innovators to craft meaningful
        brand experiences. <br />{" "}
        <strong className="font-bold"> Let’s start your journey.</strong>
      </p>
      <p className="w-[62%] mt-2 font-light text-center m-auto">
        Connect with Pixelcrests →
      </p>
    </div>
  );
}

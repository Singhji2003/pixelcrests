import Image from "next/image";
import Web from "../../assets/images/web.png";
import Brand from "../../assets/images/brand-icon.png";
import Ads from "../../assets/images/ads.png";
import Seo from "../../assets/images/seo.png";
import Uiux from "../../assets/images/uiux.png";

export default function ServiceSection() {
  const services = [
    {
      icon: Web,
      title: "Web Development",
      desc: `We create high-performing, responsive websites that engage and convert.  From sleek portfolios to scalable business or e-commerce platforms,  our sites are optimized for speed, security, and SEO.  Built using React.js, Next.js, WordPress, and more — ensuring  seamless performance across all devices.`,
    },
    {
      icon: Brand,
      title: "Branding & Design",
      desc: `Your brand is more than a logo — it's your identity. We craft captivating  brand visuals and cohesive design systems that leave a lasting impression.  From logo design to full brand guidelines, we ensure your brand communicates  its core values with creativity and strategy.`,
    },
    {
      icon: Ads,
      title: "Digital Advertising",
      desc: `Reach the right audience the smart way. We plan, run, and optimize digital  campaigns across platforms like Google, Meta, and more. Our data-driven  targeting ensures maximum ROI, helping you grow confidently with impactful  campaigns that convert.`,
    },
    {
      icon: Seo,
      title: "SEO & Content Marketing",
      desc: `Get found. Stay relevant. Our SEO and content marketing approach focuses  on long-term organic growth. We conduct keyword research, optimize your  content, and craft high-value articles that improve visibility and keep your  brand top-of-mind.`,
    },
    {
      icon: Uiux,
      title: "UI/UX Design",
      desc: `Design that delivers experiences. We create intuitive, visually stunning  interfaces that enhance usability and boost engagement. Every layout,  interaction, and flow is carefully crafted to align with user goals and  your brand vision.`,
    },
  ];

  return (
    <div className="bg-[#DDEFFE] -mx-8 py-8 mt-8">
      <h2 className="text-[#005097] text-4xl font-black text-center">
        Services
      </h2>

      <p className="w-[62%] mt-2 font-light text-center m-auto">
        We provide end-to-end digital solutions designed to help your brand
        grow, engage, and convert.
        <strong className="font-bold">
          {" "}
          From web development and branding to digital advertising,
        </strong>{" "}
        our expert team turns your vision into a powerful online presence.
      </p>

      <div className="w-full mt-16 flex overflow-x-auto overflow-y-visible hide-scrollbar h-max  gap-8 space-y-12 px-8 pt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[30%] h-[310px] rounded-2xl bg-white text-center relative p-4"
          >
            <div className="bg-[#DDEFFE] p-2 shadow-md left-1/2 -translate-x-1/2 absolute -top-10 rounded-full w-max">
              <div className="bg-white p-4 shadow-md rounded-full w-max">
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-[60px]"
                />
              </div>
            </div>

            <p className="mt-16 mb-2 text-2xl font-bold">{service.title}</p>
            <p className="text-sm whitespace-pre-line">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Discovery from "../../assets/images/uiux.png";

export default function WorkSection() {
  const steps = [
    {
      icon: Discovery,
      title: "Discovery & Strategy",
      desc: "We start by understanding your business, audience, and objectives to create a clear action plan.",
    },
    {
      icon: Discovery,
      title: "Testing & Refinement",
      desc: "We test every detail to ensure quality, performance, and responsiveness across all devices.",
    },
    {
      icon: Discovery,
      title: "Design & Development",
      desc: "Our creative and technical teams collaborate to craft stunning, functional digital experiences.",
    },
    {
      icon: Discovery,
      title: "Launch & Support",
      desc: "Once live, we continue to monitor, optimize, and support your brand for lasting success.",
    },
  ];

  return (
    <div className=" -mx-8 py-16 mt-8 text-center">
      <h2 className="text-[#005097] text-4xl font-black">HOW WE WORK</h2>

      <p className="text-[#005097] my-4 font-bold text-2xl">
        A simple, transparent process that delivers exceptional results.
      </p>

      <p className="w-[62%] mt-2 font-light text-center m-auto">
        We believe that great outcomes come from great collaboration. Our
        process is designed to keep things clear, creative, and focused —
        ensuring your goals are met efficiently from idea to launch.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12 px-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#005097] p-6">
              <Image src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>

            <h3 className="font-bold text-lg text-[#000000] mt-4">
              {item.title}
            </h3>
            <p className="text-sm font-light mt-2 w-[80%] text-[#000000] m-auto">
              {item.desc}
            </p>

            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute -right-10 top-12 text-3xl">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

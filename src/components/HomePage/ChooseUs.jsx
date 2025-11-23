export default function ChooseUs() {
  const features = [
    {
      id: "01",
      title: "Innovative Solutions",
      description:
        "We use the latest tools and technologies to create solutions that are both creative and functional.",
    },
    {
      id: "02",
      title: "Technical Expertise",
      description:
        "From React.js and Next.js to WordPress and SEO, our experienced team ensures flawless performance.",
    },
    {
      id: "03",
      title: "Result-Driven Approach",
      description:
        "Every project is guided by strategy, data, and a commitment to delivering measurable outcomes.",
    },
    {
      id: "04",
      title: "Client-Centric Support",
      description:
        "We believe in long-term relationships. Our team provides continuous support and transparent communication.",
    },
  ];
  return (
    <div className="mt-12 text-center">
      <h2 className="text-[#005097] text-4xl font-black italic text-center">
        {" "}
        Why Choose Us
      </h2>
      <p className="text-[#005097] my-4 font-bold text-2xl">
        We blend creativity, technology, and strategy to deliver measurable
        success.
      </p>
      <p className="w-[62%] mt-2 font-light text-center m-auto ">
        Choosing the right digital partner is crucial for your growth. At
        <strong className="font-bold"> PIXELCRESTS</strong>, we don’t just build
        websites or design campaigns — we build digital experiences that inspire
        trust, engage users, and drive results. Our focus is on understanding
        your vision and turning it into a powerful brand story that performs.
      </p>{" "}
      <div className="grid grid-cols-1 w-[60%] md:grid-cols-2 text-left gap-16 py-10   mx-auto">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl text-[#000000] font-extrabold">
                {feature.id}
              </span>
              <span className="h-[0.85px] w-6 bg-black inline-block"></span>
            </div>
            <div>
              <h3 className="font-extrabold text-[#000000] text-lg">
                {feature.title}
              </h3>
              <p className="text-md   mt-1 max-w-xs">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

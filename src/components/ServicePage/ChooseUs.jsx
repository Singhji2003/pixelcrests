export default function ChooseUs() {
  const features = [
    {
      id: "01",
      title: "All-in-One Digital Partner ",
      description: "Web, Ads, and Branding in one place.",
    },
    {
      id: "02",
      title: "Creative + Technical Expertise",
      description: "Where ideas meet innovation.",
    },
    {
      id: "03",
      title: "Transparent Pricing & Support ",
      description: "We grow with you.",
    },
    {
      id: "04",
      title: "Result-Oriented Approach",
      description: "Focused on performance, not promises.",
    },
  ];
  return (
    <div className="mt-12 text-center">
      <h2 className="text-[#005097] text-4xl font-black italic text-center">
        {" "}
        Why Choose Pixelcrests
      </h2>

      <div className="grid grid-cols-1 w-[70%] justify-center md:grid-cols-2 text-left gap-16 py-10   mx-auto">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl text-[#005097] font-extrabold">
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

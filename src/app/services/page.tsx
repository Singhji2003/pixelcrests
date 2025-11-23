const services = [
  {
    title: "Web Development",
    desc: "Custom, responsive, and SEO-optimized websites built with Next.js and WordPress.",
  },
  {
    title: "Branding & Design",
    desc: "Creative logos, posters, and visual branding that define your identity.",
  },
  {
    title: "Digital Ads",
    desc: "Google, Facebook, and Instagram campaigns that drive real conversions.",
  },
];

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="p-6 border rounded-2xl shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-purple-600">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

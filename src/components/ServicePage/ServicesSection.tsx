import Image from "next/image";
import AdvertisingImg from "../../assets/images/ads-service.png";
import WebDesignImg from "../../assets/images/web-service.png";
import BrandImg from "../../assets/images/brand-service.png";
import SEOImg from "../../assets/images/seo-service.png";
import SocialImg from "../../assets/images/social-service.png";

export default function ServiceSection() {
  return (
    <div className="mx-auto mt-10 gap-8 px-6 md:px-8">
      {/* -------- LEFT BOX 1 -------- */}
      <div className="bg-white w-full gap-12   flex rounded-xl">
        <div className="flex w-[85%] justify-center">
          <Image
            src={WebDesignImg}
            alt="Website Design"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#000000] bg-[#DDEFFE] p-5 -mr-8">
            Website Design & Development
          </h2>

          <div className="ml-8 mt-4">
            <h3 className="text-lg font-bold text-[#000000]">
              Build the foundation of your digital success.
            </h3>

            <p className="text-base mt-2 leading-relaxed">
              Your website is more than just pixels on a screen — it’s your
              brand’s story, identity, and first impression. At Pixelxerts, we
              craft responsive, fast-loading, and visually stunning websites
              that turn visitors into loyal customers.
            </p>

            <h3 className="text-lg mt-2 font-bold text-[#000000]">
              Custom UI/UX design
            </h3>

            <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
              <li>WordPress, React, and Next.js development</li>
              <li>SEO-friendly structure & speed optimization</li>
              <li>E-commerce and business sites</li>
            </ul>

            <h3 className="text-lg mt-2 font-bold text-[#000000]">
              Beautifully designed. Technically perfect. Built to perform.
            </h3>

            <button className="mt-2 bg-[#A9D4F8] text-[#000000] px-4 py-2 rounded-md text-sm  ">
              More
            </button>
          </div>
        </div>
      </div>

      {/* -------- RIGHT BOX 2 -------- */}
      <div className="bg-white w-full gap-12   flex flex-row-reverse mt-12 rounded-xl">
        <div className="flex w-[60%] justify-center">
          <Image
            src={AdvertisingImg}
            alt="Digital Advertising"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#000000] bg-[#DDEFFE] p-5 -mr-8">
            Digital Advertising
          </h2>

          <div className="ml-8 mt-4">
            <h3 className="text-lg font-bold text-[#000000]">
              Reach. Engage. Convert.
            </h3>

            <p className="text-base mt-2 leading-relaxed">
              We help you get noticed — for the right reasons. From Meta Ads to
              Google Search campaigns, our team builds digital strategies that
              drive measurable results.
            </p>

            <h3 className="text-lg mt-2 font-bold text-[#000000]">
              Google Ads & Display Campaigns
            </h3>

            <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
              <li>Facebook / Instagram Ads</li>
              <li>LinkedIn Marketing</li>
              <li>Performance analytics & monthly reporting</li>
            </ul>

            <h3 className="text-lg mt-2 font-bold text-[#000000]">
              Your audience is online — we’ll help you meet them there.
            </h3>

            <button className="mt-2 bg-[#A9D4F8] text-[#000000] px-4 py-2 rounded-md text-sm  ">
              More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white w-full gap-12 mt-12 flex rounded-xl">
        <div className="flex w-[70%] justify-center">
          <Image
            src={BrandImg}
            alt="Branding & Visual Identity"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#000000] bg-[#DDEFFE] p-5 -mr-8">
            Branding & Visual Identity
          </h2>

          <div className="ml-8 mt-4">
            <h3 className="text-lg font-bold text-[#000000]">
              Make your brand unforgettable.
            </h3>

            <p className="text-base mt-2 leading-relaxed">
              A strong brand identity sets you apart in a crowded digital world.
              We design logos, color palettes, and brand systems that reflect
              who you are and where you're headed.
            </p>

            <h3 className="text-lg mt-2 font-bold text-[#000000]">
              Logo & stationery design
            </h3>

            <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
              <li>Brand guidelines & tone creation</li>
              <li>Social media brand kit</li>
              <li>Rebranding & visual refresh</li>
            </ul>

            <h3 className="text-lg mt-2 font-bold text-[#000000] italic">
              We design brands that speak louder than words.
            </h3>

            <button className="mt-2 bg-[#A9D4F8] text-[#000000] px-4 py-2 rounded-md text-sm  ">
              More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white w-full gap-12 flex-row-reverse mt-12 flex rounded-xl">
        <div className="flex w-[60%] justify-center">
          <Image
            src={SEOImg}
            alt="SEO & Digital Strategy"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#000000] bg-[#DDEFFE] p-5 -mr-8">
            SEO & Digital Strategy
          </h2>

          <div className="ml-8 mt-4">
            <h3 className="text-lg font-bold text-[#000000]">
              Be seen. Stay ahead.
            </h3>

            <p className="text-base mt-2 leading-relaxed">
              We make sure your brand shows up when it matters most. Our SEO
              experts and strategists use data-driven methods to improve
              visibility, boost traffic, and increase conversions.
            </p>

            <h3 className="text-lg mt-2 font-bold text-[#000000]">
              Keyword research & on-page optimization
            </h3>

            <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
              <li>Technical SEO & analytics tracking</li>
              <li>LinkedIn Marketing</li>
              <li>Content planning & backlink strategy</li>
              <li>Performance audits & reports</li>
            </ul>

            <h3 className="text-lg mt-2 font-bold text-[#000000] italic">
              From ranking to results — we handle it all.
            </h3>

            <button className="mt-2 bg-[#A9D4F8] text-[#000000] px-4 py-2 rounded-md text-sm  ">
              More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white w-full gap-12 flex  mt-12 rounded-xl">
        <div className="flex w-[60%] justify-center">
          <Image
            src={SocialImg}
            alt="Social Media Management"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#000000] bg-[#DDEFFE] p-5 -mr-8">
            Social Media Management
          </h2>

          <div className="ml-8 mt-4">
            <h3 className="text-lg font-bold text-[#000000]">
              Turn followers into fans.
            </h3>

            <p className="text-base mt-2 leading-relaxed">
              Your social presence defines your brand voice. We create
              strategies, visuals, and campaigns that keep your audience engaged
              and your message consistent.
            </p>

            <h3 className="text-lg mt-2 font-bold text-[#000000]">
              Content creation & posting schedule
            </h3>

            <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
              <li>Hashtag and trend research</li>
              <li>Engagement & community building</li>
              <li>Paid social growth campaigns</li>
            </ul>

            <h3 className="text-lg mt-2 font-bold text-[#000000] italic">
              Paid social growth campaigns
            </h3>

            <button className="mt-2 bg-[#A9D4F8] text-[#000000] px-4 py-2 rounded-md text-sm  ">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Logo from "../assets/images/logo2.png";
import FB from "../assets/images/facebook.png";
import Linkedin from "../assets/images/linkedin.png";
import Twitter from "../assets/images/twitter.png";
import Insta from "../assets/images/instagram.png";
export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Top Section */}
      <div className="bg-[#DDEFFE] py-12 px-12">
        <div className="  mx-auto flex justify-between gap-10">
          {/* Left: Logo + About */}
          <div className="w-[20%]">
            <Image src={Logo} alt="Pixelcrests Logo" className="w-44 mb-4" />
            <h3 className="font-bold text-2xl text-[#000000]">About Us</h3>
            <p className="text-sm mt-3 text-[#000000] leading-relaxed">
              We’re a creative digital agency specializing in web development,
              branding, and design solutions. Our mission is to help businesses
              grow through innovative, user-friendly, and visually engaging
              experiences.
            </p>
          </div>

          {/* HOME LINKS */}
          <div className="flex gap-8 pr-28">
            <div className="border-r border-gray-400 gap-16 pr-8 flex ">
              <div>
                <h4 className="font-bold text-lg text-[#000000] mb-3">HOME</h4>
                <ul className="space-y-2 text-[#000000] text-sm">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* SERVICES LINKS */}
              <div>
                <h4 className="font-bold text-lg text-[#000000] mb-3">
                  SERVICES
                </h4>
                <ul className="space-y-2 text-[#000000] text-sm">
                  <li>Logo & Poster Design</li>
                  <li>Brochure & Banner Design</li>
                  <li>Branding Solutions</li>
                  <li>Web Development (React.js / WordPress)</li>
                  <li>Social Media Packaging</li>
                </ul>
              </div>
            </div>
            {/* Contact + Social */}
            <div className="">
              <h4 className="font-bold text-lg text-[#000000] mb-3">
                Get in Touch
              </h4>
              <p className="text-sm text-[#000000] leading-relaxed">
                New Delhi, India <br />
                +91 7291802261 <br />
                contact@Pixelcrests.com
              </p>

              <h4 className="font-bold mt-8 text-[#000000]">Follow Us:</h4>

              <div className="flex gap-3 mt-3">
                <a>
                  <Image src={FB} width={32} height={32} alt="Facebook" />
                </a>
                <a>
                  <Image src={Insta} width={32} height={32} alt="Instagram" />
                </a>
                <a>
                  <Image src={Linkedin} width={32} height={32} alt="LinkedIn" />
                </a>
                <a>
                  <Image src={Twitter} width={32} height={32} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#002A45] text-white py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs px-6">
          <p className="text-white font-light">
            Privacy Policy | Terms & Conditions
          </p>
          <p className="text-white font-light">
            © 2025 Pixelcrests. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

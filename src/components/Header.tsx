import Image from "next/image";
import Logo from "../assets/images/logo.png";
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <Image src={Logo} alt="Logo" className="w-44" />
        <nav className="space-x-8 text-black">
          <a href="/" className="hover:text-purple-600">
            Home
          </a>
          <a href="/services" className="hover:text-purple-600">
            Services
          </a>
          <a href="/portfolio" className="hover:text-purple-600">
            Portfolio
          </a>
          <a href="/portfolio" className="hover:text-purple-600">
            Pricing
          </a>
          <a href="/contact" className="hover:text-purple-600">
            Contact
          </a>
          <button className="bg-[#4492FF] text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}

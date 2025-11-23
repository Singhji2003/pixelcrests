import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "MyAgency — Web Development, Branding & Ads",
  description: "We create websites, run ads, and design brands that stand out.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans  text-gray-800 bg-white">
        <Header />
        <main className="min-h-[70vh] bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

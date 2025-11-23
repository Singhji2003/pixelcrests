export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} MyAgency. All rights reserved.</p>
      </div>
    </footer>
  );
}

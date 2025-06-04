import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
      <div className="text-xl font-bold">Tangram.Tools</div>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        <Link href="#about" className="hover:text-blue-600">About</Link>
        <Link
          href="#toolbox"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          TOOLBOX
        </Link>
      </div>
    </nav>
  );
}

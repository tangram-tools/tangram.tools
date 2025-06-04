import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold text-white mb-2">Tangram Tools</div>
          <p className="text-gray-400">Building blocks for your workflow.</p>
        </div>
        <div className="flex justify-between md:col-span-2">
          <div>
            <h4 className="font-semibold text-white mb-2">Navigate</h4>
            <ul className="space-y-1">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#blog">Blog</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Products</h4>
            <ul className="space-y-1">
              <li><Link href="#toolbox">QuickRead</Link></li>
              <li><Link href="#toolbox">ProjectOS</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tangram.Tools
      </div>
    </footer>
  );
}

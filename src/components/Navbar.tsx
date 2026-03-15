// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Pharthiban.dev
      </Link>
      <div className="space-x-4">
        <Link href="/projects" className="hover:text-gray-300">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
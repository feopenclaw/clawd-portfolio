"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-white">Clawd</span>
          <span className="text-purple-500">.</span>
        </Link>
        <div className="flex gap-6 items-center">
          {[{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: "Contact", path: "/contact" }].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-sm text-gray-500 border-t border-white/10 mt-auto backdrop-blur-md bg-white/[0.02]">
      <p className="flex items-center justify-center gap-2">
        &copy; {new Date().getFullYear()} Clawd. Built with Next.js, Tailwind, and Framer Motion.
      </p>
    </footer>
  );
}

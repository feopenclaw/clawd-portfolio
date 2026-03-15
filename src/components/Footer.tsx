// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Pharthiban Kumarhesan. All rights reserved.</p>
    </footer>
  );
}
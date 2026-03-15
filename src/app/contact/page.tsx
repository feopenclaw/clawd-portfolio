// src/app/contact/page.tsx
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold hacker-text hacker-glow mb-8">
        _ Get In Touch _
      </h1>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full text-left font-mono">
        <p className="text-green-400 mb-4">
          <span className="text-purple-400">user@pharthiban-dev</span>:<span className="text-blue-400">~</span>$ <span className="text-white">ls contact</span>
        </p>
        <ul className="text-gray-300 ml-4">
          <li className="mb-2">
            <span className="text-yellow-400">Email:</span>{" "}
            <Link href="mailto:contact@pharthiban.dev" className="text-green-400 hover:underline">
              contact@pharthiban.dev
            </Link>
          </li>
          <li className="mb-2">
            <span className="text-yellow-400">GitHub:</span>{" "}
            <Link href="https://github.com/pharthiban" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              github.com/pharthiban
            </Link>
          </li>
          <li>
            <span className="text-yellow-400">LinkedIn:</span>{" "}
            <Link href="https://linkedin.com/in/pharthiban" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              linkedin.com/in/pharthiban
            </Link>
          </li>
        </ul>
        <p className="text-green-400 mt-4">
          <span className="text-purple-400">user@pharthiban-dev</span>:<span className="text-blue-400">~</span>$ <span className="text-white">_</span>
        </p>
      </div>
    </div>
  );
}

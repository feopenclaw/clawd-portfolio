"use client";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Terminal } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side: Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>.
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                I'm currently available for freelance work and open to new opportunities. Let's build something extraordinary together.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:contact@clawd.ai" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">contact@clawd.ai</p>
                </div>
              </a>

              <a href="https://github.com/pharthiban" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-full group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Github</p>
                  <p className="font-medium">github.com/pharthiban</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/pharthiban" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/pharthiban</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Terminal Theme Form */}
          <div className="flex-1 bg-black/40 rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/5 font-mono">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-2 flex items-center text-xs text-gray-500 font-medium tracking-widest uppercase">
                <Terminal size={14} className="mr-2 text-gray-400"/>
                terminal@clawd:~
              </div>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
               <div className="space-y-4">
                  <div className="group">
                    <label className="text-green-400 text-sm mb-2 block font-bold">~ $ enter_name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/20 focus:border-green-400 outline-none py-2 text-white placeholder-gray-600 transition-colors" />
                  </div>
                  <div className="group">
                    <label className="text-blue-400 text-sm mb-2 block font-bold">~ $ enter_email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-white/20 focus:border-blue-400 outline-none py-2 text-white placeholder-gray-600 transition-colors" />
                  </div>
                  <div className="group">
                    <label className="text-purple-400 text-sm mb-2 block font-bold">~ $ write_message</label>
                    <textarea rows={4} placeholder="Hello Clawd, let's work together..." className="w-full bg-transparent border-b border-white/20 focus:border-purple-400 outline-none py-2 text-white placeholder-gray-600 resize-none transition-colors"></textarea>
                  </div>
               </div>

               <button className="w-full py-4 mt-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-sans font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] text-white backdrop-blur-sm">
                 Execute Command <Send size={18} />
               </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

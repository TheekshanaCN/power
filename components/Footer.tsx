// components/Footer.tsx
"use client"

import { Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black/[0.96] text-white py-6"> 
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Github size={24} />
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm mb-2">
          &copy; {new Date().getFullYear()} Power School. All rights reserved.
        </p>
        <motion.a
          href="#"
          className="inline-block bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          ⚡ Built by Theekshana
        </motion.a>
        <nav className="mt-4">
          <ul className="flex space-x-6">
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

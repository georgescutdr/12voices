// components/Footer.tsx
"use client";

import React from "react";
import { FiMail, FiInstagram, FiFacebook } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 lg:px-24 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">

        {/* Logo / Name */}
        <div className="text-center lg:text-left">
          <h2 className="text-xl font-bold text-white">12Voices</h2>
          <p className="text-sm text-gray-400 mt-1">Remote energy sessions & holistic wellness</p>
        </div>

        {/* Contact / Links */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex gap-4">
            <a href="mailto:12voices.therapy@gmail.com" className="hover:text-white transition-colors flex items-center gap-1">
              <FiMail size={18} /> 12voices.therapy@gmail.com
            </a>
          </div>

          <div className="flex gap-4">
            {/* Optional social icons */}
            <a href="#" className="hover:text-white transition-colors">
              <FiInstagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FiFacebook size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center mt-4">
        © {new Date().getFullYear()} 12Voices. All rights reserved.
      </p>
    </footer>
  );
}

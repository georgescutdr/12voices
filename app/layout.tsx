// src/app/layout.tsx
'use client';

import './globals.css';  // Tailwind CSS if used
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { metadata } from './metadata'; // Import metadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Preloader logic
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="title" content={metadata.title} />
        <title>{metadata.title}</title>
      </head>
      <body className="font-sans relative flex flex-col min-h-screen bg-black text-white">
        {/* Preloader Spinner */}
        {loading && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-20 h-20 border-4 border-t-transparent border-white rounded-full"
            />
          </div>
        )}

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow p-6">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

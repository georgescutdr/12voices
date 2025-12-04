'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [sacredOpen, setSacredOpen] = useState(false);
  const [chakraOpen, setChakraOpen] = useState(false);
  const [astrologyOpen, setAstrologyOpen] = useState(false);
  const [mythOpen, setMythOpen] = useState(false);

  const chakras = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    name: `Chakra ${i + 1}`,
    href: `/learning/chakras/chakra${i + 1}`,
  }));

  return (
    <header className="bg-black text-white shadow-lg z-[9999] relative">
      {/* === TOP NAVBAR === */}
      <nav className="px-8 py-4 flex justify-between items-center md:gap-6 text-lg font-medium">
        <div className="text-xl flex items-center space-x-3 font-semibold tracking-wide"><Logo /><span>12 Voices</span></div>

        {/* === DESKTOP MENU === */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
            Home
          </Link>
          <Link href="/about-us" className="px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
            About us
          </Link>
          <Link href="/therapy" className="px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
            Therapy
          </Link>
          <Link href="/energy-and-science" className="px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
            Energy & Science
          </Link>

          {/* === LEARNING DROPDOWN === */}
          <div className="relative group">
            <button className="peer px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center gap-1">
              Learning ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black border border-gray-300 shadow-2xl p-2 rounded-md
              invisible opacity-0 transition-all duration-300 ease-in-out
              peer-hover:visible peer-hover:opacity-100 group-hover:visible group-hover:opacity-100 z-40">

              <Link href="/learning/the-trinity" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">
                The Trinity
              </Link>

              {/* === CHAKRAS SUBMENU === */}
              <div className="relative group/chakras">
                <div className="flex items-center justify-between px-4 py-3 rounded hover:bg-gray-100 cursor-pointer transition-all duration-300 peer/chakras">
                  Chakras <span className="text-sm">▸</span>
                </div>

                <div className="absolute top-0 right-full mr-2 w-56 bg-white text-black border border-gray-300 shadow-2xl p-2 rounded-md
                  invisible opacity-0 transition-opacity duration-300
                  group-hover/chakras:visible group-hover/chakras:opacity-100
                  peer-hover/chakras:visible peer-hover/chakras:opacity-100 z-50">
                  {chakras.map(chakra => (
                    <Link
                      key={chakra.id}
                      href={chakra.href}
                      className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300"
                    >
                      {chakra.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/learning/sacred-geometry/the-tantiens" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">
                The Tantiens
              </Link>

              {/* === SACRED GEOMETRY SUBMENU === */}
              <div className="relative group/sacred">
                <div className="flex items-center justify-between px-4 py-3 rounded hover:bg-gray-100 cursor-pointer transition-all duration-300 peer/sacred">
                  Sacred Geometry <span className="text-sm">▸</span>
                </div>

                <div className="absolute top-0 right-full mr-2 w-56 bg-white text-black border border-gray-300 shadow-2xl p-2 rounded-md
                  invisible opacity-0 transition-opacity duration-300
                  group-hover/sacred:visible group-hover/sacred:opacity-100
                  peer-hover/sacred:visible peer-hover/sacred:opacity-100 z-50">
                  <Link href="/learning/sacred-geometry/the-sephirot-tree" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">
                    The Sephirot Tree
                  </Link>
                  <Link href="/learning/sacred-geometry/merkaba" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">
                    Merkaba
                  </Link>
                  <Link href="/learning/sacred-geometry/the-flower-of-life" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">
                    The Flower of Life
                  </Link>
                  <Link href="/learning/sacred-geometry/metatron-cube" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">
                    Metatron’s Cube
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* === ASTROLOGY DROPDOWN === */}
          <div className="relative group">
            <button className="peer px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center gap-1">
              Astrology ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black border border-gray-300 shadow-2xl p-2 rounded-md
              invisible opacity-0 transition-all duration-300 ease-in-out
              peer-hover:visible peer-hover:opacity-100 group-hover:visible group-hover:opacity-100 z-40">
              <Link href="/astrology/planets" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">The Planets</Link>
              <Link href="/astrology/constellations" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Constellations</Link>
              <Link href="/astrology/readings" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Readings</Link>
            </div>
          </div>

          {/* === MYTH & SCIENCE DROPDOWN === */}
          <div className="relative group">
            <button className="peer px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center gap-1">
              Myth & Science ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black border border-gray-300 shadow-2xl p-2 rounded-md
              invisible opacity-0 transition-all duration-300 ease-in-out
              peer-hover:visible peer-hover:opacity-100 group-hover:visible group-hover:opacity-100 z-40">
              <Link href="/myth&science/christianity" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Christianity</Link>
              <Link href="/myth&science/hinduism" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Hinduism</Link>
              <Link href="/myth&science/shintoism" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Shintoism</Link>
              <Link href="/myth&science/egypt" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Ancient Egypt</Link>
              <Link href="/myth&science/greece" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Ancient Greece</Link>
              <Link href="/myth&science/aztec&maya" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">Aztec & Maya</Link>
            </div>
          </div>

          <Link href="/contact" className="px-4 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
            Contact
          </Link>
        </div>

        {/* === MOBILE HAMBURGER === */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden focus:outline-none">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* === MOBILE MENU === */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white border-t border-gray-700 overflow-hidden animate-fadeIn px-6 py-4 space-y-2">
          <Link href="/" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Home</Link>
          <Link href="/about-us" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">About us</Link>
          <Link href="/therapy" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Therapy</Link>
          <Link href="/energy-and-science" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Energy & Science</Link>

          {/* === LEARNING === */}
          <div>
            <button onClick={() => setLearningOpen(!learningOpen)} className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-white hover:text-black rounded transition-all">
              Learning <span>{learningOpen ? '▾' : '▸'}</span>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${learningOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-1">
                <Link href="/learning/the-trinity" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">The Trinity</Link>

                {/* === CHAKRAS === */}
                <button onClick={() => setChakraOpen(!chakraOpen)} className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-white hover:text-black rounded transition-all">
                  Chakras <span>{chakraOpen ? '▾' : '▸'}</span>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${chakraOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-1">
                    {chakras.map(chakra => (
                      <Link key={chakra.id} href={chakra.href} className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">
                        {chakra.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/learning/sacred-geometry/the-tantiens" className="block px-4 py-3 rounded hover:bg-gray-100 hover:pl-6 transition-all duration-300">
                  The Tantiens
                </Link>

                {/* === SACRED GEOMETRY === */}
                <button onClick={() => setSacredOpen(!sacredOpen)} className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-white hover:text-black rounded transition-all">
                  Sacred Geometry <span>{sacredOpen ? '▾' : '▸'}</span>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${sacredOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-1">
                    <Link href="/learning/sacred-geometry/the-sephirot-tree" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">The Sephirot Tree</Link>
                    <Link href="/learning/sacred-geometry/merkaba" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Merkaba</Link>
                    <Link href="/learning/sacred-geometry/the-flower-of-life" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">The Flower of Life</Link>
                    <Link href="/learning/sacred-geometry/metatron-cube" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Metatron’s Cube</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === ASTROLOGY === */}
          <button onClick={() => setAstrologyOpen(!astrologyOpen)} className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-white hover:text-black rounded transition-all">
            Astrology <span>{astrologyOpen ? '▾' : '▸'}</span>
          </button>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${astrologyOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-4 space-y-1">
              <Link href="/astrology/planets" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">The Planets</Link>
              <Link href="/astrology/constellations" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Constellations</Link>
              <Link href="/astrology/readings" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Readings</Link>
            </div>
          </div>

          {/* === MYTH & SCIENCE === */}
          <button onClick={() => setMythOpen(!mythOpen)} className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-white hover:text-black rounded transition-all">
            Myth & Science <span>{mythOpen ? '▾' : '▸'}</span>
          </button>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${mythOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-4 space-y-1">
              <Link href="/myth&science/christianity" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Christianity</Link>
              <Link href="/myth&science/hinduism" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Hinduism</Link>
              <Link href="/myth&science/shintoism" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Shintoism</Link>
              <Link href="/myth&science/egypt" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Ancient Egypt</Link>
              <Link href="/myth&science/greece" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Ancient Greece</Link>
              <Link href="/myth&science/aztec&maya" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">Aztec & Maya</Link>
            </div>
          </div>

          <Link href="/contact" className="block px-4 py-3 rounded hover:bg-white hover:text-black transition-all">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

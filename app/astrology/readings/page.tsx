'use client';

import React from 'react';
import Link from 'next/link';

const ReadingsPage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">

      {/* HERO SECTION */}
      <section className="w-full flex flex-col lg:flex-row items-start justify-between px-12 lg:px-32 py-24">
        
        {/* LEFT SIDE — TITLE & INTRO */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Astrology Readings
          </h1>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
            Discover the spiritual patterns that shape your life. Our astrology readings
            provide insight into your personality, destiny, and the cosmic influences guiding you.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
            Whether you seek clarity in love, career, or personal growth, astrology can
            illuminate the path and help you align with your inner universe.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 text-white bg-black hover:bg-gray-800 font-medium text-lg rounded transition-colors"
          >
            Book a Reading
          </Link>
        </div>

        {/* RIGHT SIDE — OPTIONAL IMAGE OR ICON */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
          {/* Placeholder for animation or image */}
          <div className="w-64 h-64 border-2 border-black flex items-center justify-center">
            <span className="text-black font-semibold">Your Logo / Image</span>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full border-t border-black/20"></div>

      {/* INFO SECTION */}
      <section className="w-full px-12 lg:px-32 py-24 space-y-12">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
          How Our Astrology Readings Work
        </h2>

        <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
          Our readings are personalized based on your birth chart and current planetary positions.
          Each session explores your strengths, challenges, and opportunities, giving you
          guidance for conscious decision-making.
        </p>

        <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
          With a focus on clarity and empowerment, we help you understand the cosmic patterns
          that influence your life, relationships, and spiritual growth.
        </p>

        <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
          Every reading is conducted with professionalism, confidentiality, and insight.
          Align your actions with the stars and awaken to your potential.
        </p>
      </section>

      {/* LIGHT BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-100 to-white"></div>
    </div>
  );
};

export default ReadingsPage;

'use client';

import React from 'react';
import Link from 'next/link';

const ReadingsPage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">

      {/* HERO SECTION */}
      <section className="w-full flex flex-col lg:flex-row items-start justify-between px-12 lg:px-32 py-24max-w-3xl">
        
        {/* LEFT SIDE — TITLE & INTRO */}
        <div className="left-col">
          <h1 className="h1-global">
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
        <div className="left-col">
          <span className="text-black font-semibold">Your Logo / Image</span>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="w-full bg-gray-50 border-gray-200 px-8 mx-auto px-6 lg:px-0 py-12 shadow-inner">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-center lg:text-left drop-shadow-sm">
          How Our Astrology Readings Work
        </h2>

        {/* Content Sections */}
        <div className="space-y-8 text-gray-800 text-lg lg:text-xl leading-relaxed text-justify drop-shadow-sm">

          <p>
            Our readings are fully personalized based on your birth chart and the current
            planetary positions. Each session explores your strengths, challenges, and
            opportunities, giving you clear guidance for conscious decision-making and
            aligned action.
          </p>

          <p>
            With a focus on clarity and empowerment, we help you understand the cosmic
            patterns that shape your life, relationships, purpose, and spiritual growth.
            You’ll receive insights that are both practical and deeply intuitive.
          </p>

          <p>
            Every reading is conducted with professionalism, confidentiality, and insight.
            Align your actions with the stars, step into your potential, and move forward
            with confidence.
          </p>

        </div>
      </section>


      {/* LIGHT BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-100 to-white"></div>
    </div>
  );
};

export default ReadingsPage;

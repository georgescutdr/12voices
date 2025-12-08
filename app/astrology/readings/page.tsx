'use client';

import React from 'react';
import Link from 'next/link';
import AnimationConstellations from "../../components/animations/constellations/AnimationConstellations";

const ReadingsPage: React.FC = () => {
  return (
    <div className="page">

      {/* HERO SECTION */}
      <div className="section-1 text-global">
        
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

          <div className="flex w-full justify-center mt-20 mb-20">
            <Link
              href="/contact"
              className="block mx-auto mt-6 px-6 py-3 text-white bg-black hover:bg-gray-800 font-medium text-lg rounded transition-colors text-center"
            >
              Book a Reading
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE — CONSTELLATIONS ANIMATION */}
        <div className="right-col">
          <AnimationConstellations />
        </div>
      </div> 

      {/* INFO SECTION */}
      <section className="w-full px-8 mx-auto px-6 lg:px-16 py-12 ">
        {/* Title */}
        <h1 className="h1-global">
          How Our Astrology Readings Work
        </h1>

        {/* Content Sections */}
        <div className="space-y-8 text-gray-800 text-lg lg:text-xl text-global leading-relaxed text-justify">

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
    </div>
  );
};

export default ReadingsPage;

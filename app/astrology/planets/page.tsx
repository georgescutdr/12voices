'use client';

import React from 'react';
import AnimationPlanets from '../../components/animations/planets/AnimationPlanets';

const PlanetsPage: React.FC = () => {
  return (
    <div className="bg-white text-black relative overflow-hidden min-h-screen">

      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row w-full min-h-screen">

        {/* LEFT SIDE — TITLE & INTRO */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-24 py-16 bg-white relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-md mb-8">
            The Planets & Their Spiritual Essence
          </h1>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            In ancient cosmology, the planets were not mere spheres of matter —
            they were living intelligences, divine archetypes shaping consciousness,
            time, and destiny. Each planet radiates a unique frequency that mirrors
            an aspect of the human soul. To contemplate them is to awaken to our inner cosmos.
          </p>
        </div>

        {/* RIGHT SIDE — PLANETS ANIMATION */}
        <div className="lg:w-1/2 w-full flex justify-center items-center bg-[#00001e] relative">
          <div className="w-full h-[60vh] sm:h-[70vh] lg:h-full flex justify-center items-center">
            <AnimationPlanets />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full border-t border-black/10"></div>

      {/* PLANETARY DETAILS SECTION */}
      <section className="w-full px-12 lg:px-32 py-24 relative">
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md">
            The Spiritual Archetypes of the Planets
          </h2>

          <ul className="list-disc list-inside text-gray-800 space-y-3 text-md lg:text-lg drop-shadow-sm">
            <li>
              <strong>☿ Mercury —</strong> The Messenger. Governs intellect, communication, and the bridge between spirit and mind.
            </li>
            <li>
              <strong>♀ Venus —</strong> The Harmonizer. Embodies beauty, love, sensuality, and balance.
            </li>
            <li>
              <strong>⊕ Earth —</strong> The Living Temple. Represents embodiment and the divine within the physical world.
            </li>
            <li>
              <strong>♂ Mars —</strong> The Warrior of Light. The pulse of energy, courage, and will.
            </li>
            <li>
              <strong>☉ Sun —</strong> The Solar Heart. Radiates life, vitality, and creative consciousness.
            </li>
            <li>
              <strong>☽ Moon —</strong> The Reflective Light. Governs emotion, intuition, and receptivity.
            </li>
            <li>
              <strong>♃ Jupiter —</strong> The Benevolent Sage. Planet of wisdom, expansion, and divine abundance.
            </li>
            <li>
              <strong>♄ Saturn —</strong> The Guardian of Time. Teacher of discipline, boundaries, and responsibility.
            </li>
            <li>
              <strong>♅ Uranus —</strong> The Liberator. Awakener of intuition and higher insight.
            </li>
            <li>
              <strong>♆ Neptune —</strong> The Mystic. Ruler of dreams, compassion, and unity consciousness.
            </li>
            <li>
              <strong>♇ Pluto —</strong> The Transformer. Symbol of death, rebirth, and profound inner transformation.
            </li>
          </ul>
        </div>
      </section>

      {/* SPIRITUAL SUMMARY SECTION */}
      <section className="w-full px-12 lg:px-32 py-24 relative">
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md">
            The Inner Solar System of the Soul
          </h2>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            Each planet represents a center of consciousness within us. When balanced,
            their celestial harmonies form the “music of the spheres” — the symphony of a unified soul.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            To meditate on the planets is to remember the divine architecture of being:
            thought (Mercury), love (Venus), will (Mars), wisdom (Jupiter), structure (Saturn),
            freedom (Uranus), compassion (Neptune), and transformation (Pluto), all orbiting
            the radiant light of the Sun within.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            When we realign with these celestial intelligences, our body becomes the Earth,
            our heart the Sun, our mind the Mercury, and our intuition the Moon — the cosmos
            unfolds in harmony with the rhythm of our being.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed font-semibold drop-shadow-sm">
            The sky above is not separate from us — it is our own expanded anatomy, reflected in stars.
          </p>
        </div>

        {/* LIGHT BACKGROUND LAYER */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white shadow-inner"></div>
      </section>
    </div>
  );
};

export default PlanetsPage;

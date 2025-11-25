'use client';

import React from 'react';
import AnimationTrinity from '../../components/animations/trinity/AnimationTrinity';

const TheTrinityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ======================= FIRST SECTION — Trinity Overview ======================= */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">
        
        {/* LEFT COLUMN — Text */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
            The Trinity
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            The Trinity represents the first and main building block of Creation. 
            It expresses how energy organizes itself, how structure forms, 
            and how consciousness interacts with the universe.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base lg:text-lg">
            <li>
              All of Creation begins with a sphere — the most stable and complete form, capable of distributing energy evenly in all directions.
            </li>

            <li>
              From galaxies, solar systems, and atoms, to electromagnetic fields, everything exists within a spherical structure with a central core.
            </li>

            <li>
              <strong>The Father</strong> — the entire sphere, radiating energy inward from its outer edges to the center, symbolizing order, identity, and structure.
            </li>

            <li>
              <strong>The Son</strong> — the central core that radiates energy outward, stabilizing and giving life to everything within the sphere.
            </li>

            <li>
              <strong>The Holy Ghost</strong> — the particles and energies rotating inside the sphere, forming the dynamic flow that animates the entire system.
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN — Animation */}
        <div className="w-full lg:w-1/2 bg-black relative flex justify-center items-center p-6 shadow-inner">
          <AnimationTrinity />
        </div>
      </div>

      {/* ======================= SECOND SECTION — Deep Trinity Description ======================= */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="max-w-4xl text-gray-800 text-base lg:text-lg leading-relaxed space-y-8">

            The Trinity represents the first and main building block of Creation

            In metaphysical cosmology, the Trinity is not merely a symbolic concept—it is the blueprint from which all manifested existence arises. It expresses how energy organizes itself, how structure forms, and how consciousness interacts with the universe. Everything, from the smallest subatomic particle to the largest galactic supercluster, follows this triadic pattern.

            All of Creation starts with a sphere and exists within a sphere

            The sphere is the primal container of life and consciousness. It is the only shape capable of distributing energy evenly in all directions, making it the most stable and complete form in nature.
            <ul className="list-disc pl-6">
              <li>Galaxies spiral within vast energetic spheres.</li>

              <li>Solar systems orbit around central suns inside gravitational and electromagnetic fields.</li>

              <li>Atoms contain spinning particles held within spherical probability clouds.</li>

              <li>Energy fields around living beings—auras—naturally form spherical layers.</li>
          </ul>

            The sphere is not only a physical structure but also a metaphysical symbol of wholeness, unity, balance, and containment.
        
          <div className="border-l-4 border-gray-700 pl-4 bg-white/60 p-4 shadow-sm rounded">
            <h3 className="text-xl font-semibold text-black mb-2">The Father — Totality & Inward Flow</h3>
         
              The Father aspect represents the entire sphere as one unified being. It is the container, the boundary, the full potential of a system.

              <ul className="list-disc pl-6">
                <li>It radiates energy inward, from the outer edges toward the center.</li>

                <li>This inward motion represents contraction, gathering, organization, and purpose.</li>

                <li>It defines the system’s limits, identity, and structure.</li>

                <li>It corresponds to the principle of order, direction, and divine intention.</li>
              </ul>

              In physics, this mirrors gravitational attraction, the force that keeps a system coherent and guides matter toward its core. In metaphysics, it is the guiding intelligence that shapes creation from the outside in.
                          
           
          </div>

          <div className="border-l-4 border-gray-700 pl-4 bg-white/60 p-4 shadow-sm rounded">
            <h3 className="text-xl font-semibold text-black mb-2">The Son — Center & Outward Flow</h3>
           
              <ul className="list-disc pl-6">
                <li>The Son aspect is the central core of the sphere—the point around which everything revolves. It is the heart of the system, the anchor, the generative source.</li>

                <li>It radiates energy outward, giving life, movement, and expansion to the entire sphere.</li>

                <li>It stabilizes the system, anchoring the rotation of particles around it.</li>

                <li>It acts as the energetic sun of the structure, providing coherence from the inside out.</li>

                <li>It represents emanation, expression, manifestation, and vitality.</li>
            </ul>

              In nature, this is the star in a solar system, the nucleus in an atom, or the center of gravity around which all else balances.

              The Son symbolizes the emergence of form and the expression of the universe's inner essence.
          
          </div>

          <div className="border-l-4 border-gray-700 pl-4 bg-white/60 p-4 shadow-sm rounded">
            <h3 className="text-xl font-semibold text-black mb-2">The Holy Ghost — The Rotating Particles Within</h3>
           
              The Holy Ghost represents the dynamic components inside the sphere: the particles, energies, and informational streams that circulate within the system.

              <ul className="list-disc pl-6">
                <li>These particles rotate according to precise laws, creating rhythm and motion.</li>

                <li>Their rotation generates electromagnetic fields, vibrations, and patterns.</li>

                <li>They represent the living, active aspect of creation—the flow of life itself.</li>

                <li>They allow interaction, communication, transformation, and evolution within the sphere.</li>
              </ul>

              In nature, these are electrons around a nucleus, planets around a star, or the countless bodies orbiting within galaxies. In the metaphysical sense, they are the energies of consciousness interacting with the cosmic structure.

              The Holy Ghost symbolizes the life force that animates the system, constantly moving, renewing, and evolving.
         
          </div>

        </div>
      </div>

    </div>
  );
};

export default TheTrinityPage;

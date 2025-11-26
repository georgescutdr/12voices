'use client';

import React from 'react';
import AnimationMetatronCube from '../../../components/animations/metatron-cube/AnimationMetatronCube';
import AnimationMetatronCubeDecayed from '../../../components/animations/metatron-cube/AnimationMetatronCubeDecayed';

const MetatronCubePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ======================= SECTION 1: Metatron's Cube ======================= */}
      <div className="flex flex-col md:flex-row w-full bg-gray-50 border-b border-gray-200 shadow-sm">
        {/* Left column - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 lg:p-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Metatron's Cube</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Metatron's Cube is a sacred geometric figure derived from the Flower of Life. It acts as a blueprint of creation, 
            connecting the centers of the spheres to form complex, multidimensional patterns that hold universal energy.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:text-base">
            <li>It arises from the Flower of Life by connecting the centers of 13 spheres with straight lines.</li>
            <li>Within it, the five Platonic solids naturally emerge: tetrahedron, cube, octahedron, dodecahedron, icosahedron.</li>
            <li>Spinning these solids generates the energy of the classical elements: fire, earth, air, water, and ether.</li>
            <li>It harmonizes masculine and feminine energies — lines radiate masculine energy, spheres radiate feminine energy.</li>
            <li>Metatron’s Cube can be activated in any space — personal, energetic, or environmental — to restore order and flow.</li>
          </ul>
        </div>

        {/* Right column - Animation */}
        <div className="w-full md:w-1/2 bg-black relative flex justify-center items-center p-6 h-96 md:h-auto z-0">
          <AnimationMetatronCube />
        </div>
      </div>

      {/* ======================= SECTION 2: Platonic Solids Explained ======================= */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="max-w-4xl mx-auto text-gray-800 space-y-10">

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-center">
            Within Metatron’s Cube, the five Platonic solids emerge, each representing one of the classical elements. 
            Their unique geometries generate distinct energies and functions, forming the foundation of creation and harmony in the universe.
          </p>

          <hr className="border-gray-300" />

          {/* Cube */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Cube — Earth</h3>
            <p className="text-gray-700 leading-relaxed">
              The cube represents stability, grounding, and the material plane. Its energy maintains order, supports growth, and fosters strength and endurance in all structures it inhabits.
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* Icosahedron */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Icosahedron — Water</h3>
            <p className="text-gray-700 leading-relaxed">
              The icosahedron governs fluidity, emotion, and adaptability. Its energy fosters balance, emotional healing, and the harmonious movement of energies within the body and environment.
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* Tetrahedron */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Tetrahedron — Fire</h3>
            <p className="text-gray-700 leading-relaxed">
              The tetrahedron is a triangular pyramid, representing the element of fire. Its spinning generates energy, vitality, and transformation. It symbolizes movement, courage, and creative potential.
            </p>
          </section>
          
          <hr className="border-gray-300" />

          {/* Octahedron */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Octahedron — Air</h3>
            <p className="text-gray-700 leading-relaxed">
              The octahedron embodies clarity, intellect, and communication. Its spinning creates pathways for flow and understanding, connecting higher awareness with physical perception.
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* Dodecahedron */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Dodecahedron — Ether</h3>
            <p className="text-gray-700 leading-relaxed">
              The dodecahedron represents the universe, spirit, and higher consciousness. Its complex geometry supports cosmic connection, intuition, and alignment with divine flow.
            </p>
          </section>
          
        </div>
      </div>

      {/* ======================= SECTION 3: Decayed Metatron's Cube ======================= */}
      <div className="flex flex-col md:flex-row w-full bg-gray-100 border-b border-gray-200 shadow-inner">
        {/* Left column - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 lg:p-16 space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Metatron's Cube — Decayed</h2>
          <p className="text-gray-700 leading-relaxed">
            When the Metatron's Cube is subjected to negative or chaotic energies, its perfect symmetry collapses. 
            The once-ordered geometry degrades into irregular forms, creating energy leakage, chaos, and imbalance.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:text-base">
            <li>Spheres warp and lines fade, causing disharmony within the geometric flow.</li>
            <li>The Platonic solids no longer spin coherently, disrupting the energy of the five elements.</li>
            <li>Toxic vibrations emerge, creating stagnation and energetic blockages.</li>
            <li>In extreme cases, this distortion can manifest as physical, emotional, or environmental disharmony.</li>
          </ul>
        </div>

        {/* Right column - Animation */}
        <div className="w-full md:w-1/2 bg-black relative flex justify-center items-center p-6 h-96 md:h-auto z-0">
          <AnimationMetatronCubeDecayed />
        </div>
      </div>

    </div>
  );
};

export default MetatronCubePage;

'use client';

import React from 'react';
import AnimationMerkaba from '../../../components/animations/merkaba/AnimationMerkaba';

const MerkabaPage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col w-full">

      {/* ======================= SECTION 1 — Overview + Animation ======================= */}
      <section className="flex flex-col md:flex-row w-full h-auto md:h-screen border-b border-gray-200">
        
        {/* LEFT PANEL — Text + Bullets */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 lg:p-16 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            The Merkaba
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Merkaba is a sacred spinning geometry that integrates light, energy, and consciousness into our dimension.
            It acts as a vehicle, portal, and protective field, allowing access to higher dimensions while harmonizing the human energy system.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            <li>White pyramid points upwards, generating ascending light energy.</li>
            <li>Black pyramid points downwards, generating descending dark energy.</li>
            <li>Both share a central point and spin in opposite directions: clockwise (white), counterclockwise (black).</li>
            <li>Controls the electromagnetic field: masculine pyramid spins the electric field, feminine pyramid spins the magnetic field.</li>
            <li>Activation aligns, balances, and strengthens physical, emotional, and mental bodies.</li>
          </ul>
        </div>

        {/* RIGHT PANEL — Animation */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center h-[60vh] md:h-auto p-6 lg:p-16 bg-black">
          <AnimationMerkaba />
        </div>
      </section>

      {/* ======================= SECTION 2 — In-Depth Description ======================= */}
      <section className="w-full bg-gray-50 py-20 px-8 lg:px-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-gray-800 text-base lg:text-lg leading-relaxed space-y-8">

          <h2 className="text-3xl lg:text-4xl font-semibold text-black text-center mb-6">
            In-Depth Understanding of the Merkaba
          </h2>

          <p>
            The Merkaba is an active energy field that facilitates spiritual growth, energy balancing, and dimensional exploration.
            Activating the Merkaba creates a protective and harmonizing field around the body and aura while connecting consciousness with higher dimensions.
          </p>

          <p>
            It functions both as a spiritual vehicle for multidimensional travel and as a portal to higher frequencies, divine guidance, and universal knowledge.
            The spinning pyramids generate a unified electromagnetic field that balances masculine (electric) and feminine (magnetic) energies, enhancing vitality and coherence.
          </p>

          <div className="border-l-4 border-blue-500 pl-6 bg-white/70 p-6 rounded shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-black">Key Functions of the Merkaba</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Spiritual Activation: Opens awareness to higher-dimensional insights and divine frequencies.</li>
              <li>Energy Balancing: Aligns subtle energy centers and harmonizes the aura.</li>
              <li>Protection: Creates a high-frequency shield against negative or discordant energies.</li>
              <li>Healing: Accelerates life-force energy for physical, emotional, and mental health.</li>
              <li>Exploration: Facilitates astral travel, lucid experiences, and interdimensional connection.</li>
            </ul>
          </div>

          <p>
            With consistent practice, the Merkaba becomes a tool for personal transformation, heightened consciousness, and energetic mastery.
            It empowers practitioners to safely navigate higher dimensions, balance their own energy systems, and integrate spiritual insights into their daily lives.
          </p>

        </div>
      </section>

      {/* ======================= SECTION 3 — Practical Tips ======================= */}
      <section className="w-full py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-gray-800 text-base lg:text-lg leading-relaxed space-y-8">

          <h2 className="text-3xl lg:text-4xl font-semibold text-black text-center mb-6">
            Practical Tips for Merkaba Activation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-l-4 border-green-500 p-6 rounded shadow-md space-y-3">
              <h3 className="text-xl font-semibold text-black">Preparation</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Find a quiet, comfortable space with minimal distractions.</li>
                <li>Focus on your breath and enter a meditative state.</li>
                <li>Visualize your energy body and aura expanding around you.</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-6 rounded shadow-md space-y-3">
              <h3 className="text-xl font-semibold text-black">Activation</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Visualize the white and black pyramids spinning around your body.</li>
                <li>Focus on their central point, generating a unified energy field.</li>
                <li>Intend alignment, protection, and energy flow throughout your system.</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-yellow-500 p-6 rounded shadow-md space-y-3">
              <h3 className="text-xl font-semibold text-black">Integration</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Maintain the Merkaba field during meditation or energy work.</li>
                <li>Observe sensations, energies, and subtle changes in your consciousness.</li>
                <li>After meditation, ground yourself by connecting with the earth and physical body.</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-red-500 p-6 rounded shadow-md space-y-3">
              <h3 className="text-xl font-semibold text-black">Applications</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Energy healing for self and others.</li>
                <li>Astral travel and lucid dimensional experiences.</li>
                <li>Manifestation and personal transformation.</li>
                <li>Enhancing psychic abilities and spiritual intuition.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ======================= SECTION 4 — Closing Remarks ======================= */}
      <section className="w-full bg-gray-50 py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-gray-800 text-lg leading-relaxed text-center space-y-6">
          <p>
            The Merkaba is a timeless spiritual tool that empowers practitioners to align their energy systems,
            elevate consciousness, and safely navigate higher dimensions. With dedication, practice, and awareness,
            it becomes a transformative vehicle for personal and spiritual evolution.
          </p>
          <p>
            Use it wisely, integrate it into your energy practices, and experience the profound effects it has on your physical, emotional, mental, and spiritual well-being.
          </p>
        </div>
      </section>

    </div>
  );
};

export default MerkabaPage;

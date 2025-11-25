'use client';

import React from 'react';
import AnimationTantiens from '../../../components/animations/tantiens/AnimationTantiens';

const TheTantiensPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ======================= FIRST SECTION — Overview ======================= */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">
        
        {/* LEFT COLUMN — Text content */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
            The Tantiens
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The Tantiens are created in the sacred geometry dimension by intersecting spheres along
            their vertical axes, forming the geometry of <em>Vesica Piscis</em>. They serve as energy centers
            or containers that regulate and amplify vital energy throughout the physical, emotional, and mental bodies.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base lg:text-lg">
            <li>They act as energetic batteries for the physical, emotional, and mental bodies.</li>
            <li>They maintain a direct connection to the physical, astral, and informational layers of the Universe.</li>
            <li>They hold and interact with the three primary areas of the Sephirot Tree.</li>
            <li>They enable flow and balance between the lower, middle, and higher energetic structures.</li>
          </ul>
        </div>

        {/* RIGHT COLUMN — Animation */}
        <div className="w-full lg:w-1/2 bg-black relative flex justify-center items-center p-6">
          <AnimationTantiens />
        </div>
      </div>

      {/* ======================= SECOND SECTION — Detailed Explanation ======================= */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 flex justify-center">
        <div className="max-w-4xl text-gray-800 text-base lg:text-lg leading-relaxed space-y-8">

          <p>
            The Tantiens are essential energetic centers that regulate, store, and amplify energy within the human system.
            Each Tantien serves a distinct function but works in harmony with the others to maintain balance and vitality.
          </p>

          <hr className="border-gray-300 my-6" />

          <section>
            <h3 className="text-2xl font-semibold text-black mb-4">The Three Tantiens</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Lower Tantien — Located in the lower abdomen, it governs physical energy, vitality, and grounding.</li>
              <li>Middle Tantien — Located in the solar plexus or chest, it regulates emotional energy, empathy, and connection to others.</li>
              <li>Higher Tantien — Located in the forehead, it manages mental energy, consciousness, intuition, and spiritual awareness.</li>
            </ul>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h3 className="text-2xl font-semibold text-black mb-4">Functions and Benefits</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>The Tantiens act as energetic batteries, charging and amplifying your physical, emotional, and mental fields.</li>
              <li>They can absorb energy from elemental forces, light and dark energies, and universal frequencies.</li>
              <li>Activation of the Tantiens strengthens the aura, enhances vitality, and stabilizes internal energy flow.</li>
              <li>Fully charged Tantiens enable astral projection, energy healing, remote viewing, and heightened sensitivity to subtle energies.</li>
              <li>They provide alignment and coherence between body, mind, and spirit, forming a bridge to higher consciousness.</li>
            </ul>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h3 className="text-2xl font-semibold text-black mb-4">Practical Application</h3>
            <p className="text-gray-700 mb-4">
              Activating and balancing the Tantiens can be achieved through meditation, breathwork, visualization, and sacred geometry practices.
              Techniques include:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Visualizing energy flowing into each Tantien and radiating outward.</li>
              <li>Using frequency, sound, or vibration to charge the energetic centers.</li>
              <li>Engaging in physical movement, Tai Chi, Qigong, or yoga to stimulate energy flow.</li>
              <li>Applying light, color, or sacred geometry patterns like the Merkaba or Metatron’s Cube.</li>
            </ul>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h3 className="text-2xl font-semibold text-black mb-4">Conclusion</h3>
            <p className="text-gray-700 mb-10">
              Understanding and working with the Tantiens allows you to harness, store, and direct energy consciously.
              By maintaining balance between the lower, middle, and higher Tantiens, you enhance vitality, emotional stability, mental clarity, and spiritual connection.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
};

export default TheTantiensPage;

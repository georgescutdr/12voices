'use client';

import React from 'react';
import AnimationIdaPingala from '../../components/animations/ida-and-pingala/AnimationIdaPingala';

const IdaAndPingalaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen w-full">
        {/* Left panel: Title and bullets */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-start p-8">
          <h2 className="text-3xl font-semibold text-black mb-4">Ida and Pingala</h2>
          <p className="text-gray-700 text-base mb-4">
            The Crown Chakra represents our connection to the divine and higher consciousness:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located at the top of the head</li>
            <li>Associated with spiritual connection, enlightenment, and inner peace</li>
            <li>Color: Violet or White</li>
            <li>Element: Thought / Cosmic Energy</li>
            <li>Mantra: “I am connected.”</li>
          </ul>
        </div>
        <div className="w-1/2 bg-white relative flex justify-center items-center">
          <AnimationIdaPingala />
        </div>
      </div>
      <div className="w-full h-screen bg-white flex items-center justify-center p-8">
          <p className="text-gray-800 text-base leading-relaxed max-w-3xl text-center">
            Chakras are seven energy centers located along the spine, each corresponding to different physical,
            emotional, and spiritual states. These centers govern our vitality, creativity, willpower,
            compassion, expression, intuition, and connection to the divine.
          </p>
      </div>
    </div>
  );
};

export default IdaAndPingalaPage;

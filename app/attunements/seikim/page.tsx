'use client';

import React from 'react';
import AnimationTrinity from '../../components/animations/trinity/AnimationTrinity';

const SeikimPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen w-full">
        {/* Left panel: Title and bullets */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-start p-8">
          <h2 className="text-3xl font-semibold text-black mb-4">Seikim</h2>
          <p className="text-gray-700 text-base mb-4">
            The Seikim attunement.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Connects to the rainbow light</li>
            <li>It illuminates all the aspects of the soul - the seven colors</li>
            <li>It brings tools for activating the personal energy Torus and wings of light</li>
          </ul>
        </div>
        <div className="w-1/2 bg-white relative flex justify-center items-center">
          <AnimationTrinity />
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

export default SeikimPage;

'use client';

import React from 'react';
import AnimationChakra6 from '../../../components/animations/chakras/chakras/AnimationChakra6';
import ChakraBar from '../../../components/chakra-bar/ChakraBar';

const Chakra6Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-justify drop-shadow-sm">

      {/* === CHAKRA NAVIGATION BAR === */}
      <ChakraBar />

      {/* === SECTION 1: Chakra Overview === */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">
        {/* Left panel: Title and bullets */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 text-left leading-tight">
            Chakra 6: Third Eye Chakra
          </h2>
          <p className="text-gray-700 text-base mb-4 text-justify lg:text-left">
            The Third Eye Chakra governs intuition, insight, and spiritual awareness:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located between the eyebrows, in the forehead</li>
            <li>Associated with intuition, wisdom, imagination, and foresight</li>
            <li>Color: Indigo</li>
            <li>Element: Light</li>
            <li>Activation: Send light from the Third Eye Chakra into the Ida & Pingala channels</li>
          </ul>
        </div>

        {/* Right panel: Chakra6 animation */}
        <div className="w-full lg:w-1/2 bg-black relative flex justify-center items-center p-6 min-h-[50vh] sm:min-h-[60vh] lg:min-h-full">
          <div className="w-full max-w-md h-auto flex justify-center items-center">
            <AnimationChakra6 />
          </div>
        </div>
      </div>

      {/* === SECTION 2: Chakra States === */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">

          {/* Normal State */}
          <p className="font-bold mt-6 mb-3 text-lg">Normal State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Its field connects to the informational layer of the Universe.</li>
            <li>It creates the human mental field, enabling visualization, memory, and thought processing.</li>
            <li>Meditation and mindfulness amplify the mental field, fully opening the Third Eye Chakra.</li>
            <li>It allows reading universal information and perceiving subtle energies.</li>
            <li>The two petals of the 6th chakra connect to the masculine and feminine channels — Ida and Pingala.</li>
            <li>It grants the mind power over matter by interacting with informational structures.</li>
            <li>Enhances insight, intuition, and inner guidance for decision-making.</li>
            <li>Supports clarity of thought, foresight, and the ability to see beyond illusions.</li>
            <li>Balances imagination with logic, enhancing creativity and strategic thinking.</li>
          </ul>

          {/* Divider */}
          <hr className="border-t border-gray-300 h-px w-full my-6" />

          {/* Blocked State */}
          <p className="font-bold mt-6 mb-3 text-lg text-red-800">Blocked State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The mental field shrinks, making complex thought and visualization difficult.</li>
            <li>The connection with the universal informational layer weakens.</li>
            <li>Ability to read subtle energies or see future possibilities diminishes.</li>
            <li>The power of the mind over matter is reduced.</li>
            <li>Mental fog, confusion, or indecision becomes more frequent.</li>
            <li>Issues with focus, memory, and imagination may appear.</li>
            <li>Physical manifestations may include headaches, eye strain, or sinus issues.</li>
            <li>Emotional imbalance may arise as insight and intuition are blocked.</li>
            <li>Practices like meditation, visualization, and energy clearing can restore balance.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Chakra6Page;

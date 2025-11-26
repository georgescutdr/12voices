'use client';

import React from 'react';
import { AnimationChakra7 } from '../../../components/animations/chakras/chakras/AnimationChakra7';
import ChakraBar from '../../../components/chakra-bar/ChakraBar';

const Chakra7Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* === CHAKRA NAVIGATION BAR === */}
      <ChakraBar />

      {/* === SECTION 1: Chakra Overview === */}
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full">
        {/* Left panel: Title and bullets */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:pr-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 text-center lg:text-left">
            Chakra 7: Crown Chakra
          </h2>
          <p className="text-gray-700 text-base mb-4 text-center lg:text-left">
            The Crown Chakra represents our connection to the divine and higher consciousness:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located at the top of the head</li>
            <li>Associated with spiritual connection, enlightenment, and inner peace</li>
            <li>Color: Violet or White</li>
            <li>Element: Thought / Cosmic Energy</li>
            <li>Activation: Send light from the Crown Chakra into the energy Torus around the body</li>
          </ul>
        </div>

        {/* Right panel: Chakra7 animation */}
        <div className="w-full lg:w-1/2 bg-black relative flex justify-center items-center p-0 min-h-[50vh] sm:min-h-[60vh] lg:min-h-full">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-[80vh] sm:h-[90vh] flex justify-center items-center">
              <AnimationChakra7 />
            </div>
          </div>
        </div>
      </div>

      {/* === SECTION 2: Chakra States === */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">

          {/* Normal State */}
          <p className="font-bold mt-6 mb-3 text-lg">Normal State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Its countless petals connect to the meridians of the energy Torus around the body.</li>
            <li>It creates the spiritual body that links us to the spiritual realm of the universe.</li>
            <li>The spiritual body holds all energetic structures of a person and acts as the outermost protective field.</li>
            <li>One can connect and communicate with higher consciousness, spiritual guides, or universal energy through this field.</li>
            <li>The spiritual body forms the outer sphere containing all sacred geometries and energetic patterns around the human body.</li>
            <li>Enhances inner peace, wisdom, and detachment from ego-driven desires.</li>
            <li>Supports full alignment between the physical, emotional, mental, and spiritual bodies.</li>
            <li>Promotes enlightenment, higher insight, and spiritual intuition.</li>
            <li>Allows for deep meditation, expanded awareness, and unity with universal consciousness.</li>
          </ul>

          {/* Divider */}
          <hr className="border-t border-gray-300 h-px w-full my-6" />

          {/* Blocked State */}
          <p className="font-bold mt-6 mb-3 text-lg text-red-800">Blocked State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The 7th chakra pumps dense or stagnant energy into the energetic Torus, weakening spiritual flow.</li>
            <li>The connection with the spiritual layer of the Universe fades or becomes distorted.</li>
            <li>The geometries around the body become unstable without the outer spiritual sphere.</li>
            <li>A weakened Crown Chakra allows ego dominance as universal connection diminishes.</li>
            <li>Spiritual insight, clarity, and intuition are reduced, causing confusion or inner restlessness.</li>
            <li>Disconnection from higher consciousness may lead to existential anxiety or lack of purpose.</li>
            <li>Physical symptoms may include tension headaches, insomnia, or neurological imbalance.</li>
            <li>Emotional imbalance may manifest as detachment, isolation, or difficulty experiencing compassion and gratitude.</li>
            <li>Practices like meditation, energy clearing, and connection with higher consciousness help restore balance.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Chakra7Page;

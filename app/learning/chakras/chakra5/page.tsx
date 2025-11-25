'use client';

import React from 'react';
import AnimationChakra5 from '../../../components/animations/chakras/chakras/AnimationChakra5';
import ChakraBar from '../../../components/chakra-bar/ChakraBar';

const Chakra5Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* === CHAKRA NAVIGATION BAR === */}
      <ChakraBar />

      {/* === SECTION 1: Chakra Overview === */}
      <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white p-6 lg:p-12 gap-8 lg:gap-0">
        {/* Left/Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:pr-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 text-center lg:text-left">
            Chakra 5: The Communication Chakra
          </h2>
          <p className="text-gray-700 text-base mb-4 text-center lg:text-left">
            The Throat Chakra governs our ability to communicate truth, express ourselves, and connect with higher consciousness:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located in the throat area</li>
            <li>Associated with communication, self-expression, and clarity</li>
            <li>Color: Blue</li>
            <li>Element: Ether</li>
            <li>Activation: Speaking truth, singing, vibration, resonance, and mindful expression</li>
          </ul>
        </div>

        {/* Right/Animation Section */}
        <div className="w-full lg:w-1/2 bg-black relative flex justify-center items-center p-6 min-h-[50vh] sm:min-h-[60vh] lg:min-h-full">
          <div className="w-full max-w-md h-auto flex justify-center items-center">
            <AnimationChakra5 />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 h-px w-full" />

      {/* === SECTION 2: Chakra States === */}
      <div className="w-full bg-gray-100 flex flex-col justify-center p-6 lg:p-12">
        <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">

          {/* Normal State */}
          <p className="font-bold mt-6 mb-3 text-lg">Normal State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Its field connects to the spacetime fabric of the Universe.</li>
            <li>Links with the intergalactic field where matter condenses into time and space.</li>
            <li>Supports verbal function and expression, turning thought into sound.</li>
            <li>Allows scanning and perceiving the surroundings in time and space.</li>
            <li>The power of words and sound draws from the 5th chakra’s resonance with higher fields.</li>
            <li>Encourages clear, truthful communication and effective listening.</li>
            <li>Facilitates self-expression in creative, verbal, and artistic ways.</li>
            <li>Strengthens the connection between mind, heart, and higher consciousness.</li>
          </ul>

          {/* Divider */}
          <hr className="border-t border-gray-300 h-px w-full my-6" />

          {/* Blocked State */}
          <p className="font-bold mt-6 mb-3 text-lg text-red-800">Blocked State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The chakra becomes disconnected from higher energetic fields.</li>
            <li>Difficulty perceiving spatial and temporal organization, causing confusion.</li>
            <li>Physical weakness in the throat, neck, and vocal cords.</li>
            <li>Reduced verbal expression, creativity, and difficulty communicating thoughts and feelings.</li>
            <li>Feelings of frustration, insecurity, or fear when trying to speak up.</li>
            <li>Energetic blockages may result in misunderstandings, dishonesty, or suppressing one’s voice.</li>
            <li>Difficulty receiving or interpreting information accurately from others.</li>
            <li>Emotional tension can accumulate in the throat and neck area, affecting overall well-being.</li>
            <li>Practices such as chanting, vocal exercises, mindful speech, and meditation help restore balance.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Chakra5Page;

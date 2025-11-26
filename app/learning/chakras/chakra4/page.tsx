'use client';

import React from 'react';
import AnimationChakra4 from '../../../components/animations/chakras/chakras/AnimationChakra4';
import ChakraBar from '../../../components/chakra-bar/ChakraBar';

const Chakra4Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-justify drop-shadow-sm">
      {/* === CHAKRA NAVIGATION BAR === */}
        <ChakraBar />
        
      {/* === SECTION 1: Chakra Overview === */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 text-left leading-tight">
            Chakra 4: Heart Chakra
          </h2>
          <p className="text-gray-700 text-base mb-4">
            The Heart Chakra governs love, compassion, and emotional healing:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located at the center of the chest</li>
            <li>Associated with love, compassion, and forgiveness</li>
            <li>Color: Green (sometimes pink)</li>
            <li>Element: Air</li>
            <li>
              Activation: Send light from the Heart Chakra to the spheres of the Metatron’s Cube
              around the body
            </li>
          </ul>
        </div>

        {/* Animation Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 bg-black min-h-[50vh] sm:min-h-[60vh] md:min-h-full">
          <div className="w-full max-w-md h-auto flex justify-center items-center">
            <AnimationChakra4 />
          </div>
        </div>
      </div>

      {/* === SECTION 2: Chakra States === */}
       <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">
          <p className="font-bold mt-6 mb-3 text-lg">Normal State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Its spin produces the main Lotus of the Heart, which connects to the sacred geometry
              enveloping the body
            </li>
            <li>It is the central sphere of the Metatron’s Cube</li>
            <li>It circulates the air energy through the aura</li>
            <li>It produces and modulates the emotional body</li>
            <li>The emotional body can be used for astral projection</li>
          </ul>

          {/* Divider between Normal and Blocked */}
          <hr className="border-t border-gray-300 h-px w-full my-6" />

          <p className="font-bold mt-8 mb-3 text-lg text-red-800">Blocked State</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              The Metatron’s Cube becomes unbalanced, as the Heart Chakra is its central sphere
            </li>
            <li>The 4th chakra lacks love energy needed for proper spinning</li>
            <li>The field that holds the geometries of the auras becomes weakened</li>
            <li>The person becomes spatially disconnected from the environment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chakra4Page;

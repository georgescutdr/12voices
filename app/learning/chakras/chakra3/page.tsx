'use client';

import React from 'react';
import AnimationChakra3 from '../../../components/animations/chakras/chakras/AnimationChakra3';
import ChakraBar from '../../../components/chakra-bar/ChakraBar';

const Chakra3Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-justify drop-shadow-sm">

      {/* === CHAKRA NAVIGATION BAR === */}
      <ChakraBar />

      {/* === SECTION 1: Chakra Overview === */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 text-left leading-tight">
            Chakra 3: Solar Plexus Chakra
          </h2>
          <p className="text-gray-700 text-base mb-4 text-justify md:text-left">
            The Solar Plexus Chakra represents our personal power, confidence, and inner fire:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located in the upper abdomen, around the stomach area</li>
            <li>Associated with self-esteem, willpower, and transformation</li>
            <li>Color: Yellow</li>
            <li>Element: Fire</li>
            <li>Activation: send light from the solar plexus chakra to the spheres of the Sephirot Tree</li>
          </ul>
        </div>

        {/* Animation Section */}
        <div className="w-full md:w-1/2 bg-black flex justify-center items-center p-4">
          <div className="w-full h-80 md:h-[80vh]">
            <AnimationChakra3 />
          </div>
        </div>
      </div>

      {/* === SECTION 2: Chakra States === */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">
          
          {/* Normal State */}
          <p className="font-bold mt-6 mb-3 text-lg">Normal state</p>
          <ul className="list-disc list-inside space-y-2">
            <li>It provides the fire energy and motion that keeps the flows and engines of the body running.</li>
            <li>Connects the spheres of the Sephirot Tree, keeping them active and vibrating in unison.</li>
            <li>Represents willpower, being the engine that ignites and harmonizes chakras, sephirots, directions, and meridians.</li>
            <li>Supports self-confidence, clarity of purpose, and personal boundaries.</li>
            <li>Enables decisiveness, courage, and the ability to take action in daily life.</li>
            <li>Promotes digestion of both food and life experiences, assimilating lessons and energy efficiently.</li>
            <li>Encourages motivation, self-discipline, and transformation of challenges into growth opportunities.</li>
            <li>When balanced, energy flows freely, providing inner strength, vitality, and resilience.</li>
          </ul>

          {/* Divider between Normal and Blocked */}
          <hr className="border-t border-gray-300 h-px w-full my-6" />

          {/* Blocked State */}
          <p className="font-bold mt-6 mb-3 text-lg text-red-800">Blocked state</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The Sephirot Tree becomes unbalanced as dark energy spreads through the Third Chakra.</li>
            <li>Willpower and personal confidence diminish, leading to indecision and self-doubt.</li>
            <li>The body accumulates acidic or stagnant energy, disrupting digestion and metabolism.</li>
            <li>Energy flows through the system become sluggish, and the connection between chakras weakens.</li>
            <li>Emotional imbalance may appear as irritability, frustration, or anger.</li>
            <li>Lack of motivation and inertia in daily tasks or personal growth.</li>
            <li>Physical symptoms may include digestive issues, stomach discomfort, or fatigue.</li>
            <li>Practices like core-focused meditation, breathwork, movement, and visualization of fire energy can help restore balance.</li>
            <li>Maintaining awareness of personal boundaries and asserting oneself strengthens the Solar Plexus energy.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Chakra3Page;

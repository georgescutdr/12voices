'use client';

import React from 'react';
import AnimationChakra1 from '../../../components/animations/chakras/chakras/AnimationChakra1';
import ChakraBar from '../../../components/chakra-bar/ChakraBar';

const Chakra1Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-justify drop-shadow-sm">
      {/* === CHAKRA NAVIGATION BAR === */}
      <ChakraBar />

      {/* === SECTION 1: Chakra Overview === */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black text-left mb-6 leading-tight">
            Chakra 1: Root Chakra
          </h2>
          <p className="text-gray-700 text-base mb-4">
            The Root Chakra represents our foundation and feeling of being grounded:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located at the base of the spine</li>
            <li>Associated with survival, stability, and security</li>
            <li>Color: Red</li>
            <li>Element: Earth</li>
            <li>
              Activation: send light from the Root Chakra towards all directions
              (front, back, left, right)
            </li>
          </ul>
        </div>

        {/* Animation Section */}
        <div className="w-full md:w-1/2 bg-black relative flex justify-center items-center p-4">
          <AnimationChakra1 />
        </div>
      </div>

      {/* === SECTION 2: Chakra States === */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">

          {/* Normal State */}
          <p className="font-bold mt-6 mb-3 text-lg">Normal state</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Provides the densest physical energy of the body, grounding energy from the earth and stabilizing the aura.
            </li>
            <li>
              Holds the basic wireframe of the auras, feeding the bones and blood with material life force.
            </li>
            <li>
              Consolidates the energy flow towards the ancestors, starting with the parents.
            </li>
            <li>
              Supports feelings of safety, confidence, and connection to the physical world.
            </li>
            <li>
              When balanced, the body feels strong, healthy, and resilient to stress or instability.
            </li>
            <li>
              Encourages motivation, self-discipline, and practical action in daily life.
            </li>
            <li>
              Promotes a sense of stability, rootedness, and belonging in your environment.
            </li>
            <li>
              Facilitates physical endurance and proper functioning of the lower body, legs, and feet.
            </li>
          </ul>

          {/* Divider between Normal and Blocked */}
          <hr className="border-t border-gray-300 h-px w-full my-6" />

          {/* Blocked State */}
          <p className="font-bold mt-6 mb-3 text-lg text-red-800">Blocked state</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The energy flow between the earth and the body is restricted.</li>
            <li>The body feels fatigued and lacks vitality.</li>
            <li>The sexual organs may become imbalanced or dysfunctional.</li>
            <li>
              Connection to family, ancestors, and one’s roots can feel weak or disrupted.
            </li>
            <li>Feelings of insecurity, fear, or anxiety are more frequent in daily life.</li>
            <li>
              Physical symptoms may include lower back pain, leg weakness, or digestive issues.
            </li>
            <li>
              Difficulty concentrating or staying grounded in stressful situations.
            </li>
            <li>
              Practicing grounding meditation, walking barefoot, or connecting with nature can help restore balance.
            </li>
            <li>
              Blockages may lead to indecision, procrastination, or feeling stuck in practical matters.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chakra1Page;

'use client';

import React from "react";
import AnimationChakra2 from "../../../components/animations/chakras/chakras/AnimationChakra2";
import ChakraBar from '../../../components/chakra-bar/ChakraBar';

const Chakra2Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* === CHAKRA NAVIGATION BAR === */}
      <ChakraBar />

      {/* Divider */}
      <hr className="border-t border-gray-300 h-px w-full" />

      {/* === SECTION 1: Chakra Overview === */}
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full bg-white p-6 md:p-12 gap-8 md:gap-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4 text-center md:text-left">
            Chakra 2: Sacral Chakra
          </h2>
          <p className="text-gray-700 text-base mb-4 text-center md:text-left">
            The Sacral Chakra governs creativity, emotions, and our ability to connect with others:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Located just below the navel</li>
            <li>Associated with creativity, pleasure, and emotional balance</li>
            <li>Color: Orange</li>
            <li>Element: Water</li>
            <li>
              Activation: send light from the Sacral Chakra towards all the other 6 chakras
            </li>
          </ul>
        </div>

        {/* Animation Section */}
        <div className="w-full md:w-1/2 bg-black relative flex justify-center items-center p-4">
          <AnimationChakra2 />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 h-px w-full " />

      {/* === SECTION 2: Chakra States === */}
      <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center p-6 md:p-12">
        <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">
          
          {/* Normal State */}
          <p className="font-bold mt-6 mb-3 text-lg">Normal state</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Provides the energetic field that holds the patterns sustaining the physical body and its organs.</li>
            <li>Directs energy efficiently toward the other 6 chakras through the meridians.</li>
            <li>Strengthens relationships at an energetic level, sending harmonious threads toward others.</li>
            <li>Supports emotional balance, creativity, pleasure, and healthy sexual energy.</li>
            <li>Encourages emotional expression, fluidity in relationships, and joyful engagement in life.</li>
            <li>Helps the body maintain flexibility and adaptability, allowing better stress management.</li>
            <li>Enhances intuition and connection with one’s own emotions and desires.</li>
            <li>When balanced, promotes confidence, flow, and the ability to enjoy life fully.</li>
          </ul>

          {/* Divider between Normal and Blocked */}
          <hr className="border-t border-gray-300 h-px w-full my-6" />

          {/* Blocked State */}
          <p className="font-bold mt-6 mb-3 text-lg text-red-800">Blocked state</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Energy flow around the body is disrupted, weakening organ functions.</li>
            <li>The other chakras may become under-energized.</li>
            <li>Emotional instability, mood swings, or difficulty connecting with others become common.</li>
            <li>Creativity and the ability to enjoy pleasure are diminished.</li>
            <li>Fear, guilt, or shame may frequently appear in daily life.</li>
            <li>Physical symptoms may include lower abdominal discomfort, reproductive system issues, or urinary problems.</li>
            <li>Interpersonal connections weaken, making relationships challenging.</li>
            <li>Lack of energy may cause lethargy, low motivation, or disconnection from one’s desires.</li>
            <li>Practices such as creative expression, water-based rituals, dance, or meditation can help restore balance.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Chakra2Page;

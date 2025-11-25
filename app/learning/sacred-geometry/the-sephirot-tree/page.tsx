'use client';

import React from 'react';
import AnimationSephirotTree from '../../../components/animations/sephirot-tree/AnimationSephirotTree';
import SephirotTreeSelect from '../../../components/sephirot-tree-select/SephirotTreeSelect';

const TheSephirotTreePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Section 1: Text + Animation */}
      <div className="flex flex-col md:flex-row h-auto w-full bg-white p-6 md:p-12 gap-8 md:gap-0">
        {/* Left panel: Title and bullets */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4 text-center md:text-left">
            The Sephirot Tree
          </h2>
          <p className="text-gray-700 text-base mb-4 text-center md:text-left">
            The Sephirot Tree is an energetic blueprint that connects the layers of the universe and mirrors the human energy system. 
            It guides the flow of energy through specific points, harmonizing physical, emotional, and spiritual levels.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
            <li>Its nodes, or Sephirots, are connected by different types of energies: magnetic, fluidic, geometric, informational, and spiritual.</li>
            <li>The tree spans from heavy magnetic energies (representing the lower planes) to light, subtle energies of the higher planes.</li>
            <li>Within the human body, the Sephirot Tree aligns with the central channel, connecting feet, the three Tantiens, and upper chakras.</li>
            <li>Clear light spheres rotate around the Y-axis, forming a protective and activating energy cocoon around the body.</li>
            <li>Negative thoughts, emotions, or external imbalances can darken or distort the spheres, disrupting energy flow.</li>
            <li>Activation of the Sephirots corresponds to specific chakras: feet, 1st, 2nd, 3rd, 4th, 6th, 7th, hips, shoulders, and eyes.</li>
            <li>Regular alignment and mindful energy work allow the tree to maintain harmony between the personal, environmental, and cosmic layers.</li>
          </ul>
        </div>

        {/* Right panel: Animation */}
        <div className="w-full bg-black md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto">
            <AnimationSephirotTree />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 my-8"></div>

      {/* Section 2: Description */}
      <div className="w-full h-auto bg-gray-50 flex items-center justify-center p-6 md:p-12">
        <div className="max-w-3xl text-gray-800 text-sm md:text-base leading-relaxed text-center space-y-6">
          <p>
            Keeping the Sephirots clean and spinning means refraining from filling them with dark energy or trying to impose our will on the surroundings. 
            Each action, thought, or emotion contributes to the tree’s activation or stagnation. By cultivating humility, compassion, and presence, 
            we can ensure that each sphere functions in harmony with its natural purpose.
          </p>
          <p>
            Each Sephira governs a specific aspect of life: Keter represents divine connection and will, Chokhmah embodies wisdom and insight, 
            Binah reflects understanding and structure, Chesed radiates love and expansion, while Gevurah supports boundaries and discipline. 
            Tiferet balances these energies through harmony and beauty, and Yesod channels them into the physical plane through grounding and stability. 
            Malkuth anchors the entire system in matter, completing the energetic circuit.
          </p>
          <p>
            The intermediate Sephirots, such as Daat, Netzach, and Hod, mediate between the upper and lower spheres, connecting intellect, emotion, 
            and action. When the tree is fully active, energy flows freely between all points, supporting vitality, emotional clarity, spiritual insight, 
            and alignment with the greater universe.
          </p>
          <p>
            Neglect, ego-driven behaviors, or emotional blockages can cause distortions, darkening the spheres and reducing the flow. 
            Practicing energy alignment, meditation, and conscious intention helps maintain the rotational clarity of the spheres and the health of the energy system.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 my-8"></div>

      {/* Section 3: Interactive Selector */}
      <div className="w-full h-auto bg-white flex items-center justify-center p-6 md:p-12">
        <SephirotTreeSelect />
      </div>

    </div>
  );
};

export default TheSephirotTreePage;

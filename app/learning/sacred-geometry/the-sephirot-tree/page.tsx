'use client';

import React from 'react';
import AnimationSephirotTree from '../../../components/animations/sephirot-tree/AnimationSephirotTree';
import SephirotTreeSelect from '../../../components/sephirot-tree-select/SephirotTreeSelect';

const TheSephirotTreePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-justify drop-shadow-sm">

      {/* Section 1: Text + Animation */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">
        {/* Left panel: Title and bullets */}
        <div className="left-col">
          <h1 className="h1-global">
            The Sephirot Tree
          </h1>
          <p className="text-gray-700 text-base mb-4 text-justify md:text-left">
            The Sephirot Tree is an energetic blueprint that connects the layers of the universe and mirrors the human energy system. 
            It guides the flow of energy through specific points, harmonizing physical, emotional, and spiritual levels.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-justify space-y-2 text-sm md:text-base">
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
        <div className="right-col">
          <AnimationSephirotTree />
        </div>
      </div>

      {/* Section 2: Description */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="max-w-3xl text-gray-800 text-sm md:text-base leading-relaxed text-justify space-y-6">
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
      <div className="w-full border-t border-gray-300"></div>

      {/* Section 3: Interactive Selector */}
      <div className="w-full h-auto bg-white flex items-center justify-center p-6 md:p-12">
        <SephirotTreeSelect />
      </div>

    </div>
  );
};

export default TheSephirotTreePage;

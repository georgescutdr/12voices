'use client';

import React from 'react';
import AnimationFlowerOfLife from '../../../components/animations/flower-of-life/AnimationFlowerOfLife';
import AnimationHydra1 from '../../../components/animations/hydra/AnimationHydra1';
import AnimationHydra2 from '../../../components/animations/hydra/AnimationHydra2';
import AnimationHydra3 from '../../../components/animations/hydra/AnimationHydra3';

const TheFlowerOfLifePage: React.FC = () => {
  return (
    <div className="page">
      {/* SECTION 1: Flower of Life */}
      <div className="section-1">
        <div className="left-col">
          <h1 className="h1-global">
            The Flower of Life
          </h1>

          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            The Flower of Life is one of the foundational structures in sacred geometry, representing the blueprint of the Universe and the interconnectedness of all life. 
            It is a visual symbol of creation, showing how energy organizes itself into patterns, cycles, and multidimensional forms.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>It forms complex rotating lotuses, spirals, and spherical patterns, spinning in all directions.</li>
            <li>Acts as a universal grid, holding together the structure of the physical, emotional, and energetic Universe.</li>
            <li>Composed of 14 intersecting circles, creating multidimensional flower patterns that symbolize unity, wholeness, and balance.</li>
            <li>Can be activated around the body, homes, or organs to enhance energy flow, promote healing, and restore alignment of the chakras and aura layers.</li>
            <li>Represents the underlying patterns of time, space, and consciousness, linking the microcosm to the macrocosm.</li>
            <li>Used by spiritual practitioners and energy healers to access higher states of awareness and deepen meditation practices.</li>
            <li>Serves as a geometric blueprint for creating harmony in personal energy fields and the environment.</li>
          </ul>

          <p className="text-gray-700 text-base leading-relaxed">
            Understanding and meditating on the Flower of Life allows one to perceive the interconnected nature of existence, tapping into the universal rhythm and flow of life.
            It encourages alignment with natural patterns, balance, and the sacred geometry that forms the foundation of creation itself.
          </p>
        </div>
        <div className="right-col">
          <AnimationFlowerOfLife />
        </div>
      </div>

      

      {/* SECTION 3: Hydra 1 */}
      <div className="flex flex-col-reverse md:flex-row h-auto md:h-screen w-full">
        <div className="w-full md:w-1/2 bg-black relative flex justify-center items-center p-6">
          <AnimationHydra1 />
        </div>
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-black mb-4">The Hydra</h2>

          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            The Hydra represents the decay or distortion of the Flower of Life when subjected to negative energies or imbalanced consciousness.
            This energetic breakdown demonstrates how the once harmonious geometry can lose coherence and transformation occurs within the energetic field.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>The individual spheres within the Flower of Life begin to repel each other, breaking the natural harmony and resonance of the pattern.</li>
            <li>The geometry gradually loses its original functions, such as energy distribution, alignment, and connection to higher consciousness.</li>
            <li>Over time, the Flower of Life transforms into a magnetic, chaotic being-like geometry, adopting new patterns and functions that can interact differently with energy fields.</li>
            <li>This transformation reflects the shadow aspects of consciousness, showing how imbalance and negative energy manifest as disruption within sacred structures.</li>
            <li>The Hydra also represents the potential for regeneration: even in decay, new forms of energy and awareness can emerge if consciousness intervenes consciously.</li>
            <li>Understanding the Hydra’s structure allows practitioners to identify blockages and restore harmony, reclaiming the original integrity of the Flower of Life.</li>
          </ul>
        </div>
      </div>

      {/* SECTION 4: Hydra 2 */}
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full">
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-black mb-4">The Hydra — More Depraved</h2>

          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            As the Hydra absorbs even stronger negative energies, the Flower of Life’s geometry deteriorates further. 
            The spheres and intersections no longer maintain their alignment, and the once-harmonious energy flow collapses into chaotic, unstable patterns. 
            This stage reveals how imbalance and corruption propagate through sacred structures.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>The spheres begin to distort, overlapping in irregular ways that break symmetry and resonance.</li>
            <li>Connections between intersections weaken, causing energy to stagnate or spiral uncontrollably.</li>
            <li>Harmonic frequencies are lost, replaced by discordant vibrations that generate instability in the surrounding energetic field.</li>
            <li>The geometry transforms into a fragmented, almost “living” structure with chaotic magnetic flows that react unpredictably to any external energy.</li>
            <li>This depravity manifests as confusion, fear, and imbalance within the consciousness interacting with the field.</li>
            <li>Even traditional functions of the Flower of Life—such as protection, energy amplification, and alignment—become erratic or entirely disrupted.</li>
            <li>Yet, within this chaos lies potential: observing and working with the Hydra’s depraved patterns allows for conscious purification, rebalancing, and eventual restoration of the original geometric integrity.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 bg-black relative flex justify-center items-center p-6">
          <AnimationHydra2 />
        </div>
      </div>

      {/* SECTION 5: Hydra 3 */}
      <div className="flex flex-col-reverse md:flex-row w-full min-h-screen   ">
        <div className="w-full md:w-1/2 bg-black relative flex justify-center items-center p-6">
          <AnimationHydra3 />
        </div>
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-black mb-4">The Hydra — More Decayed</h2>

          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            In its most decayed form, the Hydra represents the complete inversion of the Flower of Life’s geometry. 
            The once-luminous structure collapses under overwhelming negative energy, breaking its symmetry and twisting 
            its purpose into something corrosive, unstable, and deeply disruptive. This stage is the extreme boundary 
            where sacred geometry mutates into toxic patterns that generate energetic decay.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>The spheres no longer maintain their shape; they flatten, implode, or stretch unnaturally, creating malformed patterns.</li>
            <li>Intersections collapse into tangled knots of energy that pulse with irregular and unhealthy rhythms.</li>
            <li>The geometry begins to emit toxic vibrational signatures that destabilize nearby energetic fields and emotional states.</li>
            <li>The Hydra starts feeding on surrounding energy, drawing vitality away from the environment instead of supporting it.</li>
            <li>Functions become reversed: instead of harmonizing, the decayed structure produces confusion, fatigue, and emotional heaviness.</li>
            <li>Within the body, this resonance can manifest as energetic “disease”—areas of stagnation, tension, or disconnection from life-force flow.</li>
            <li>The decayed geometry disrupts aura layers, creating leaks, weak spots, or chaotic fluctuations in subtle fields.</li>
            <li>Its magnetic currents become predatory, latching onto unresolved trauma, fear, or suppressed emotions and amplifying them dramatically.</li>
            <li>Instead of spinning in smooth lotus-like motion, the structure jerks, twists, and spirals in fragmented currents.</li>
            <li>This stage marks the Hydra’s transformation into a corrosive archetype—an energetic parasite formed from the remains of once-sacred geometry.</li>
          </ul>

          <p className="text-gray-700 text-base leading-relaxed">
            Working with the Decayed Hydra requires great awareness: it reveals the deepest layers of distortion that arise 
            when the Flower of Life is deprived of light, balance, and intention. Understanding this stage helps individuals 
            recognize early signs of energetic decay within themselves and their environment, empowering them to reverse the 
            collapse and restore the original unity of the sacred geometric field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheFlowerOfLifePage;

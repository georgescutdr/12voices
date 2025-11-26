'use client';

import React from 'react';
import AnimationTherapy from '../components/animations/therapy/AnimationTherapy';

const TherapyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-justify drop-shadow-sm">

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row w-full min-h-screen border-b border-gray-200 shadow-sm">

        {/* Left - Text */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
            Energy Therapy
          </h2>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            Remote energy therapy blends modern wellness insights with subtle energetic
            techniques to bring your body, mind, and emotions back into natural balance.
            It calms the nervous system, quiets the mind, and restores deeper layers of well-being,
            supporting vitality and restorative sleep.
          </p>

          <ul className="list-disc list-inside text-gray-800 text-lg lg:text-xl space-y-2 drop-shadow-sm mt-10">
            <li>Promotes deep relaxation and restorative sleep</li>
            <li>Regulates and energizes the nervous system</li>
            <li>Supports balanced organ function</li>
            <li>Strengthens personal energy and resilience</li>
            <li>Enhances mood and emotional clarity</li>
          </ul>
        </div>

        {/* Right - Animation */}
        <div className="lg:w-1/2 mt-62  relative z-10 flex justify-center items-center">
          <div className="w-full h-[320px] lg:h-[400px]">
            <AnimationTherapy />
          </div>
        </div>

        {/* Background subtle gradient for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white -z-10"></div>
      </section>

 

      {/* DETAILS SECTION */}
      <section className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            Clients often describe the experience as a wave of clarity and calm moving through
            the body. Many report deeper sleep, emotional balance, and renewed vitality —
            all without being physically present. You simply relax, receive, and allow the energy
            to restore your system naturally.
          </p>

          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
            How It Works
          </h2>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            Remote energy therapy transmits focused waves of subtle healing light directly
            to your energetic field, wherever you are. No clinic visits, no procedures — just
            rest and allow the system to support your body.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            The energy enters your biofield, working at a restorative level to align areas
            needing renewal or balance. Over time, your system gradually regains natural harmony
            and optimal functioning.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            As your nervous system absorbs these calming frequencies, the mind quiets, stress fades,
            and emotions stabilize. The body enters a parasympathetic state — naturally promoting
            deep, restorative sleep.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            Many clients describe sessions as <strong>deeply soothing, mentally refreshing,
            sleep-enhancing, and grounding</strong>. They often drift into rest more easily and
            wake feeling lighter, clearer, and fully recharged — as if their entire system has
            been quietly reset overnight.
          </p>

          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm font-semibold">
            This gentle energy supports your body by releasing tension from muscles and tissues,
            encouraging natural organ restoration, and boosting overall vitality and life-force energy.
          </p>

          {/* Bottom Animation Centered */}
          <div className="mt-36 w-full flex justify-center">
            <div className="w-full max-w-4xl h-[360px] lg:h-[200px]">
              <AnimationTherapy />
            </div>
          </div>

        </div>

        {/* subtle shadow background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white shadow-inner rounded-xl"></div>
      </section>

    </div>
  );
};

export default TherapyPage;

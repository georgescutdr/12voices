'use client';

import React from 'react';
import AnimationFruitOfLife from '../components/animations/fruit-of-life/AnimationFruitOfLife';

const AboutUsPage: React.FC = () => {
  return (
    <div className="page">

      {/* ======================= FIRST SECTION — About us Overview ======================= */}
      <div className="section-1">
        {/* LEFT COLUMN — Text */}
        <div className="left-col">
          <h1 className="h1-global">
            About us
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            At 12Voices System, our mission is to guide you toward balance, clarity, and deeper self-understanding.
            We work with energy in a gentle, grounded, and practical way—helping you reconnect with your natural rhythm and inner harmony.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            We offer:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base lg:text-lg">
            <li>
              <strong>Energy therapy for sleep</strong> — a calming energetic treatment that supports deep rest, reduces tension,
              and helps reset your body’s natural sleep cycles.
            </li>

            <li>
              <strong>Birth chart readings</strong> — personalized astrological insights that reveal your strengths, challenges,
              life themes, and spiritual direction.
            </li>

            <li>
              <strong>Energy work courses</strong> — transformative training in Reiki, Seikim, Karuna, Shamballa,
              and Holy Trinity systems, designed to awaken intuition and elevate your energetic awareness.
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN — Animation */}
        <div className="right-col">
          <AnimationFruitOfLife />
        </div>
      </div>

      {/* ======================= SECOND SECTION — Description ======================= */}
      <div className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="max-w-4xl text-gray-800 text-base lg:text-lg leading-relaxed space-y-8">

          <p>
            With over 15 years of experience in spiritual and energetic practices, we provide a supportive environment
            for healing, self-exploration, and personal evolution.
          </p>

          <p>
            Our distance-based energy work helps bring the mind and body into a state of calm—ideal for improving sleep,
            reducing emotional stress, and restoring inner balance.
          </p>

          <p>
            We also offer intuitive birth chart and aura readings, giving you a clearer understanding of your life path,
            your energetic blueprint, and the patterns shaping your personal growth.
          </p>

          <p>
            Through our energy work courses—including Reiki, Karuna, Seikim, Shamballa, and Holy Trinity—we help students
            develop confidence, sensitivity, and mastery in working with subtle energies.
          </p>

          {/* SERVICE CARDS */}
          <div className="w-full sm:w-auto border-l-4 border-gray-700 pl-4 bg-white/60 p-4 shadow-sm rounded mt-8">
            <h3 className="text-xl font-semibold text-black mb-2">Energy therapy for sleep</h3>
            Our sleep-focused energy therapy gently restores the nervous system, helping your body release tension and shift
            into a deeper state of rest. Perfect for those experiencing insomnia, overthinking, or energetic overload.
          </div>

          <div className="border-l-4 border-gray-700 pl-4 bg-white/60 p-4 shadow-sm rounded">
            <h3 className="text-xl font-semibold text-black mb-2">Birth chart readings</h3>
            A birth chart reading reveals your strengths, emotional patterns, life lessons, and long-term themes—helping
            you make choices aligned with your true direction.
          </div>

          <div className="border-l-4 border-gray-700 pl-4 bg-white/60 p-4 shadow-sm rounded">
            <h3 className="text-xl font-semibold text-black mb-2">Energy work courses</h3>
            Our courses guide you into the world of energy healing with clarity and confidence. Learn practical
            techniques, deepen your intuition, and expand your spiritual awareness.
          </div>

          <a
            href="/contact"
            className="mt-8 inline-block bg-black text-white px-10 py-4 font-semibold rounded-xl shadow-2xl hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            Book a Session
          </a>

        </div>
      </div>

    </div>
  );
};

export default AboutUsPage;

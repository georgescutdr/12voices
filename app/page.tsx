"use client";

import React from "react";
import AnimationFlowerOfLife from './components/animations/flower-of-life/AnimationFlowerOfLife';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* ANIMATION SECTION */}
      <section className="relative bg-black flex flex-col justify-center items-center text-center px-6 lg:px-24">
        <h1
          className="mt-20 text-5xl lg:text-6xl font-bold drop-shadow-xl"
          style={{ fontFamily: 'var(--font-title), serif' }} // Only this h1
        >
          <span className="font-elsie font-black text-[1.4em] relative">12</span>
          {' '}
          Voices
        </h1>

        <div className="w-full" style={{ height: 'auto' }}>
          <AnimationFlowerOfLife />
        </div>
      </section>
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 lg:px-24 py-16 bg-white">
        {/* Optional background overlay (can remove if just plain white) */}
        <div className="absolute inset-0 bg-white -z-10"></div>

        <h1 className="text-5xl lg:text-6xl font-bold text-black">
          Restore Sleep & Balance Your Energy
        </h1>
        <p className="mt-6 text-xl lg:text-2xl text-black max-w-2xl">
          Experience remote energy therapy sessions for better sleep, relaxation, and holistic wellbeing.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-black text-white px-10 py-4 font-semibold rounded-xl shadow-2xl hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
        >
          Book a Session
        </a>
      </section>

      {/* ABOUT / SERVICES SECTION */}
      <section className="py-8 px-6 lg:px-24 max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold drop-shadow-lg">Our Focus</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/5 p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">Remote Energy Therapy</h3>
            <p className="text-gray-300">
              Personalized sessions to improve sleep quality, reduce stress, and restore your energy balance from anywhere in the world.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">Learning</h3>
            <p className="text-gray-300">
              Discover the principles of chakras, auras, and energy systems, with engaging courses and practical exercises.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">Myth & Science</h3>
            <p className="text-gray-300">
              Explore the intersection of ancient wisdom and modern science. Separate myths from validated findings in energy healing and human physiology.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="book" className="py-24 px-6 lg:px-24 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6 text-black drop-shadow-lg">Book Your Session</h2>
        <p className="text-black mb-6 max-w-2xl mx-auto">
          Experience the benefits of remote energy therapy for sleep and wellness. Sessions are personalized, accessible from anywhere, and designed to support your unique energy system.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-10 py-4 font-semibold rounded-xl shadow-2xl hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}

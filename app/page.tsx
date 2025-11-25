"use client";

import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-24">
        {/* Gradient background behind content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 -z-10"></div>

        <h1 className="text-5xl lg:text-6xl font-bold drop-shadow-xl">
          Restore Sleep & Balance Your Energy
        </h1>
        <p className="mt-6 text-xl lg:text-2xl text-gray-200 max-w-2xl drop-shadow-md">
          Experience remote energy therapy sessions for better sleep, relaxation, and holistic wellbeing.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-black px-10 py-4 font-semibold rounded-xl shadow-2xl hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
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
      <section id="book" className="py-24 px-6 lg:px-24 text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Book Your Session</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Experience the benefits of remote energy therapy for sleep and wellness. Sessions are personalized, accessible from anywhere, and designed to support your unique energy system.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black px-10 py-4 font-semibold rounded-xl shadow-2xl hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}

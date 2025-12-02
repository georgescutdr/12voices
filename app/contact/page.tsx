// app/contact/page.tsx
"use client";

import React from "react";

export default function ContactPage() {
  const email = "12voices.therapy@gmail.com"; // replace with your real email

  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center px-6 lg:px-24 py-12">
      
      {/* HEADER */}
      <section className="text-center space-y-6 max-w-2xl">
        <h1 className="h1-global">
          Get in Touch
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 drop-shadow-md">
          We’d love to hear from you. For inquiries, session bookings, or general questions, reach us at:
        </p>

        {/* EMAIL DISPLAY */}
        <div className="mt-6">
          <a
            href={`mailto:${email}`}
            className="text-white text-2xl lg:text-3xl font-semibold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors duration-300"
          >
            {email}
          </a>
        </div>

        <p className="mt-6 text-gray-400 text-sm lg:text-base">
          Our team responds promptly during business hours. We respect your privacy and will only use this email for your inquiries.
        </p>
      </section>
    </main>
  );
}

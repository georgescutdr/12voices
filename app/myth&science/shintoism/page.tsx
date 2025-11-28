"use client";

import React from "react";

/* ================================================================
   DATA TYPES
================================================================ */

type GodMapping = {
  deity: string;
  theme: string;
  symbolicMeaning: string;
  earth: string;
  geology: string;
  psychology: string;
  biology: string;
};

type MythMapping = {
  myth: string;
  theme: string;
  development: string; // Geological / symbolic stage
  psychology: string;
  biology: string;
};

/* ================================================================
   TABLE 1 — SHINTO KAMI
================================================================ */

const shintoGods: GodMapping[] = [
  {
    deity: "Amenominakanushi",
    theme: "Primordial origin",
    symbolicMeaning: "The cosmic center, source of everything",
    earth: "Primordial chaos before land emerges",
    geology: "Pre-Earth matter, cosmic potential",
    psychology: "Potentiality, undifferentiated consciousness",
    biology: "Prebiotic chemical potential"
  },
  {
    deity: "Izanagi & Izanami",
    theme: "Creation / land formation",
    symbolicMeaning: "Birth, duality, union",
    earth: "Formation of Japanese islands",
    geology: "Volcanic activity, crust formation",
    psychology: "Union of opposites, emergence of self",
    biology: "Early life formation, ecological systems"
  },
  {
    deity: "Amaterasu",
    theme: "Sun / life-force",
    symbolicMeaning: "Illumination, order, vitality",
    earth: "Sunlight energizing ecosystems",
    geology: "Day-night cycles, weather influence",
    psychology: "Clarity, insight, consciousness",
    biology: "Circadian rhythm, photosynthesis"
  },
  {
    deity: "Susanoo",
    theme: "Storms / chaos",
    symbolicMeaning: "Disruption, transformation, courage",
    earth: "Storms, winds, ocean currents",
    geology: "Erosion, earthquakes, floods",
    psychology: "Resilience, emotional turbulence",
    biology: "Stress-response systems, adaptive physiology"
  },
  {
    deity: "Tsukuyomi",
    theme: "Moon / cycles",
    symbolicMeaning: "Reflection, rhythm, calm",
    earth: "Lunar influence on tides",
    geology: "Tidal shaping of coastlines",
    psychology: "Intuition, rhythm, cyclical awareness",
    biology: "Reproductive cycles, nocturnal rhythms"
  },
  {
    deity: "Inari",
    theme: "Fertility / agriculture",
    symbolicMeaning: "Growth, abundance, sustenance",
    earth: "Rice paddies, rivers, fertile lands",
    geology: "Soil formation, nutrient cycles",
    psychology: "Nurturing, prosperity mindset",
    biology: "Plant growth, human agricultural adaptation"
  },
];

/* ================================================================
   TABLE 2 — SHINTO CREATION MYTHS
================================================================ */

const shintoMyths: MythMapping[] = [
  {
    myth: "Amenominakanushi appears in the beginning",
    theme: "Primordial origin of universe",
    development: "Pre-Earth / Hadean",
    psychology: "Potential, unformed consciousness",
    biology: "Prebiotic chemistry"
  },
  {
    myth: "Izanagi & Izanami create the Japanese islands",
    theme: "Birth of land from primordial waters",
    development: "Archean / Proterozoic — land forms",
    psychology: "Integration of duality, creative emergence",
    biology: "Early life ecosystems"
  },
  {
    myth: "Death of Izanami and descent to Yomi",
    theme: "Death, transformation, shadow",
    development: "Proterozoic — early cycles of death and regeneration",
    psychology: "Confronting shadow, acceptance of mortality",
    biology: "Apoptosis, early ecological cycles"
  },
  {
    myth: "Amaterasu retreats into cave",
    theme: "Light and order vs darkness",
    development: "Paleozoic — sun and day-night cycles stabilize",
    psychology: "Self-reflection, emergence of consciousness",
    biology: "Circadian rhythm, solar energy utilization"
  },
  {
    myth: "Susanoo tames Yamata-no-Orochi",
    theme: "Chaos transformed into order",
    development: "Mesozoic — natural forces balanced",
    psychology: "Mastery of impulses, courage under threat",
    biology: "Stress adaptation, predator-prey balance"
  },
  {
    myth: "Inari brings fertility to lands",
    theme: "Agriculture and abundance",
    development: "Cenozoic — human societies arise",
    psychology: "Cooperation, cultivation, abundance mindset",
    biology: "Domestication of plants, human nutrition"
  },
];

/* ================================================================
   PAGE
================================================================ */

export default function ShintoMythologyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* INTRO */}
        <section className="space-y-4 max-w-4xl">
          <h1 className="h1-global">
            Shinto Kami and Myths — Symbolic Evolution of Earth and Humanity
          </h1>
        </section>

        {/* GODS TABLE */}
        <Description text="The Shinto kami are more than divine beings—they personify the forces of nature, the rhythms of the Earth, and the inner workings of the human mind and body. Each deity reflects a stage of natural evolution and psychological development, from primordial chaos to fertile abundance. By exploring their symbolic meanings alongside geological and biological processes, we see how mythology mirrors the unfolding story of life, consciousness, and the environment." />
        <SectionTableGods title="Shinto Kami — Nature, Psychology & Evolution" data={shintoGods} />

        {/* MYTHS TABLE */}
        <Description text="Shinto creation myths and legendary events map the emergence of the world and humanity in vivid, symbolic narratives. Each story aligns with geological eras, human psychological growth, and biological phenomena. From the first appearance of Amenominakanushi in primordial chaos to the fertility brought by Inari, these myths reveal the deep interplay between cosmic events, personal development, and ecological evolution—showing how myth preserves ancient wisdom about life, adaptation, and consciousness." />
        <SectionTableMyths title="Shinto Myths — Geological & Human Development Mapping" data={shintoMyths} />
      </div>
    </main>
  );
}

/* ================================================================
   DESCRIPTION COMPONENT
================================================================ */

function Description({ text }: { text: string }) {
  return (
    <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">{text}</p>
  );
}

/* ================================================================
   TABLE COMPONENTS
================================================================ */

function SectionTableGods({ title, data }: { title: string; data: GodMapping[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead>
            <tr>
              <Th text="Deity" />
              <Th text="Symbolic Meaning" />
              <Th text="Earth Evolution" />
              <Th text="Geology" />
              <Th text="Psychology" />
              <Th text="Biology" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 align-top">
                <Td title={row.deity} subtitle={row.theme} />
                <Td text={row.symbolicMeaning} />
                <Td text={row.earth} />
                <Td text={row.geology} />
                <Td text={row.psychology} />
                <Td text={row.biology} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SectionTableMyths({ title, data }: { title: string; data: MythMapping[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead>
            <tr>
              <Th text="Myth" />
              <Th text="Geological / Symbolic Stage" />
              <Th text="Psychology" />
              <Th text="Biology" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 align-top">
                <Td title={row.myth} subtitle={row.theme} />
                <Td text={row.development} />
                <Td text={row.psychology} />
                <Td text={row.biology} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ================================================================
   REUSABLE TABLE CELLS
================================================================ */

function Th({ text }: { text: string }) {
  return (
    <th className="px-4 py-3 text-left font-semibold text-gray-700">{text}</th>
  );
}

function Td({ text, title, subtitle }: { text?: string; title?: string; subtitle?: string }) {
  return (
    <td className="px-4 py-4 align-top">
      {title && <div className="font-semibold">{title}</div>}
      {subtitle && <div className="text-gray-500">{subtitle}</div>}
      {text && !title && text}
    </td>
  );
}

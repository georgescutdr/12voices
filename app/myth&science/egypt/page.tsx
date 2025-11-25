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
  development: string; // Geological stage / cosmological stage
  psychology: string;
  biology: string;
};

/* ================================================================
   TABLE 1 — ANCIENT EGYPTIAN GODS
================================================================ */

const egyptianGods: GodMapping[] = [
  {
    deity: "Nun",
    theme: "Primordial waters / chaos",
    symbolicMeaning: "Potentiality, the source of creation",
    earth: "Primordial waters",
    geology: "Pre-Earth matter, cosmic potential",
    psychology: "Unformed potential, unconscious mind",
    biology: "Prebiotic chemistry, first life potential"
  },
  {
    deity: "Atum",
    theme: "Creator / self-generated",
    symbolicMeaning: "Self-initiation, manifestation, completion",
    earth: "Emergence of land from waters",
    geology: "Early crust stabilization",
    psychology: "Self-awareness, individuation",
    biology: "First cellular life"
  },
  {
    deity: "Ra",
    theme: "Sun / life force",
    symbolicMeaning: "Consciousness, energy, illumination",
    earth: "Sunlight warming the Earth",
    geology: "Solar influence on climate",
    psychology: "Clarity, perception, vitality",
    biology: "Circadian rhythm, photosynthesis"
  },
  {
    deity: "Osiris",
    theme: "Death / regeneration",
    symbolicMeaning: "Cycles of life, renewal, transformation",
    earth: "Fertile Nile delta, seasonal flooding",
    geology: "Sediment deposition, soil fertility",
    psychology: "Transformation, introspection, shadow work",
    biology: "Cell death and regeneration, reproduction"
  },
  {
    deity: "Isis",
    theme: "Magic / healing / protection",
    symbolicMeaning: "Nurturing, knowledge, emotional intelligence",
    earth: "River cycles supporting life",
    geology: "Erosion and ecosystem support",
    psychology: "Healing, intuition, caregiving",
    biology: "Reproductive health, nurturing behaviors"
  },
  {
    deity: "Horus",
    theme: "Sky / kingship / order",
    symbolicMeaning: "Vision, protection, leadership",
    earth: "Skies over the Nile and Earth",
    geology: "Stable landscapes for civilization",
    psychology: "Focus, planning, societal roles",
    biology: "Visual perception, spatial awareness"
  },
  {
    deity: "Set",
    theme: "Chaos / storms",
    symbolicMeaning: "Conflict, disruption, necessary change",
    earth: "Deserts, storms, natural disasters",
    geology: "Erosion, tectonic activity",
    psychology: "Adaptation to challenge, resilience",
    biology: "Stress-response, fight-or-flight systems"
  },
  {
    deity: "Thoth",
    theme: "Wisdom / writing / time",
    symbolicMeaning: "Knowledge, measurement, communication",
    earth: "Moon cycles, time-keeping",
    geology: "Tidal influence and calendrical cycles",
    psychology: "Logic, reflection, memory",
    biology: "Cognitive development, learning systems"
  },
];

/* ================================================================
   TABLE 2 — EGYPTIAN CREATION MYTHS
================================================================ */

const egyptianMyths: MythMapping[] = [
  {
    myth: "Heliopolitan Creation — Atum creates Shu and Tefnut",
    theme: "Emergence of duality from Nun",
    development: "Hadean / Archean — primordial Earth",
    psychology: "Awakening, emergence of self and duality",
    biology: "Prebiotic chemistry, first cell formation"
  },
  {
    myth: "Shu separates sky and earth",
    theme: "Order from chaos",
    development: "Archean / Proterozoic — atmosphere forms",
    psychology: "Differentiation, structure, perspective",
    biology: "Oxygenation of atmosphere, first simple life"
  },
  {
    myth: "Osiris, Isis, Seth — Nile cycles",
    theme: "Death and renewal, cyclical balance",
    development: "Proterozoic / Paleozoic — land and water cycles stabilize",
    psychology: "Integration of life and death, resilience",
    biology: "First multicellular life, reproductive cycles"
  },
  {
    myth: "Ra travels daily across the sky",
    theme: "Sun cycle, illumination, consciousness",
    development: "Paleozoic / Mesozoic — solar influence on climate",
    psychology: "Awareness, planning, circadian regulation",
    biology: "Photosynthesis, light-dependent life processes"
  },
  {
    myth: "Atum and the Ennead — society and order",
    theme: "Formation of social structure and hierarchy",
    development: "Cenozoic — emergence of humans",
    psychology: "Social consciousness, moral order",
    biology: "Human evolution, cognition, culture"
  },
];

/* ================================================================
   PAGE
================================================================ */

export default function EgyptianMythologyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* INTRO */}
        <section className="space-y-4 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Ancient Egyptian Gods and Myths — Symbolic Evolution of Earth and Humanity
          </h1>
        </section>

        {/* GODS TABLE */}
        <Description text="The gods of Ancient Egypt are living symbols of nature, the cosmos, and the human mind. From the primordial waters of Nun to the illuminating power of Ra, each deity embodies a stage in the evolution of the Earth, human consciousness, and biological life. Exploring these gods reveals how myths encode wisdom about creation, survival, adaptation, and the inner workings of our own psyche." />
        <SectionTableGods title="Egyptian Gods — Nature, Psychology & Evolution" data={egyptianGods} />

        {/* MYTHS TABLE */}
        <Description text="Ancient Egyptian creation myths tell the story of the world’s unfolding in vivid, symbolic narratives. From Atum’s self-generation to the daily journey of Ra across the sky, each myth mirrors geological stages, human psychological development, and biological cycles. By tracing these stories, we uncover the deep connections between cosmic events, the rise of life, and the growth of human awareness, showing myth as a bridge between imagination and reality." />
        <SectionTableMyths title="Egyptian Creation Myths — Geological & Human Development Mapping" data={egyptianMyths} />
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
              <Th text="Geological / Cosmological Stage" />
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

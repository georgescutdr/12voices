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
  development: string; // Geological stage
  psychology: string;
  biology: string;
};

/* ================================================================
   TABLE 1 — AZTEC & MAYA GODS
================================================================ */

const mesoamericanGods: GodMapping[] = [
  {
    deity: "Ometeotl (Aztec)",
    theme: "Primordial duality / creation",
    symbolicMeaning: "Source of all existence; balance of opposites",
    earth: "Primordial waters and chaos",
    geology: "Pre-Earth matter, cosmic potential",
    psychology: "Integration of opposites, inner balance",
    biology: "Prebiotic potential, earliest life chemistry"
  },
  {
    deity: "Quetzalcoatl",
    theme: "Wind / wisdom / culture",
    symbolicMeaning: "Bringer of knowledge, civilization, and learning",
    earth: "Atmosphere formation, winds shaping landscape",
    geology: "Volcanic activity forming fertile soil",
    psychology: "Conscious learning, cultural creativity",
    biology: "Early human development, adaptation to environment"
  },
  {
    deity: "Tezcatlipoca",
    theme: "Change / shadow / conflict",
    symbolicMeaning: "Transformation through challenge and reflection",
    earth: "Volcanoes, earthquakes, natural cycles",
    geology: "Tectonic shifts, crustal movements",
    psychology: "Shadow work, resilience, facing internal conflict",
    biology: "Stress-response systems, adaptive physiology"
  },
  {
    deity: "Huitzilopochtli",
    theme: "Sun / warrior force",
    symbolicMeaning: "Energy, life-force, motivation, drive",
    earth: "Sunlight shaping ecosystems",
    geology: "Solar influence on climate, day-night cycles",
    psychology: "Motivation, courage, action",
    biology: "Circadian rhythms, physical energy cycles"
  },
  {
    deity: "Chac (Maya)",
    theme: "Rain / fertility",
    symbolicMeaning: "Abundance, sustenance, growth",
    earth: "Water cycles, rainfall shaping land",
    geology: "Erosion, river formation, fertile soils",
    psychology: "Growth, renewal, emotional nourishment",
    biology: "Plant growth, agricultural productivity"
  },
  {
    deity: "Ix Chel (Maya)",
    theme: "Moon / cycles / healing",
    symbolicMeaning: "Femininity, protection, regenerative power",
    earth: "Tidal cycles, night illumination",
    geology: "Ocean and coastal shaping",
    psychology: "Healing, intuition, reflection",
    biology: "Reproductive cycles, regenerative processes"
  },
];

/* ================================================================
   TABLE 2 — AZTEC & MAYA MYTHS → GEOLOGICAL EVOLUTION
================================================================ */

const mesoamericanMyths: MythMapping[] = [
  {
    myth: "1st Sun — Tezcatlipoca rules",
    theme: "Sun of jaguar; destruction by jaguars",
    development: "Hadean / Archean — primordial Earth",
    psychology: "Emergence of order from chaos, initial trials",
    biology: "Prebiotic chemistry, earliest life potential"
  },
  {
    myth: "2nd Sun — Quetzalcoatl rules",
    theme: "Sun of wind; destroyed by hurricanes",
    development: "Archean / Proterozoic — atmosphere stabilizes",
    psychology: "Adaptation to challenges, resilience",
    biology: "Simple cellular life evolves"
  },
  {
    myth: "3rd Sun — Tlaloc rules",
    theme: "Sun of water; destroyed by floods",
    development: "Proterozoic / Paleozoic — oceans and continents",
    psychology: "Emotional growth, learning from loss",
    biology: "Marine life diversification"
  },
  {
    myth: "4th Sun — Chalchiuhtlicue rules",
    theme: "Sun of water goddess; destroyed by ice",
    development: "Paleozoic / Mesozoic — climate variation",
    psychology: "Facing extremes, emotional adaptation",
    biology: "Complex life and adaptation to climate changes"
  },
  {
    myth: "5th Sun — Current era, Huitzilopochtli",
    theme: "Sun of movement; human survival",
    development: "Cenozoic — rise of mammals and humans",
    psychology: "Human consciousness, societal formation",
    biology: "Human evolution, social and cognitive development"
  },
  {
    myth: "Popol Vuh — Hero Twins",
    theme: "Overcoming trials to restore balance",
    development: "Proterozoic — first stable land and oceans",
    psychology: "Resilience, problem-solving, duality integration",
    biology: "Emergence of multicellular life"
  },
  {
    myth: "Quetzalcoatl bringing maize to humans",
    theme: "Civilization and sustenance",
    development: "Paleozoic — diversification of life",
    psychology: "Culture, learning, cooperation",
    biology: "Agriculture, domestication of plants"
  }
];

/* ================================================================
   PAGE
================================================================ */

export default function MesoamericanMythologyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* INTRO */}
        <section className="space-y-4 max-w-4xl">
          <h1 className="h1-global">
            Aztec & Maya Gods and Myths — Symbolic Evolution of Earth and Humanity
          </h1>
        </section>

        {/* GODS TABLE */}
        <Description text="The gods of the Aztec and Maya civilizations embody the forces of nature and the rhythms of life. From the primordial duality of Ometeotl to the creative wisdom of Quetzalcoatl, each deity reflects stages of Earth’s formation, natural cycles, and inner human development. Exploring these gods helps us understand how ancient peoples saw the connection between the cosmos, the land, and the mind." />
        <SectionTableGods title="Aztec & Maya Gods — Nature, Psychology & Evolution" data={mesoamericanGods} />

        {/* MYTHS TABLE */}
        <Description text="Mesoamerican myths, like the Five Suns and the adventures of the Hero Twins, tell the story of the Earth and humanity through cosmic events. Each Sun represents a cycle of creation and destruction, mirroring geological changes and the growth of life. These stories also guide us in understanding resilience, adaptation, and the balance between chaos and order in both the natural world and the human psyche." />
        <SectionTableMyths title="Aztec & Maya Myths — Geological Evolution Mapping" data={mesoamericanMyths} />
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
              <Th text="Geological Stage" />
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

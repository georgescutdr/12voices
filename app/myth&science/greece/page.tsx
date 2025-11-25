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

type HeroMapping = {
  myth: string;
  theme: string;
  development: string;
  psychology: string;
  biology: string;
};

type EarlyMythMapping = {
  myth: string;
  theme: string;
  earthStage: string;      // Geological focus
  geology: string;
};

/* ================================================================
   TABLE 1 — GREEK GODS
================================================================ */

const greekGods: GodMapping[] = [
  {
    deity: "Chaos",
    theme: "Primordial void",
    symbolicMeaning: "Undifferentiated potential, the pre-creative state.",
    earth: "Pre-earth nebular gas cloud",
    geology: "No solid matter; dust + plasma",
    psychology: "Pre-conscious mind; unformed potential",
    biology: "Prebiotic chemical soup"
  },
  {
    deity: "Gaia",
    theme: "Earth / foundation",
    symbolicMeaning: "Grounding, stability, the emergence of form.",
    earth: "Solid surface forms; crust cooling",
    geology: "Continents beginning to stabilize",
    psychology: "Grounding, security, identity",
    biology: "Stable environment for life to appear"
  },
  {
    deity: "Uranus",
    theme: "Sky / higher structure",
    symbolicMeaning: "Higher order, perspective, inspiration.",
    earth: "Atmosphere formation",
    geology: "Outgassing, atmospheric layering",
    psychology: "Imagination, vision, inspiration",
    biology: "Gas balance shaping life chemistry"
  },
  {
    deity: "Tartarus",
    theme: "Depth / underworld",
    symbolicMeaning: "Shadow, instinct, unconscious forces.",
    earth: "Earth’s molten core + mantle",
    geology: "High-pressure inner layers",
    psychology: "Primal instincts, deep unconscious",
    biology: "Fight-or-flight system"
  },
  {
    deity: "Eros",
    theme: "Attraction / binding",
    symbolicMeaning: "Creative force that pulls things together.",
    earth: "Chemical bonding begins",
    geology: "Minerals forming in early crust",
    psychology: "Connection, intimacy, desire",
    biology: "Cell bonding, reproductive impulses"
  },
  {
    deity: "Cronos",
    theme: "Time / cycles",
    symbolicMeaning: "Order of generations, structure, limits.",
    earth: "Tectonic cycles stabilize",
    geology: "Geological eras begin",
    psychology: "Discipline, boundaries, maturation",
    biology: "Cell cycles, biological rhythms"
  },
  {
    deity: "Zeus",
    theme: "Order / regulation",
    symbolicMeaning: "Balance of forces, conscious authority.",
    earth: "Stable atmosphere, climate regulation",
    geology: "Weather cycles, storms, rain",
    psychology: "Leadership, clarity, decision-making",
    biology: "Hormonal regulation, homeostasis"
  },
  {
    deity: "Poseidon",
    theme: "Oceans / emotion",
    symbolicMeaning: "Fluidity, depth, emotional forces.",
    earth: "Formation of oceans",
    geology: "Hydrosphere stabilizes",
    psychology: "Emotion, intuition, mood cycles",
    biology: "Life begins in water"
  },
  {
    deity: "Hades",
    theme: "Death / transformation",
    symbolicMeaning: "Cycles of ending and renewal.",
    earth: "Decay and recycling processes",
    geology: "Subduction zones, sediment cycles",
    psychology: "Shadow work, acceptance of endings",
    biology: "Programmed cell death (apoptosis)"
  },
  {
    deity: "Apollo",
    theme: "Light / truth",
    symbolicMeaning: "Insight, clarity, logic, harmony.",
    earth: "Sunlight stabilizing climate",
    geology: "Solar influence on seasons",
    psychology: "Logic, clarity, objectivity",
    biology: "Circadian rhythms"
  },
  {
    deity: "Artemis",
    theme: "Moon / natural cycles",
    symbolicMeaning: "Instinct, rhythm, nature’s intelligence.",
    earth: "Tidal cycles shape oceans",
    geology: "Moon’s gravitational effects",
    psychology: "Intuition, instinct, embodiment",
    biology: "Reproductive cycles"
  },
];

/* ================================================================
   TABLE 1.5 — EARLY GREEK MYTHS → EARTH EVOLUTION
================================================================ */

const earlyGreekMyths: EarlyMythMapping[] = [
  {
    myth: "Chaos",
    theme: "Primordial void",
    earthStage: "Hadean — pre-planetary formation",
    geology: "Nebular gas and dust cloud; no solid matter"
  },
  {
    myth: "Gaia emerges",
    theme: "Earth and foundation",
    earthStage: "Early Archean — formation of continental crust",
    geology: "Solid crust forms, initial landmasses appear"
  },
  {
    myth: "Uranus / Sky separates from Gaia",
    theme: "Separation of heavens and earth",
    earthStage: "Early Archean — atmosphere develops",
    geology: "Outgassing and primitive atmospheric layers"
  },
  {
    myth: "Cronos swallows Uranus’ children",
    theme: "Cycle of suppression and emergence",
    earthStage: "Late Archean — tectonic activity begins",
    geology: "Volcanic arcs, early mountain formation"
  },
  {
    myth: "Rhea hides Zeus",
    theme: "Preservation of life / hope",
    earthStage: "Early Proterozoic — crust stabilizes",
    geology: "Formation of stable continental blocks"
  },
  {
    myth: "Titanomachia — Titans vs Olympians",
    theme: "Conflict of primal forces",
    earthStage: "Proterozoic — tectonic stabilization",
    geology: "Mountain building, volcanism, crustal reorganization"
  },
  {
    myth: "Typhon uprising",
    theme: "Chaotic natural forces",
    earthStage: "Late Proterozoic / Early Paleozoic",
    geology: "Earthquakes, volcanoes, climate shifts"
  },
  {
    myth: "Oceanus and primordial seas",
    theme: "Formation of oceans",
    earthStage: "Paleozoic — stabilization of hydrosphere",
    geology: "Ocean basins form, water cycle established"
  },
];

/* ================================================================
   TABLE 2 — HERO MYTHS → HUMAN DEVELOPMENT
================================================================ */

const greekHeroes: HeroMapping[] = [
  {
    myth: "Perseus & Medusa",
    theme: "Facing fear",
    development: "Childhood → confronting early fears",
    psychology: "Courage, fear integration",
    biology: "Stress-response calibration"
  },
  {
    myth: "Theseus & the Minotaur",
    theme: "Labyrinth of identity",
    development: "Adolescence → self-discovery",
    psychology: "Shadow confrontation, identity formation",
    biology: "Hormonal shifts, neural rewiring"
  },
  {
    myth: "Hercules’ 12 Labors",
    theme: "Strength through trials",
    development: "Early adulthood → mastering challenges",
    psychology: "Discipline, resilience, responsibility",
    biology: "Peak physical development"
  },
  {
    myth: "Jason & the Golden Fleece",
    theme: "Quest for meaning",
    development: "Adulthood → building purpose",
    psychology: "Leadership, partnership, ambition",
    biology: "Long-term physiological balance"
  },
  {
    myth: "Odysseus’ Journey",
    theme: "Wisdom through experience",
    development: "Mature adulthood → integration",
    psychology: "Resilience, reflection, strategy",
    biology: "Adaptation during aging"
  },
];

/* ================================================================
   PAGE
================================================================ */

export default function GreekMythologyEvolutionPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* INTRO */}
        <section className="space-y-4 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Greek Gods & Myths — Symbolic Evolution of Earth and Human Development
          </h1>
        </section>

        {/* GODS TABLE */}
        <Description text="The Greek gods are living symbols of the natural world and human psychology. From the primordial Chaos to the measured order of Zeus, each deity reflects a stage in the evolution of Earth, the shaping of life, and the inner forces within us all. By exploring their stories, we can see how cosmic events mirror human development and the emergence of consciousness." />
        <SectionTableGods title="Greek Gods — Nature, Psychology & Evolution" data={greekGods} />

        {/* EARLY MYTHS TABLE */}
        <Description text="Early Greek myths recount the grand story of Earth’s formation. From Chaos, the empty void, to the turbulent battles of Titans and the rise of oceans, these narratives mirror the geological and environmental changes that shaped our planet. Each myth reveals how humans used storytelling to understand the evolving world around them." />
        <SectionTableEarlyMyths title="Early Greek Myths — Earth Evolution Mapping" data={earlyGreekMyths} />

        {/* HEROES TABLE */}
        <Description text="The tales of Greek heroes reflect the journey of human life. From childhood fears faced by Perseus to the wisdom earned by Odysseus, these myths map the psychological and physiological stages of growth. Each hero’s adventure provides lessons in courage, resilience, and self-mastery, showing how myth captures the essence of our personal development." />
        <SectionTableHeroes title="Greek Heroes — Developmental Psychology Mapping" data={greekHeroes} />
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

function SectionTableEarlyMyths({ title, data }: { title: string; data: EarlyMythMapping[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead>
            <tr>
              <Th text="Myth" />
              <Th text="Theme" />
              <Th text="Earth Stage" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 align-top">
                <Td title={row.myth} subtitle={row.theme} />
                <Td text={row.earthStage} />
                <Td text={row.geology} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SectionTableHeroes({ title, data }: { title: string; data: HeroMapping[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead>
            <tr>
              <Th text="Myth" />
              <Th text="Development Stage" />
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

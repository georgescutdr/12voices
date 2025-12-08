// app/gods-to-cosmology/page.tsx
"use client";

import React from "react";

type Mapping = {
  deity: string;
  legendOrConcept: string;
  symbolicMeaning: string;
  quantumPhysicsAnalogy: string;
  cosmologyAnalogy: string;
  notes?: string;
};

const mappings: Mapping[] = [
  {
    deity: "Brahman (ultimate reality)",
    legendOrConcept: "Brahman (the One)",
    symbolicMeaning:
      "Unmanifest unity that underlies all phenomena; source and ground of being.",
    quantumPhysicsAnalogy:
      "Analogy to a unified field or the wavefunction of the universe — an underlying state from which excitations (particles/fields) arise.",
    cosmologyAnalogy:
      "The primordial state before symmetry breaking (pre-inflation or the singular/ground state).",
    notes:
      "Metaphorical — Brahman functions as a philosophical way to speak about a single underlying reality.",
  },
  {
    deity: "Brahmā",
    legendOrConcept: "Creator aspect",
    symbolicMeaning:
      "Archetype of emergence, generation, and the first articulation of form.",
    quantumPhysicsAnalogy:
      "Analogy to spontaneous symmetry breaking or the moment fields acquire distinct excitations (particle creation).",
    cosmologyAnalogy:
      "Creation events such as the Big Bang / reheating that produce particles and structure.",
  },
  {
    deity: "Viṣṇu",
    legendOrConcept: "Preserver, avatars (incarnations)",
    symbolicMeaning:
      "Maintenance of order and cyclical return through adaptations (avatars).",
    quantumPhysicsAnalogy:
      "Stable field configurations (ground states), conserved quantities (symmetries), and mechanisms preserving coherence.",
    cosmologyAnalogy:
      "Phases of the universe where structure is maintained (e.g., long matter-dominated epochs) and cosmological attractors.",
  },
  {
    deity: "Śiva",
    legendOrConcept: "Destroyer / Transformer (Tandava)",
    symbolicMeaning:
      "Destruction that enables regeneration; transformation through dissolution.",
    quantumPhysicsAnalogy:
      "Decoherence, measurement-induced collapse, or dissipative processes that break old configurations enabling new ones.",
    cosmologyAnalogy:
      "Reheating, collapse/merging events, or heat-death as a precursor to new cycles in cyclic cosmologies.",
  },
  {
    deity: "Śakti / Dēvī",
    legendOrConcept: "Primordial feminine energy, dynamic power",
    symbolicMeaning:
      "Active creative energy, the force that animates manifestation.",
    quantumPhysicsAnalogy:
      "Fields and field excitations (energy) that give rise to particles; vacuum energy.",
    cosmologyAnalogy:
      "Inflaton field (driving inflation), dark energy as a pervasive dynamical background.",
  },
  {
    deity: "Māyā",
    legendOrConcept: "Illusion / veiling",
    symbolicMeaning:
      "Perceived multiplicity and appearance that veil underlying unity.",
    quantumPhysicsAnalogy:
      "Apparent randomness in measurement outcomes; observer-dependent aspects (measurement problem / contextuality).",
    cosmologyAnalogy:
      "Horizon effects and observer-dependent cosmological descriptions (what one observer sees vs. another).",
  },
  {
    deity: "Atman",
    legendOrConcept: "Inner self / consciousness",
    symbolicMeaning:
      "Individual essence or witnessing awareness.",
    quantumPhysicsAnalogy:
      "Philosophical parallels with the role of observation and consciousness in interpretations of quantum measurement (speculative).",
    cosmologyAnalogy:
      "Anthropic perspectives and questions about why observers exist to measure the universe.",
    notes:
      "Do not conflate Atman with a settled scientific concept of consciousness — this is a philosophical parallel only.",
  },
  {
    deity: "Samudra Manthan (Churning of the Ocean)",
    legendOrConcept: "Churning to obtain nectar (amṛta)",
    symbolicMeaning:
      "Process of struggle, mixing opposing forces yields something new and valuable.",
    quantumPhysicsAnalogy:
      "Mixing of fields, interactions between competing degrees of freedom; phase transitions producing novel quasiparticles.",
    cosmologyAnalogy:
      "Cosmic phase transitions (e.g., symmetry breaking) that produce new particles and long-range order.",
  },
  {
    deity: "Agni",
    legendOrConcept: "Fire; sacrificial transformer",
    symbolicMeaning:
      "Energy transformation, metabolism, communication between realms.",
    quantumPhysicsAnalogy:
      "Thermal excitations, energy transfer, and dissipative processes (statistical mechanics / thermodynamics).",
    cosmologyAnalogy:
      "Reheating after inflation; thermodynamic processes shaping the early universe.",
  },
  {
    deity: "Kālī / Time (Kāla)",
    legendOrConcept: "Time, dissolution, fierce change",
    symbolicMeaning:
      "Time as consuming and transformative, the agent of mortality and renewal.",
    quantumPhysicsAnalogy:
      "Irreversibility, entropy increase, arrow of time from statistical mechanics.",
    cosmologyAnalogy:
      "Cosmic expansion, entropy growth, and eventual heat-death or cyclic resets.",
  },
  {
    deity: "Rta / Dharma",
    legendOrConcept: "Cosmic order / law",
    symbolicMeaning:
      "Underlying regulative order that maintains balance and regularity.",
    quantumPhysicsAnalogy:
      "Physical laws, conservation laws, and symmetry principles.",
    cosmologyAnalogy:
      "Friedmann equations, conservation of energy-momentum, cosmological principles that govern evolution.",
  },
  {
    deity: "Vishvakarma / Divine Architect",
    legendOrConcept: "Artisan of the cosmos",
    symbolicMeaning:
      "Order, design, and manifest structure of the world.",
    quantumPhysicsAnalogy:
      "Mathematical structure of field theories and the role of symmetries in shaping particle properties.",
    cosmologyAnalogy:
      "Structure formation: the emergence of galaxies, filaments, and large-scale patterns.",
  },
];

export default function HinduismCosmologyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto space-y-8 text-justify">

        {/* HEADER */}
        <header className="space-y-4">
          <h1 className="h1-global">
            Hindu Myth & Legend ↔ Quantum Physics & Cosmology
          </h1>
          <p className="text-lg text-gray-700">
            In Hindu tradition, the stories of gods, goddesses, and cosmic events have served for millennia as symbolic ways to describe the nature of reality, existence, and human experience. Modern science, in parallel, seeks to describe the universe through mathematical, experimental, and conceptual frameworks.
          </p>
          <p className="text-lg text-gray-700">
            In this interpretive mapping, we explore how archetypal deities, myths, and legends can be conceptually associated with principles in quantum physics and cosmology. <strong>These analogies are metaphorical, philosophical, and illustrative, not direct scientific equivalences.</strong>
          </p>
          <p className="text-lg text-gray-700">
            As you navigate the table below, imagine a dialogue between ancient wisdom and modern science — a narrative weaving symbolic meaning, quantum possibilities, and cosmic structures into a unified story.
          </p>
        </header>

        {/* MAIN TABLE */}
        <section>
          <p className="text-gray-700 text-lg mb-6">
            The following table presents select Hindu deities, cosmic concepts, and their metaphorical parallels in modern physics and cosmology. Each row is a small story in itself, connecting ancient archetypes with the language of contemporary science.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Deity / Concept</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Symbolic Meaning</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Quantum Analogy</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Cosmology Analogy</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {mappings.map((m, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-4 align-top">
                      <div className="font-semibold">{m.deity}</div>
                      <div className="text-sm text-gray-500">{m.legendOrConcept}</div>
                    </td>

                    <td className="px-4 py-4 align-top text-sm text-gray-700">{m.symbolicMeaning}</td>

                    <td className="px-4 py-4 align-top text-sm text-gray-700">{m.quantumPhysicsAnalogy}</td>

                    <td className="px-4 py-4 align-top text-sm text-gray-700">{m.cosmologyAnalogy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CONCLUSION / STORY */}
        <section className="mt-12 space-y-4  text-justify">
          <p className="text-gray-700 text-lg">
            By reading the rows sequentially, one can perceive a narrative flow: from the ultimate unity (Brahman) through cycles of creation, preservation, and transformation, to the dynamics of energy, time, and cosmic order. Each myth, while allegorical, resonates with modern scientific concepts, revealing an underlying curiosity shared across centuries about the nature of reality.
          </p>
          <p className="text-gray-700 text-lg">
            Let this table serve as a bridge between storytelling and science, inspiring reflection on how humanity has always sought to understand the cosmos — whether through myths of gods or the equations of physics.
          </p>
        </section>

      </div>
    </main>
  );
}

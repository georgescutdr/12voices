"use client";

import React from "react";

/* ============================================================
   TYPE DEFINITIONS
   ============================================================ */

type Mapping = {
  scripture: string;
  theme: string;
  symbolicMeaning: string;
  quantum: string;
  cosmology: string;
  psychology: string;
  biology: string;
};

type EdenRow = {
  scripture: string;
  meditationVsEgo: string;
  neuronal: string;
  psychological: string;
  biological: string;
};

type JesusRow = {
  event: string;
  psychology: string;
  biology: string;
};

/* ============================================================
   MAIN TESTAMENT TABLE
   ============================================================ */

const mappings: Mapping[] = [
  {
    scripture: "Genesis 1 (Creation)",
    theme: "Creation from chaos",
    symbolicMeaning: "Order emerging from formless potential.",
    quantum: "Vacuum fluctuations → particle structure.",
    cosmology: "Big Bang & matter formation.",
    psychology: "Identity emerging from unconsciousness.",
    biology: "Embryonic differentiation."
  },
  {
    scripture: "Genesis 2–3 (Garden & Fall)",
    theme: "Awakening of self-awareness",
    symbolicMeaning: "From innocence → ego consciousness.",
    quantum: "Observer effect: collapse into separation.",
    cosmology: "Matter/antimatter asymmetry.",
    psychology: "Birth of ego & morality.",
    biology: "Prefrontal cortex development."
  },
  {
    scripture: "Noah’s Flood",
    theme: "Cleansing",
    symbolicMeaning: "Resetting patterns.",
    quantum: "Decoherence reset.",
    cosmology: "Cyclic universe episodes.",
    psychology: "Catharsis & renewal.",
    biology: "Autophagy."
  },
  {
    scripture: "Burning Bush",
    theme: "Awakening",
    symbolicMeaning: "Contact with higher purpose.",
    quantum: "Excitation to higher energy state.",
    cosmology: "High-energy bursts.",
    psychology: "Insight / peak experience.",
    biology: "Neurotransmitter ignition."
  },
  {
    scripture: "Exodus",
    theme: "Liberation",
    symbolicMeaning: "Freedom from inner bondage.",
    quantum: "Quantum tunneling.",
    cosmology: "Structures escaping early density.",
    psychology: "Healing trauma.",
    biology: "Parasympathetic activation."
  },
  {
    scripture: "Crucifixion",
    theme: "Ego death",
    symbolicMeaning: "Dissolution of the small self.",
    quantum: "Collapse of unstable state.",
    cosmology: "Stellar collapse.",
    psychology: "Shadow integration.",
    biology: "Regenerative activation."
  },
  {
    scripture: "Resurrection",
    theme: "Transcendence",
    symbolicMeaning: "New life beyond limitation.",
    quantum: "Re-coherence.",
    cosmology: "New star birth.",
    psychology: "Post-traumatic growth.",
    biology: "Stem-cell-like renewal."
  }
];

/* ============================================================
   GENESIS 7-DAY TABLE
   ============================================================ */

const genesis7: Mapping[] = [
  {
    scripture: "Day 1 — Light",
    theme: "Differentiation",
    symbolicMeaning: "First clarity.",
    quantum: "Photon emergence.",
    cosmology: "Radiation era.",
    psychology: "Insight.",
    biology: "Circadian activation."
  },
  {
    scripture: "Day 2 — Waters separated",
    theme: "Boundaries",
    symbolicMeaning: "Structure emerges.",
    quantum: "Phase separation.",
    cosmology: "Matter zones.",
    psychology: "Self–other boundary.",
    biology: "Cellular membranes."
  },
  {
    scripture: "Day 3 — Land & plants",
    theme: "Stability & growth",
    symbolicMeaning: "Grounding.",
    quantum: "Atomic stability.",
    cosmology: "Planet formation.",
    psychology: "Productivity.",
    biology: "Photosynthesis."
  },
  {
    scripture: "Day 4 — Sun, moon, stars",
    theme: "Cycles",
    symbolicMeaning: "Time & rhythm.",
    quantum: "Oscillatory systems.",
    cosmology: "Stellar cycles.",
    psychology: "Routine.",
    biology: "Clock genes."
  },
  {
    scripture: "Day 5 — Birds & sea creatures",
    theme: "Expansion",
    symbolicMeaning: "Creative diversity.",
    quantum: "Emergent complexity.",
    cosmology: "Cosmic structure.",
    psychology: "Exploration.",
    biology: "Speciation."
  },
  {
    scripture: "Day 6 — Humans",
    theme: "Consciousness",
    symbolicMeaning: "Selfhood.",
    quantum: "Information networks.",
    cosmology: "Life planets.",
    psychology: "Symbolic thought.",
    biology: "Neural systems."
  },
  {
    scripture: "Day 7 — Rest",
    theme: "Integration",
    symbolicMeaning: "Completion.",
    quantum: "Equilibrium.",
    cosmology: "Thermal stability.",
    psychology: "Reflection.",
    biology: "Repair cycles."
  }
];

/* ============================================================
   EDEN TABLE
   ============================================================ */

const edenRows: EdenRow[] = [
  {
    scripture: "God places Adam & Eve in the Garden",
    meditationVsEgo: "Pure awareness — nondual, no inner conflict.",
    neuronal: "Alpha–theta coherence; quiet DMN.",
    psychological: "Peace, presence, innocence.",
    biological: "High vagal tone; serotonin & oxytocin balance."
  },
  {
    scripture: "Command given: 'Do not eat…'",
    meditationVsEgo: "Birth of duality — should vs shouldn’t.",
    neuronal: "Mild PFC activation.",
    psychological: "Emerging moral cognition.",
    biological: "Light cortisol anticipation."
  },
  {
    scripture: "Serpent: 'Did God really say…?'",
    meditationVsEgo: "First doubt — crack in unity.",
    neuronal: "DMN rumination begins.",
    psychological: "Curiosity, insecurity.",
    biological: "Dopamine curiosity spike."
  },
  {
    scripture: "Serpent: 'You will be like God.'",
    meditationVsEgo: "Rise of ego desire — specialness.",
    neuronal: "Reward circuitry activation.",
    psychological: "Ambition, comparison.",
    biological: "Dopamine + norepinephrine."
  },
  {
    scripture: "Eve sees fruit 'pleasing to the eye'",
    meditationVsEgo: "Object craving replaces presence.",
    neuronal: "Visual salience network.",
    psychological: "Attachment, projection.",
    biological: "Sympathetic activation."
  },
  {
    scripture: "Eve eats the fruit",
    meditationVsEgo: "Identification with desire.",
    neuronal: "DMN dominance.",
    psychological: "Ego reinforcement.",
    biological: "Cortisol spike."
  },
  {
    scripture: "Adam eats too",
    meditationVsEgo: "Collective ego.",
    neuronal: "Mirror-neuron coupling.",
    psychological: "Shared guilt, fear.",
    biological: "Adrenaline rises."
  },
  {
    scripture: "They realize they are naked",
    meditationVsEgo: "Birth of shame.",
    neuronal: "Self-referential hyperactivity.",
    psychological: "Self-judgment.",
    biological: "High cortisol; muscle tension."
  },
  {
    scripture: "They hide from God",
    meditationVsEgo: "Avoidance — fragmentation.",
    neuronal: "Amygdala dominance.",
    psychological: "Anxiety.",
    biological: "Fight-or-flight."
  },
  {
    scripture: "God calls: 'Where are you?'",
    meditationVsEgo: "Return of awareness.",
    neuronal: "Attentional networks activate.",
    psychological: "Introspection.",
    biological: "Cortisol begins lowering."
  },
  {
    scripture: "Adam: 'I was afraid… so I hid.'",
    meditationVsEgo: "Full ego state: fear + shame.",
    neuronal: "Fear circuits override logic.",
    psychological: "Insecurity, avoidance.",
    biological: "Low vagal tone."
  },
  {
    scripture: "Expulsion from Eden",
    meditationVsEgo: "Permanent identification with ego.",
    neuronal: "Chronic DMN overactivity.",
    psychological: "Seeking, craving.",
    biological: "Long-term stress patterns."
  }
];

/* ============================================================
   ✅ NEW: JESUS TABLE — 35 EVENTS
   ============================================================ */

const jesusRows: JesusRow[] = [
  { event: "Annunciation", psychology: "Sense of destiny emerging.", biology: "Oxytocin + calm parasympathetic activation." },
  { event: "Birth of Jesus", psychology: "Hope, innocence.", biology: "Serotonin uplift." },
  { event: "Presentation at the Temple", psychology: "Recognition & purpose.", biology: "Dopamine + oxytocin." },
  { event: "Visit of the Magi", psychology: "Value & worthiness.", biology: "Reward system activation." },
  { event: "Flight to Egypt", psychology: "Survival & trust.", biology: "Adrenal modulation." },
  { event: "Childhood in Nazareth", psychology: "Integration & identity formation.", biology: "Stable cortisol rhythms." },
  { event: "Finding in the Temple", psychology: "Awakening intellectual identity.", biology: "Prefrontal sharpening." },
  { event: "Baptism of Jesus", psychology: "Initiation into purpose.", biology: "Catecholamine reset." },
  { event: "40 Days in the Desert", psychology: "Ego dissolution & resilience.", biology: "Fasting-based autophagy." },
  { event: "Temptation by Satan", psychology: "Shadow confrontation.", biology: "Amygdala tests + PFC override." },
  { event: "Calling of the Disciples", psychology: "Belonging & mission.", biology: "Oxytocin bonding circuits." },
  { event: "Wedding at Cana", psychology: "Joy, abundance mindset.", biology: "Dopamine + parasympathetic rest." },
  { event: "Sermon on the Mount", psychology: "Higher moral cognition.", biology: "Serotonin + mirror neuron activation." },
  { event: "Healing the Leper", psychology: "Compassion expanding self-boundary.", biology: "Oxytocin surge." },
  { event: "Healing the Centurion’s Servant", psychology: "Faith beyond tribalism.", biology: "Reduced cortisol through trust." },
  { event: "Calming the Storm", psychology: "Mastery over fear.", biology: "Amygdala quieting." },
  { event: "Feeding the 5000", psychology: "Collective unity experience.", biology: "Endorphin release." },
  { event: "Walking on Water", psychology: "Overcoming limiting beliefs.", biology: "Dopamine + confidence circuits." },
  { event: "Transfiguration", psychology: "Experience of divine identity.", biology: "High gamma brain waves (mystical state)." },
  { event: "Raising of Lazarus", psychology: "Triumph over existential fear.", biology: "Lowered basal cortisol." },
  { event: "Triumphal Entry", psychology: "Collective elevation.", biology: "Group emotional contagion—oxytocin rise." },
  { event: "Cleansing the Temple", psychology: "Righteous assertion of values.", biology: "Adrenaline + clarity." },
  { event: "Last Supper", psychology: "Union & shared identity.", biology: "Serotonin + bonding hormones." },
  { event: "Agony in Gethsemane", psychology: "Facing mortality.", biology: "High cortisol + parasympathetic resistance." },
  { event: "Betrayal by Judas", psychology: "Trust collapse.", biology: "Amygdala spike." },
  { event: "Trial before Pilate", psychology: "Surrender to fate.", biology: "Cortisol plateau, vagal suppression." },
  { event: "Scourging", psychology: "Endurance of suffering.", biology: "Shock, endorphin flooding." },
  { event: "Carrying the Cross", psychology: "Burden acceptance.", biology: "Adrenal + muscular strain response." },
  { event: "Crucifixion", psychology: "Ego death.", biology: "System collapse → final parasympathetic release." },
  { event: "Death on the Cross", psychology: "Total surrender.", biology: "CNS shutdown." },
  { event: "Burial", psychology: "Descent into the unconscious.", biology: "Symbolic metabolic reset." },
  { event: "Resurrection", psychology: "Rebirth & transcendence.", biology: "Regenerative neuromodulation." },
  { event: "Appearance to Mary Magdalene", psychology: "Hope restored.", biology: "Oxytocin rise." },
  { event: "Emmaus Encounter", psychology: "Recognition through presence.", biology: "Theta–gamma coupling." },
  { event: "Ascension", psychology: "Transcendence of form.", biology: "Calm, integrative parasympathetic closure." }
];

/* ============================================================
   PAGE LAYOUT
   ============================================================ */

export default function ChristianityExtendedPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* INTRO */}
        <section className="space-y-4 max-w-4xl">
          <h1 className="h1-global">
            A Symbolic Bridge Between Scripture & Science
          </h1>
        </section>

        <Description text="Explore the timeless narratives of the Old and New Testaments through a lens that bridges spirituality and science. Each story is more than a tale — it’s a map of human consciousness, biological growth, and universal patterns. From creation to resurrection, see how scripture mirrors the unfolding of identity, the emergence of morality, and the physical and psychological systems that shape our lives. This table offers a concise, intuitive view of scripture alongside quantum, cosmological, psychological, and biological interpretations." />
        <SectionTable title="Old & New Testament — Core Parallels" data={mappings} />

        <Description text="Journey through the seven days of creation, not just as a story of the cosmos, but as a reflection of how order and consciousness emerge in our world and in ourselves. Each day represents a stage of differentiation, growth, and integration — from the first spark of light to the completion of rest. By connecting scripture to quantum mechanics, planetary formation, and biological rhythms, this table reveals the deep harmony between the universe and our inner lives." />
        <SectionTable title="Genesis — 7 Days of Creation" data={genesis7} />

        <Description text="Step into the Garden of Eden and witness the delicate interplay between pure awareness and the emerging ego. This table breaks down each moment of the Genesis story, illustrating how meditation versus ego, neuronal patterns, psychological states, and biological responses unfold. From the bliss of innocence to the awakening of self-consciousness and eventual expulsion, experience a layered understanding of how human consciousness evolves, both spiritually and scientifically." />
        <EdenTable title="Adam & Eve — The Fall of Consciousness" data={edenRows} />

        <Description text="Follow the life of Jesus through the intertwined lenses of psychology and biology. Every key event — from the Annunciation to the Ascension — is mapped to emotional, cognitive, and physiological responses, revealing how divine narratives mirror human development, resilience, and transformation. This table helps you see the miracles, teachings, and trials of Jesus not only as spiritual lessons but also as reflections of the mind and body working in harmony with universal principles." />
        <JesusTable title="Life of Jesus — Psychological & Biological Interpretation" data={jesusRows} />

      </div>
    </main>
  );
}

/* ============================================================
   DESCRIPTION COMPONENT
   ============================================================ */

function Description({ text }: { text: string }) {
  return (
    <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
      {text}
    </p>
  );
}

/* ============================================================
   GENERIC TABLE COMPONENT
   ============================================================ */

function SectionTable({ title, data }: { title: string; data: Mapping[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Scripture</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Symbolic</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Quantum</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Cosmology</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Psychology</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Biology</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((m, i) => (
              <tr key={i} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-4">
                  <div className="font-semibold">{m.scripture}</div>
                  <div className="text-gray-500">{m.theme}</div>
                </td>
                <td className="px-4 py-4">{m.symbolicMeaning}</td>
                <td className="px-4 py-4">{m.quantum}</td>
                <td className="px-4 py-4">{m.cosmology}</td>
                <td className="px-4 py-4">{m.psychology}</td>
                <td className="px-4 py-4">{m.biology}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ============================================================
   EDEN TABLE COMPONENT
   ============================================================ */

function EdenTable({ title, data }: { title: string; data: EdenRow[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Scripture Moment</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Meditation vs Ego</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Neuronal State</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Psychological State</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Biological State</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-4 font-semibold">{row.scripture}</td>
                <td className="px-4 py-4">{row.meditationVsEgo}</td>
                <td className="px-4 py-4">{row.neuronal}</td>
                <td className="px-4 py-4">{row.psychological}</td>
                <td className="px-4 py-4">{row.biological}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ============================================================
   ✅ NEW JESUS TABLE COMPONENT
   ============================================================ */

function JesusTable({ title, data }: { title: string; data: JesusRow[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Event</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Psychological Meaning</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Biological Effect</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-4 font-semibold">{row.event}</td>
                <td className="px-4 py-4">{row.psychology}</td>
                <td className="px-4 py-4">{row.biology}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import AnimationConstellations from "../../components/animations/constellations/AnimationConstellations";

const ConstellationsPage: React.FC = () => {
  return (
    <div className="page">

      {/* HERO SECTION */}
      <div className="section-1 text-global">
        
        {/* LEFT SIDE — INTRO TEXT */}
        <div className="left-col">
          <h1 className="h1-global">
            The Constellations & The Soul of the Cosmos
          </h1>
 
          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
            From the dawn of time, humanity looked upward — not just to navigate the seas,
            but to navigate the soul. The constellations are not random clusters of stars;
            they are celestial mirrors of the inner psyche, each one an archetype inscribed
            across eternity. Their patterns trace the divine story of consciousness awakening
            to itself.
          </p>
        </div>

        {/* RIGHT SIDE — CONSTELLATIONS ANIMATION */}
        <div className="right-col">
          <AnimationConstellations />
        </div>
      </div>

      {/* CONSTELLATION DETAILS SECTION */}
      <section className="w-full bg-gray-50 lg:px-16 px-6 sm:px-6 border-b border-gray-200 flex text-justify">
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">

          <h1 className="h1-global">
            The Zodiac Archetypes
          </h1>

          <ul className="text-global">
            <li><strong>♈ Aries —</strong> The Fire of Beginning. Symbol of courage, initiative, and the spark of divine action. Aries awakens the soul to the joy of stepping into new beginnings.</li>
            <li><strong>♉ Taurus —</strong> The Earthly Temple. Embodies stability, devotion, and the sacredness of form and matter. Taurus grounds the spirit and fosters appreciation for beauty and abundance.</li>
            <li><strong>♊ Gemini —</strong> The Celestial Twins. Reflects duality, communication, and the interplay of mind and spirit. Gemini guides the soul to discern, connect, and express its inner truths.</li>
            <li><strong>♋ Cancer —</strong> The Lunar Gate. Guardian of emotion, intuition, and the sanctuary of the heart. Cancer nurtures the soul’s sensitivity, memory, and capacity for empathy.</li>
            <li><strong>♌ Leo —</strong> The Solar King. Radiates creativity, courage, and leadership. Leo inspires the soul to shine authentically and to express its divine will through joy and generosity.</li>
            <li><strong>♍ Virgo —</strong> The Sacred Weaver. Symbolizes discernment, service, and refinement. Virgo teaches the art of mindfulness, healing, and harmonizing details into a higher order.</li>
            <li><strong>♎ Libra —</strong> The Scales of Harmony. Embodies balance, justice, and partnership. Libra illuminates the dance between opposites, fostering fairness, love, and inner equilibrium.</li>
            <li><strong>♏ Scorpio —</strong> The Phoenix Gate. Represents transformation, depth, and spiritual rebirth. Scorpio invites the soul to release the old, dive into mysteries, and emerge renewed.</li>
            <li><strong>♐ Sagittarius —</strong> The Celestial Archer. Symbol of aspiration, wisdom, and expansion. Sagittarius guides the soul on quests for truth, higher knowledge, and freedom of spirit.</li>
            <li><strong>♑ Capricorn —</strong> The Mountain of Mastery. Embodies discipline, perseverance, and responsibility. Capricorn teaches the importance of structure, ambition, and aligning effort with purpose.</li>
            <li><strong>♒ Aquarius —</strong> The Water-Bearer. Represents innovation, vision, and humanitarian consciousness. Aquarius inspires the soul to transcend ego, embrace community, and channel creative insight.</li>
            <li><strong>♓ Pisces —</strong> The Oceanic Dream. Symbolizes compassion, mysticism, and unity. Pisces dissolves boundaries, awakening the soul to the interconnectedness of all life and divine love.</li>
          </ul>
        </div>
      </section>

      {/* COSMIC SUMMARY SECTION */}
      <section className="w-full bg-gray-50 py-16 px-8 lg:px-16 border-b border-gray-200 shadow-inner flex justify-center">
        <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-global">
          <h1 className="h1-global">
            The Sky as a Mirror of the Inner Universe
          </h1>

          <p>
            Each constellation corresponds to a stage of the soul’s journey — from
            awakening in Aries to transcendence in Pisces. Together they compose
            the zodiacal mandala, the wheel of spiritual evolution reflected in the heavens.
          </p>

          <p>
            When contemplated inwardly, the constellations become luminous
            psychological maps. They reveal how divine intelligence expresses
            itself through character, destiny, and the unfolding of the inner cosmos.
          </p>

          <p>
            The night sky is not a distant spectacle — it is a living scripture,
            written in stars and translated by the heart.
          </p>

          <p>
            As above, so within. Every constellation you see is a pattern of
            consciousness reflected in your own being.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConstellationsPage;

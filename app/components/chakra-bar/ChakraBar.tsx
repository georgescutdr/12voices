"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const ChakraBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const chakras = [
    { id: 1, name: "Chakra 1" },
    { id: 2, name: "Chakra 2" },
    { id: 3, name: "Chakra 3" },
    { id: 4, name: "Chakra 4" },
    { id: 5, name: "Chakra 5" },
    { id: 6, name: "Chakra 6" },
    { id: 7, name: "Chakra 7" },
  ];

  const handleNavigate = (id: number) => {
    router.push(`/learning/chakras/chakra${id}`);
  };

  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black py-4 flex flex-wrap justify-center gap-3 shadow-lg border-b border-white/10 sticky top-0 z-50">
      {chakras.map((chakra) => {
        const isActive = pathname.endsWith(`/chakra${chakra.id}`);

        return (
          <button
            key={chakra.id}
            onClick={() => handleNavigate(chakra.id)}
            className={`px-3 py-1 md:px-5 md:py-2 cursor-pointer rounded-full text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase transition-all duration-300
              ${
                isActive
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.6)] scale-105"
                  : "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:text-white hover:scale-105"
              }`}
          >
            {chakra.name}
          </button>
        );
      })}
    </div>
  );
};

export default ChakraBar;

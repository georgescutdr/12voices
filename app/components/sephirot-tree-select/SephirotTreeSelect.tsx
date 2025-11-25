'use client';

import { useEffect, useRef, useState, Suspense } from 'react';

type SephiraId =
  | 'keter'
  | 'chokhmah'
  | 'binah'
  | 'chesed'
  | 'gevurah'
  | 'tiferet'
  | 'daat'
  | 'netzach'
  | 'hod'
  | 'yesod'
  | 'malkuth';

const positions: Record<SephiraId, { x: number; y: number }> = {
  keter: { x: 180, y: 0 },
  chokhmah: { x: 80, y: 80 },
  binah: { x: 280, y: 80 },
  chesed: { x: 80, y: 190 },
  gevurah: { x: 280, y: 190 },
  tiferet: { x: 180, y: 250 },
  daat: { x: 180, y: 130 },
  netzach: { x: 90, y: 310 },
  hod: { x: 280, y: 310 },
  yesod: { x: 180, y: 360 },
  malkuth: { x: 180, y: 520 }
};

const groups = [
  {
    color: '#e74c3c',
    sephirot: ['keter', 'chokhmah', 'binah'] as SephiraId[],
    connections: [
      ['keter', 'chokhmah'],
      ['keter', 'binah'],
      ['chokhmah', 'binah'],
      ['keter', 'tiferet'],
      ['chokhmah', 'tiferet'],
      ['binah', 'tiferet']
    ] as [SephiraId, SephiraId][]
  },
  {
    color: '#3498db',
    sephirot: ['chokhmah', 'chesed', 'tiferet', 'daat'] as SephiraId[],
    connections: [
      ['chokhmah', 'chesed'],
      ['chesed', 'tiferet'],
      ['chesed', 'gevurah'],
      ['chesed', 'netzach'],
      ['gevurah', 'hod'],
      ['chesed', 'daat'],
      ['daat', 'gevurah'],
      ['daat', 'binah'],
      ['daat', 'chokhmah']
    ] as [SephiraId, SephiraId][]
  },
  {
    color: '#9b59b6',
    sephirot: ['binah', 'gevurah', 'tiferet'] as SephiraId[],
    connections: [['binah', 'gevurah'], ['gevurah', 'tiferet']] as [SephiraId, SephiraId][]
  },
  {
    color: '#27ae60',
    sephirot: ['tiferet', 'netzach', 'hod', 'yesod'] as SephiraId[],
    connections: [
      ['tiferet', 'netzach'],
      ['tiferet', 'hod'],
      ['netzach', 'yesod'],
      ['hod', 'yesod'],
      ['hod', 'netzach'],
      ['yesod', 'tiferet']
    ] as [SephiraId, SephiraId][]
  },
  {
    color: '#f39c12',
    sephirot: ['yesod', 'malkuth'] as SephiraId[],
    connections: [
      ['yesod', 'malkuth'],
      ['malkuth', 'netzach'],
      ['malkuth', 'hod']
    ] as [SephiraId, SephiraId][]
  }
];

const sephirotsList: { id: SephiraId; name: string }[] = [
  { id: 'keter', name: 'Keter' },
  { id: 'chokhmah', name: 'Chokhmah' },
  { id: 'binah', name: 'Binah' },
  { id: 'chesed', name: 'Chesed' },
  { id: 'gevurah', name: 'Gevurah' },
  { id: 'tiferet', name: 'Tiferet' },
  { id: 'daat', name: 'Daat' },
  { id: 'netzach', name: 'Netzach' },
  { id: 'hod', name: 'Hod' },
  { id: 'yesod', name: 'Yesod' },
  { id: 'malkuth', name: 'Malkuth' }
];

export default function SephirotTreePage() {
  const [selected, setSelected] = useState<SephiraId | null>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const [ContentComponent, setContentComponent] = useState<React.ComponentType | null>(null);
  const [allContent, setAllContent] = useState<Record<SephiraId, React.ComponentType>>({} as Record<SephiraId, React.ComponentType>);

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Draw connecting lines for large screen tree
  useEffect(() => {
    const tree = treeRef.current;
    if (!tree) return;

    tree.querySelectorAll('.line').forEach(el => el.remove());

    groups.forEach(group => {
      group.connections.forEach(([id1, id2]) => {
        const el1 = tree.querySelector(`#${id1}`) as HTMLElement;
        const el2 = tree.querySelector(`#${id2}`) as HTMLElement;
        if (!el1 || !el2) return;

        const x1 = el1.offsetLeft + 20;
        const y1 = el1.offsetTop + 20;
        const x2 = el2.offsetLeft + 20;
        const y2 = el2.offsetTop + 20;

        const length = Math.hypot(x2 - x1, y2 - y1);
        const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

        const line = document.createElement('div');
        line.className = 'line absolute h-[2px] origin-top-left';
        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.background = group.color;
        line.style.transform = `rotate(${angle}deg)`;

        tree.appendChild(line);
      });
    });
  }, []);

  // Load content for selected Sephira (large screens)
  useEffect(() => {
    if (!selected) {
      setContentComponent(null);
      return;
    }

    const loadComponent = async () => {
      try {
        const comp = await import(
          `@/app/components/sephirot-tree-select/sephirot-content/${capitalize(selected)}Content`
        );
        setContentComponent(() => comp.default);
      } catch {
        setContentComponent(null);
      }
    };

    loadComponent();
  }, [selected]);

  // Preload all content for small screens
  useEffect(() => {
    const loadAll = async () => {
      const result: Record<SephiraId, React.ComponentType> = {} as Record<SephiraId, React.ComponentType>;
      await Promise.all(
        sephirotsList.map(async (s) => {
          try {
            const comp = await import(
              `@/app/components/sephirot-tree-select/sephirot-content/${capitalize(s.id)}Content`
            );
            result[s.id] = comp.default;
          } catch {}
        })
      );
      setAllContent(result);
    };
    loadAll();
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-6">

      {/* Large screens: interactive tree */}
      <div className="w-full md:w-1/2 lg:block hidden bg-white shadow-lg rounded-xl p-4">
        <div ref={treeRef} className="relative w-[400px] h-[600px] mx-auto">
          {groups.flatMap(group =>
            group.sephirot.map(id => (
              <div
                key={id}
                id={id}
                onClick={() => setSelected(id)}
                className="absolute w-10 h-10 rounded-full border-4 flex items-center justify-center font-bold text-white cursor-pointer hover:scale-110 transition-transform"
                style={{
                  left: `${positions[id].x}px`,
                  top: `${positions[id].y}px`,
                  borderColor: group.color,
                  backgroundColor: group.color
                }}
              >
                <span className="absolute top-11 text-xs text-gray-800 whitespace-nowrap">
                  {capitalize(id)}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Large screens: selected content */}
      <div className="w-full md:w-1/2 lg:block hidden bg-white shadow-lg rounded-xl p-6 flex flex-col justify-center min-h-[400px]">
        {ContentComponent ? (
          <Suspense fallback={<p>Loading content...</p>}>
            <ContentComponent />
          </Suspense>
        ) : (
          <p className="text-gray-500">Click on a Sephira to view its content.</p>
        )}
      </div>

      {/* Small screens: list all Sephirots with content */}
      <div className="w-full lg:hidden flex flex-col gap-6">
        {sephirotsList.map((s) => {
          const Component = allContent[s.id];
          return (
            <div key={s.id} className="bg-white shadow-lg rounded-xl p-4">
              <Suspense fallback={<p>Loading...</p>}>
                {Component ? <Component /> : <p className="text-gray-500">Content not available.</p>}
              </Suspense>
            </div>
          );
        })}
      </div>

    </div>
  );
}

import Chakras from '../../components/animations/chakras/Chakras';
import ChakraBar from '../../components/chakra-bar/ChakraBar';

export default function ChakrasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* === CHAKRA NAVIGATION BAR === */}
        <ChakraBar />
        
      <div className="flex h-screen w-full">
        <div className="w-1/2 bg-black relative">
          <Chakras />
        </div>
        <div className="w-1/2 bg-white flex flex-col justify-center items-start p-8">
          <h1 className="text-4xl font-bold text-black">The Chakras</h1>
          <p className="text-lg text-gray-700 mt-2">
          	The chakras are rotating wheels that produce fields which connect to different layers of the Universe.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The health of the chakras determine the health of the fields sorrounding us</li>
            <li>The chakras can be activated by inhaling/exhaling energy within them, by enveloping them in spinning merkabas and Metatron's Cubes, or just by visualizing energy flowing through them</li>
            <li>The chakras can be amplified using any energy: light and dark, the 5 elements, the energy of the stars and galaxies, or any other</li>
            <li>Chakras can be blocked simply by emitting opinions towards others, making the wheels to instantly send threads of energy towards the persons we are thinking about</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

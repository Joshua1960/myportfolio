// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Yellowchair from "../assets/chair-yellow.png";
// import Bluechair from "../assets/chair-blue.png";
// import Greenchair from "../assets/chair-green.png";
// import Luxurychair from "../assets/luxurychair.png";

// const chairs = {
//   yellow: {
//     label: "Modern Wooden Furniture",
//     image: Yellowchair,
//     color: "#B38F2F",
//   },
//   blue: {
//     label: "Modern Texture Sofa",
//     image: Bluechair,
//     color: "#73BFC9",
//   },
//   green: {
//     label: "Green Wooden Chair",
//     image: Greenchair,
//     color: "#A3C46D",
//   },
// };

// export default function ChairShowcase() {
//   const [selected, setSelected] = useState("yellow");

//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* Header */}
//       <div className="p-4 text-center text-xs uppercase tracking-widest text-gray-500">
//         Free shipping on orders $55 and over
//       </div>

//       {/* Main content */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 px-8 py-12 gap-12 items-center">
//         {/* Left Section */}
//         <div>
//           <h4 className="text-sm font-semibold text-pink-400 mb-2">
//             100% QUALITY, 100% SATISFACTION
//           </h4>
//           <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
//             Sit With Luxury & Comfort
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Living Room Chairs sales ends in 2 days. Lorem ipsum dolor sit amet
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <div className="text-xl font-bold text-gray-800 mb-2">Start from</div>
//           <div className="text-2xl font-bold mb-4">99.00$</div>
//           <button className="bg-gray-900 text-white px-6 py-3 rounded shadow">
//             Shop Now
//           </button>

//           <div className="mt-10 flex items-center space-x-4">
//             <span className="text-gray-600">Popular Shades:</span>
//             {Object.entries(chairs).map(([key, { color }]) => (
//               <button
//                 key={key}
//                 onClick={() => setSelected(key)}
//                 className={`w-6 h-6 rounded-full border-2 ${
//                   selected === key ? "border-black" : "border-transparent"
//                 }`}
//                 style={{ backgroundColor: color }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={selected}
//               src={chairs[selected].image}
//               alt="Chair"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.4 }}
//               className="w-full max-w-md mx-auto"
//             />
//           </AnimatePresence>

//           <div className="absolute top-1/4 right-0 transform translate-x-20 space-y-6">
//             {Object.entries(chairs).map(([key, { label, image }]) => (
//               <div
//                 key={key}
//                 className={`flex items-center space-x-2 cursor-pointer ${
//                   selected === key ? "opacity-100" : "opacity-60"
//                 }`}
//                 onClick={() => setSelected(key)}
//               >
//                 <img
//                   src={image}
//                   alt={label}
//                   className="w-12 h-12 object-contain rounded"
//                 />
//                 <span className="text-sm text-gray-700 w-28">{label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="bg-green-950 text-white px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//         <div className="flex space-x-6 items-start">
//           <img
//             src={Luxurychair}
//             alt="Luxury Lounge Chair"
//             className="w-70 h-70 object-cover"
//           />
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Luxury Lounge Chair</h3>
//             <p className="text-sm text-gray-300 mb-2">
//               Hand thrown using grogged black clay. The interior is glazed in a
//               shiny white while the exterior is unglazed porcelain slip.
//             </p>
//             <span className="text-xs text-gray-400 italic">
//               - Christina. M
//             </span>
//           </div>
//         </div>
//         <div className="text-right space-y-3">
//           <div className="text-lg font-semibold">More Awesome Reviews</div>
//           <div className="flex justify-end space-x-2">
//             <img
//               src="https://randomuser.me/api/portraits/women/1.jpg"
//               alt="User"
//               className="w-8 h-8 rounded-full border-2 border-white"
//             />
//             <img
//               src="https://randomuser.me/api/portraits/men/2.jpg"
//               alt="User"
//               className="w-8 h-8 rounded-full border-2 border-white"
//             />
//             <img
//               src="https://randomuser.me/api/portraits/women/3.jpg"
//               alt="User"
//               className="w-8 h-8 rounded-full border-2 border-white"
//             />
//             <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
//               15+
//             </div>
//           </div>
//           <div className="flex justify-end text-sm gap-6 text-gray-300 pt-4">
//             <div>
//               <div className="font-bold text-white text-lg">10k+</div>
//               Satisfied Clients
//             </div>
//             <div>
//               <div className="font-bold text-white text-lg">419</div>
//               Total Products
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


<div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 w-6 h-6" />
              <span className="text-white text-lg">Joeljoshua1960@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-400 w-6 h-6" />
              <span className="text-white text-lg">+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-yellow-400 w-6 h-6" />
              <span className="text-white text-lg">Lagos, Nigeria</span>
            </div>
          </div>
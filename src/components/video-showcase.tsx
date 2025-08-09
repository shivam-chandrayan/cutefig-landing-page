// "use client";

// import type React from "react";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import {
//   Scissors,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   RefreshCw,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Sample video data
// const videoData = [
//   {
//     id: 1,
//     title: "The Floral Collection",
//     subtitle: "2023 • Hand-embroidered • 3 styles",
//     category: "Making Of",
//     imageSrc: "/tote-bags/vid1.png",
//   },
//   {
//     id: 2,
//     title: "Canvas Essentials",
//     subtitle: "2023 • Eco-friendly • 5 styles",
//     category: "Tutorial",
//     imageSrc: "/tote-bags/vid1.png",
//   },
//   {
//     id: 3,
//     title: "Leather Handle Series",
//     subtitle: "2022 • Premium • 2 styles",
//     category: "Making Of",
//     imageSrc: "/tote-bags/vid1.png",
//   },
//   {
//     id: 4,
//     title: "Pattern Design Process",
//     subtitle: "2023 • Custom • 4 styles",
//     category: "Behind the Scenes",
//     imageSrc: "/tote-bags/vid1.png",
//   },
//   {
//     id: 5,
//     title: "Eco-Friendly Collection",
//     subtitle: "2023 • Sustainable • 6 styles",
//     category: "New Release",
//     imageSrc: "/tote-bags/vid1.png",
//   },
//   {
//     id: 6,
//     title: "Summer Totes",
//     subtitle: "2023 • Seasonal • 4 styles",
//     category: "Featured",
//     imageSrc: "/tote-bags/vid1.png",
//   },
//   {
//     id: 7,
//     title: "Artisan Techniques",
//     subtitle: "2022 • Masterclass • 3 videos",
//     category: "Tutorial",
//     imageSrc: "/tote-bags/vid1.png",
//   },
// ];

// export default function VideoShowcase() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [touchStart, setTouchStart] = useState(0);
//   const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Function to get the video position class based on its index relative to active
//   const getPositionClass = (index: number) => {
//     const totalVideos = videoData.length;
//     const normalizedIndex = (index - activeIndex + totalVideos) % totalVideos;

//     switch (normalizedIndex) {
//       case 0: // Center (featured)
//         return "z-30 transform scale-110 transition-all duration-300 w-[280px] opacity-100";
//       case 1: // Right 1
//         return "absolute right-[calc(50%-380px)] z-20 transform rotate-6 opacity-75 grayscale w-[250px] transition-all duration-300";
//       case 2: // Right 2
//         return "absolute right-[calc(50%-580px)] z-10 transform rotate-12 opacity-60 grayscale w-[250px] transition-all duration-300";
//       case totalVideos - 1: // Left 1
//         return "absolute left-[calc(50%-380px)] z-20 transform -rotate-6 opacity-75 grayscale w-[250px] transition-all duration-300";
//       case totalVideos - 2: // Left 2
//         return "absolute left-[calc(50%-580px)] z-10 transform -rotate-12 opacity-60 grayscale w-[250px] transition-all duration-300";
//       default:
//         return "hidden";
//     }
//   };

//   // Handle next/previous navigation
//   const goToNext = () => {
//     setActiveIndex((prev) => (prev + 1) % videoData.length);
//   };

//   const goToPrevious = () => {
//     setActiveIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
//   };

//   // Handle random shuffle
//   const shuffleVideos = () => {
//     const randomIndex = Math.floor(Math.random() * videoData.length);
//     setActiveIndex(randomIndex);
//   };

//   // Toggle auto-play
//   const toggleAutoPlay = () => {
//     setIsAutoPlaying((prev) => !prev);
//   };

//   // Handle touch events for swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.touches[0].clientX);
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     const touchEnd = e.changedTouches[0].clientX;
//     const diff = touchStart - touchEnd;

//     // If the swipe is significant enough (more than 50px)
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         // Swipe left, go next
//         goToNext();
//       } else {
//         // Swipe right, go previous
//         goToPrevious();
//       }
//     }
//   };

//   // Set up auto-play timer
//   useEffect(() => {
//     if (isAutoPlaying) {
//       autoPlayTimerRef.current = setInterval(() => {
//         goToNext();
//       }, 3000); // Change every 3 seconds
//     } else if (autoPlayTimerRef.current) {
//       clearInterval(autoPlayTimerRef.current);
//     }

//     return () => {
//       if (autoPlayTimerRef.current) {
//         clearInterval(autoPlayTimerRef.current);
//       }
//     };
//   }, [isAutoPlaying]);

//   return (
//     <div className="pt-40 bg-gray-50">
//       <div className="container mx-auto">
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-6xl font-semibold">The Process/Art/BTS</h2>
//           {/* <p className="text-gray-600 text-lg font-extralight">
//             See our artisans at work and discover the stories behind our
//             handcrafted tote bags.
//           </p> */}

//           {/* <div className="flex flex-wrap justify-center gap-3 mt-8">
//             <button className="bg-rose-500 text-white px-6 py-2 rounded-full text-sm font-medium">
//               Popular
//             </button>
//             <button className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
//               Latest
//             </button>
//             <button className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
//               Top Rated
//             </button>
//             <button className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
//               Behind the Scenes
//             </button>
//           </div> */}
//         </div>

//         <div
//           ref={containerRef}
//           className="relative h-[600px] flex items-center justify-center mt-4"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           {videoData.map((video, index) => (
//             <div
//               key={video.id}
//               className={`${getPositionClass(index)} ${
//                 index === activeIndex ? "cursor-pointer" : "cursor-pointer"
//               }`}
//               onClick={() => index !== activeIndex && setActiveIndex(index)}
//             >
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] bg-rose-100">
//                 {/* <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
//                   <span>{video.category}</span>
//                 </div> */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
//                     <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-white ml-1"
//                       >
//                         <polygon points="5 3 19 12 5 21 5 3"></polygon>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <Image
//                   src={video.imageSrc || "/placeholder.svg"}
//                   alt={video.title}
//                   width={index === activeIndex ? 280 : 250}
//                   height={index === activeIndex ? 500 : 450}
//                   className="h-full w-full object-cover"
//                 />

//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
//                   <h3 className="font-bold text-xl">{video.title}</h3>
//                   <p className="text-sm opacity-90 mt-1">{video.subtitle}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Video navigation controls */}
//           {/* <div className="absolute bottom-[-70px] left-0 right-0 flex justify-center items-center gap-4">
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full h-10 w-10"
//               onClick={goToPrevious}
//             >
//               <ChevronLeft className="h-5 w-5" />
//               <span className="sr-only">Previous video</span>
//             </Button>

//             <Button
//               variant="outline"
//               size="icon"
//               className={`rounded-full h-10 w-10 ${
//                 isAutoPlaying ? "bg-rose-100 text-rose-600" : ""
//               }`}
//               onClick={toggleAutoPlay}
//             >
//               {isAutoPlaying ? (
//                 <Pause className="h-5 w-5" />
//               ) : (
//                 <Play className="h-5 w-5" />
//               )}
//               <span className="sr-only">
//                 {isAutoPlaying ? "Pause auto-shuffle" : "Start auto-shuffle"}
//               </span>
//             </Button>

//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full h-10 w-10"
//               onClick={shuffleVideos}
//             >
//               <RefreshCw className="h-5 w-5" />
//               <span className="sr-only">Shuffle videos</span>
//             </Button>

//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full h-10 w-10"
//               onClick={goToNext}
//             >
//               <ChevronRight className="h-5 w-5" />
//               <span className="sr-only">Next video</span>
//             </Button>
//           </div> */}

//           {/* Auto-shuffle indicator */}
//           {/* {isAutoPlaying && (
//             <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center">
//               <div className="bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full">
//                 Auto-shuffling every 3 seconds
//               </div>
//             </div>
//           )} */}

//           {/* Swipe instruction for mobile */}
//           <div className="absolute top-[-30px] left-0 right-0 text-center text-sm text-gray-500 md:hidden">
//             Swipe to browse videos
//           </div>
//         </div>

//         {/* <div className="text-center">
//           <Button variant="outline" size="lg" className="mt-16">
//             View All Videos
//           </Button>
//         </div> */}
//       </div>
//     </div>
//   );
// }

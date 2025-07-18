"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface InfiniteScrollGalleryProps {
  imagesColumn1: ImageItem[];
  imagesColumn2: ImageItem[];
  column1Speed?: number;
  column2Speed?: number;
}

export default function InfiniteScrollGallery({
  imagesColumn1,
  imagesColumn2,
  column1Speed = 30, // seconds for one full loop
  column2Speed = 40, // seconds for one full loop (different speed creates interesting effect)
}: InfiniteScrollGalleryProps) {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set CSS variables for animation speeds
    if (column1Ref.current) {
      column1Ref.current.style.setProperty(
        "--scroll-speed",
        `${column1Speed}s`
      );
    }
    if (column2Ref.current) {
      column2Ref.current.style.setProperty(
        "--scroll-speed",
        `${column2Speed}s`
      );
    }
  }, [column1Speed, column2Speed]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* First column - scrolls down */}
      <div className="absolute left-0 w-[48%] h-full overflow-hidden">
        <div
          ref={column1Ref}
          className="animate-scroll-down"
          style={{
            animationDuration: "var(--scroll-speed)",
          }}
        >
          {/* Double the images to create seamless loop */}
          {[...imagesColumn1, ...imagesColumn1].map((image, index) => (
            <div
              key={`col1-${index}`}
              className="mb-4 rounded-2xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second column - scrolls up */}
      <div className="absolute right-0 w-[48%] h-full overflow-hidden">
        <div
          ref={column2Ref}
          className="animate-scroll-up"
          style={{
            animationDuration: "var(--scroll-speed)",
          }}
        >
          {/* Double the images to create seamless loop */}
          {[...imagesColumn2, ...imagesColumn2].map((image, index) => (
            <div
              key={`col2-${index}`}
              className="mb-4 rounded-2xl overflow-hidden"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

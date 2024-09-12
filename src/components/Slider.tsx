"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the type for each item in the menu
interface MenuItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  main: string;
  image1: string;
  image2: string;
  image3: string;
  combine: string[];
}

// Define the props for the Slider component
interface SliderProps {
  items: MenuItem[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden mt-2 ">
      <div
        className="flex transition-transform duration-500  ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="p-2 flex-shrink-0 w-full bg-whtie sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4"
          >
            <div className="flex flex-col justify-center hover:bg-gray-50 text-center shadow-lg bg-white p-4 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="h-80 w-full object-cover"
                src={item.main}
                alt={item.title} />

              <p className="font-sans text-lg sm:text-xl font-normal hover:font-semibold text-black mt-2">
                {item.title}
              </p>
              <Link
                href={{
                  pathname: "/buyout",
                  query: { id: item.id },
                }}  
              >
                <Button
                  variant="outline"
                  className="bg-white text-black hover:text-white hover:bg-black hover:font-bold focus:bg-white focus:text-black focus:shadow-outline mt-2 mb-1 w-full"
                >
                  Have a Look
                </Button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full focus:outline-none z-10"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full focus:outline-none z-10"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Slider;

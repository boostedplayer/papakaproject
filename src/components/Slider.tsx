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
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="p-2 flex-shrink-0 w-1/4">
            <div className="flex flex-col justify-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="h-[17rem] w-full object-cover rounded-lg"
                src={item.main}
                alt={item.title}
              />
              <p className="font-sans text-xl hover:font-medium text-black mt-2">
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
                  className="bg-black text-white focus:bg-white focus:text-black focus:shadow-outline mt-2 mb-1 w-full"
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
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Slider;

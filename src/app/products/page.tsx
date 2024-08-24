"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import menu from "@/data/menu.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1)
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
                  query: {
                    id: item.id,
                  },
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

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="box-content flex flex-col justify-center bg-gray-200">
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold  ml-5 mt-3">
              Menu's Never Seen Before
            </p>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold  ml-5 mt-3">
              Butter Papers on Your Food
            </p>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold  ml-5 mt-3">
              Burger Boxes Explore the Unseen
            </p>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold  ml-5 mt-3">
              Carry Bags That our Just Made for You
            </p>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import menu from "@/data/menu.json";
import Slider from "@/components/Slider";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="box-content flex flex-col justify-center bg-gray-200">
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold ml-5 mt-3">
              Menu's Never Seen Before
            </p>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold ml-5 mt-3">
              Butter Papers on Your Food
            </p>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold ml-5 mt-3">
              Burger Boxes Explore the Unseen
            </p>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 rounded-t-xl">
          <div className="flex justify-left bg-white h-[2.5rem] rounded-t-xl">
            <p className="font-monospace tracking-wide text-2xl text-gray-800 subpixel-antialiased font-bold ml-5 mt-3">
              Carry Bags That are Just Made for You
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
};

export default Products;


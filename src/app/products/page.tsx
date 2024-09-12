

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
      <div className="box-content flex flex-col justify-center bg-gray-200/50">

        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 shadow-md rounded-t-3xl">
          <div className="flex justify-center rounded-t-xl h-[2.5rem]">
            <h1 className="font-['Apple Color Emoji'] tracking-wide text-4xl text-gray-700 subpixel-antialiase font-bold hover:font-black ml-5 mt-2">
              Menus Never Seen Before
            </h1> 
          </div>
          <div className="relative mt-2 bg-white">
            <Slider items={menu.menus}/>
          </div>
        </div>

        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 shadow-md rounded-t-3xl">
          <div className="flex justify-center rounded-t-xl h-[2.5rem]">
            <h1 className="font-['Apple Color Emoji'] tracking-wide text-4xl text-gray-700 subpixel-antialiase font-bold hover:font-black ml-5 mt-2">
              Butter Papers For The Food
            </h1>
          </div>
          <div className="relative mt-2 bg-white">
            <Slider items={menu.butterpaper} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 shadow-md rounded-t-3xl">
          <div className="flex justify-center rounded-t-xl h-[2.5rem]">
            <h1 className="font-['Apple Color Emoji'] tracking-wide text-4xl text-gray-700 subpixel-antialiase font-bold hover:font-black ml-5 mt-2">
              Carry Bags That are Just Made for You
            </h1>
          </div>
          <div className="relative mt-2">
            <Slider items={menu.menus} />
          </div>
        </div>
        <div className="container mx-auto bg-white mt-5 mb-5 ml-10 mr-10 shadow-md rounded-t-3xl">
          <div className="flex justify-center rounded-t-xl h-[2.5rem]">
            <h1 className="font-['Apple Color Emoji'] tracking-wide text-4xl text-gray-700 subpixel-antialiase font-bold hover:font-black ml-5 mt-2">
            Burger Boxes Explore the Unseen
     
            </h1>
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


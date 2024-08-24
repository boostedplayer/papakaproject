// app/buyout/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import menu from "@/data/menu.json";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SyncedSliders from "@/components/SyncedSliders";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import { Button } from "@/components/ui/button";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Make sure to use a React suspense boundary around your component
const BuyoutContent = () => {
  const params = useSearchParams();
  const id = params.get("id");
  console.log(id);

  const x = menu.menus.filter((menus) => menus.id === Number(id));

  const slider1Ref = useRef<Slider | null>(null);
  const slider2Ref = useRef<Slider | null>(null);

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: slider2Ref.current ?? undefined,
    className: 'main-slider',
  };

  const navSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    asNavFor: slider1Ref.current ?? undefined,
    className: 'nav-slider',
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div className='flex flex-col justify-center text-black h-full m-2'>
          {x.map((x, keys) => (
            <div key={keys} className='flex flex-col md:flex-row justify-evenly rounded-md m-10'>
              <div className='flex justify-center '>
                <div className='flex h-64 md:h-72 lg:h-[30rem] w-[20rem] md:w-[25rem] xl:w-[40rem] justify-center md:justify-center shrink-0 bg-white'>
                  <SyncedSliders images={x.combine} />
                </div>
              </div>
              <div className='flex flex-col overflow-visible md:w-[250px] lg:w-[320px] xl:w-[400px] justify-start mt-3 border-b-2 border-gray-200 ml-5 lg:ml-16 lg:mr-12'>
                <div className='text-left font-["Exo 2"] intend-4 flex sm:w-[550px] md:w-[250px] lg:w-[320px] xl:w-[400px] divide-y align-top mt-2 mb-2'>
                  <h1 className=" text-medium md:text-base text-black font-normal tracking-tight ">
                    {x.slug}
                  </h1>
                </div>
                <div className='w-[270px] flex sm:w-[550px] md:w-[250px] lg:w-[320px] xl:w-[400px]text-left mt-2  border-b-2 border-gray-200  '>
                  <p className='font-sans text-xs text-gray-600 mb-2'> ✔ Customization available</p>
                </div>
                <div className='mt-2 mb-2 md:w-[250px] lg:w-[300px]'>
                  <p className='text-xs text-gray-800 font-sans'>LEATHER COLOR*</p>
                  <Select>
                    <SelectTrigger className="md:w-[250px] lg:w-[300px] shadow hover:shadow-md hover:font-medium">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='mt-2 mb-2  md:w-[250px] lg:w-[300px]'>
                  <p className='text-xs text-gray-800 font-sans'>MENU SIZE*</p>
                  <Select>
                    <SelectTrigger className="md:w-[250px] lg:w-[300px] shadow hover:shadow-md hover:font-medium">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex justify-center sm:justify-start mt-8 border-b-2 border-gray-200 md:w-[250px] lg:w-[320px] xl:w-[400px]'>
                  <Link href="/contact">
                    <Button variant="outline" className='w-[300px] sm:w-[540px] md:w-[250px] lg:w-[320px] xl:w-[400px] text-white bg-black hover:bg-white hover:text-black mb-8'>
                      For Personalization & Enquiry
                    </Button>
                  </Link>
                </div>
                <div className="md:w-[250px] lg:w-[320px] xl:w-[400px]">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Product Details:</AccordionTrigger>
                      <AccordionContent>
                        {x.description}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="md:w-[250px] lg:w-[320px] xl:w-[400px]">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>FAQs</AccordionTrigger>
                      <AccordionContent>
                        {/* FAQs content here */}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

// Use Suspense wrapper in the default export
export default function BuyoutPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BuyoutContent />
    </React.Suspense>
  );
}

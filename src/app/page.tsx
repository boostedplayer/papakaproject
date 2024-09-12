import React from 'react'
import Link from "next/link";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer';
import { ImagesSliderDemo } from '@/components/ImageSlider';


export default function Home() {
  
    return (
         <>
        <div className='bg-white'>
        <Navbar/>
        <div className='m-10'>
        <ImagesSliderDemo/>
        </div>
        <div className='flex flex-col ml-10 mr-10'>
            
        <img className="w-[1400px] h-[500px] mb-5 "src="/backimg1.png"></img>
        <img className="w-[1400px] h-[500px] mb-5 "src="/backimg3.jpg"></img>
        <img className="w-[1400px] h-[500px] mb-5"src="/backimg2.png"></img>
       
        </div>
        <Footer/>
        </div>
        </>
    );
}
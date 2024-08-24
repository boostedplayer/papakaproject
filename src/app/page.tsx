import React from 'react'
import Link from "next/link";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer';
import { ImagesSliderDemo } from '@/components/ImageSlider';


export default function Home() {
  
    return (
         <>
        <Navbar/>
        <ImagesSliderDemo/>
        <Footer/>
        </>
    );
}
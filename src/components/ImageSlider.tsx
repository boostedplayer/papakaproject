"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ImagesSliderProps {
  className?: string;
  images: string[];
}

export function ImagesSliderDemo({ className, images }: ImagesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadImages = () => {
    // Logic to load images
  };

  useEffect(() => {
    loadImages();
    // Adding loadImages to dependency array
  }, [loadImages]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const autoplay = true;

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(handleNext, 3000);
      return () => clearInterval(intervalId);
    }
  }, [autoplay, handleNext, handlePrevious]);

  return (
    <div className={className}>
      {/* Slider implementation */}
    </div>
  );
}

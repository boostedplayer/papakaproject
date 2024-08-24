// components/SyncedSliders.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SyncedSliders = ({ images }) => {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);

  const mainSliderSettings = {
    asNavFor: thumbSlider,
    ref: slider => setMainSlider(slider),
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  const thumbSliderSettings = {
    asNavFor: mainSlider,
    ref: slider => setThumbSlider(slider),
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: true,
        },
      },
    ],
  };

  return (
    <div className="flex md:flex-row items-start">
       <div className="flex justify-center mt-1 h-[15rem] w-[5rem] sm:h-[18rem] sm:w-[6rem] md:h-[18rem] lg:h-[30rem] lg:w-[7rem] xl:w-[10rem] sm:ml-5 mr-2 sm:mr-8">
        <Slider {...thumbSliderSettings} className="flex m-1  h-[4.5rem] w-[5rem]  sm:h-[5rem] sm:w-[5rem]  lg:h-[9rem] lg:w-[7rem] xl:h-[9.5rem]  xl:w-[10rem]">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center px-1">
              <img
                src={image}
                alt={`Thumbnail image ${index + 1}`}
                className=" h-[4.5rem] w-[5rem] sm:h-[5rem] sm:w-[5rem] lg:h-[9rem] lg:w-[7rem] xl:h-[9.5rem]  xl:w-[10rem] object-cover cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" mt-2 sm:mt-0 h-[15rem] w-[13rem] sm:h-[16rem] sm:w-[18rem] md:h-[18rem] lg:h-[30rem] md:w-[15rem] lg:w-[25rem] xl:w-[30rem] xl:ml-5 sm:mr-5">
        <Slider {...mainSliderSettings} className="  h-[15rem] w-[13rem]  sm:h-[16rem] sm:w-[18rem] md:h-[18rem] lg:h-[30rem] md:w-[15rem] lg:w-[25rem] xl:w-[30rem]">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className=" h-[15rem] w-[13rem] sm:h-[16rem] sm:w-[18rem]  md:h-[18rem]  lg:h-[30rem] md:w-[15rem] lg:w-[25rem] xl:w-[30rem] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
     
    </div>
  );
};

export default SyncedSliders;

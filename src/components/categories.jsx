import { categories } from "../../data";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HashLink } from "react-router-hash-link";

const Categories = () => {
  const [sliderRef] = useKeenSlider({
    // mode: "free",
    breakpoints: {
      "(min-width: 200px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 400px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 1000px)": {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
    },

  })

  return (
    <nav ref={sliderRef} className="keen-slider mt-6">
      {categories.map((category, index) => (
        <HashLink smooth to={`/#${category}`}
          key={index}
          className="bg-categoresBgColor flex items-center justify-center font-medium cursor-pointer text-base rounded-lg py-3 keen-slider__slide number-slide1 w-[100%] list"
          onClick={() => window.location.replace(`/#${category}`)}
        >
          {category}
        </HashLink>
      ))}
    </nav>
  );
};

export default Categories;

import Caraousel from "../components/caraousel";
import React from "react";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const socialNames = [
  {
    name: "Facebook",
    bgColor: "#4366B2"
  },
  {
    name: "Instagram",
    bgColor: "#BC2B8C"
  },
  {
    name: "You Tube",
    bgColor: "#FE0100"
  },
  {
    name: "Twitter",
    bgColor: "#00DAEF"
  },
  {
    name: "Linkedin",
    bgColor: "#0F77A8"
  },
]
const About = () => {
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
    <div>
      <Caraousel />
      <Separator />
      <div className="mb-6">
        <div>
          <p className="font-bold mb-2 mt-4"> Timings:</p>
          <p className="mb-4">07:00 - 20:00</p>
        </div>
        <div>
          <p className="font-bold mb-2 mt-4"> Address:</p>
          <p className="mb-4">
            2nd Floor, Arogya Soudha Opposite Kulshekar Post Office Kulshekar
            Mangaluru Karnataka India - 575001
          </p>
        </div>
        <div>
          <p className="font-bold mb-2 mt-4"> Phone:</p>
          <a href="tel:+918197628777" className="mb-4 underline">
            +918197628777
          </a>
        </div>
        <div>
          <p className="font-bold mb-2 mt-4"> Whatsapp:</p>
          <a
            target="_blank"
            href="https://wa.me/918762582739"
            className="mb-4 underline"
          >
            918762582739
          </a>
        </div>
      </div>
      <Separator />
      <div ref={sliderRef} className="keen-slider my-6">
        {socialNames.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor }}
            className="rounded-lg text-white py-3 keen-slider__slide list"
          >
            {item.name}
          </div>
        ))}
      </div>
      <Separator />
      <div className="mb-8">
        <div>
          <p className="font-bold mb-2 mt-4"> Services:</p>
          <p className="mb-4">Dine-in, Takeaway, Delivery</p>
        </div>
        <div>
          <p className="font-bold mb-2 mt-4"> Cuisines:</p>
          <p className="mb-8">
            South Indian Vegetarian, North Indian Vegetarian
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

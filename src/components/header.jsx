import React from "react";
import restaurantLogo from "../assets/logo.jpg";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <div>
      <div className="flex mb-4 mt-2">
        <div>
          <h1 className="font-bold sm:text-2xl text-xl">
            Demo Restaurant
          </h1>
          <p className="mt-0 mb-0 sm:text-base text-sm font-normal">
            Multi cuisine restaurant situated in the heart of the city
          </p>
        </div>
        <div className="max-w-16 h-auto pl-4 pt-2 ml-auto">
          <img src={restaurantLogo} alt="Restaurant Logo" />
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Header;

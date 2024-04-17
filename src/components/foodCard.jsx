import React, { useState } from "react";
import { Button } from "./ui/button";
import vegLogo from "/assets/veg.svg";
import nonVegLogo from "/assets/non-veg.svg";
import { useCart } from "@/state-manager/cart-store";
import { Minus, Plus } from "lucide-react";
const FoodCard = ({ food }) => {
  const { cartItems, addToCart, removeFromCart } = useCart(); // Use the useCart hook

  // Check if the current food item is already in the cart
  const isInCart = cartItems.some((item) => item.id === food.id);
  const item = cartItems.find((item) => item.id === food.id);

  const [quantity, setQuantity] = useState(item ? item?.quantity : 0);

  // Function to handle adding the food item to the cart
  const handleAddToCart = () => {
    addToCart(food); // Add the food item along with its quantity to the cart
    setQuantity(quantity + 1);
  };

  const handleRemoveCart = () => {
    removeFromCart(food.id);
    setQuantity(quantity - 1);
  };
  return (
    <div className="bg-foodCardBgColor rounded-lg px-4 py-4 flex items-center pb-8 ">
      <div className="w-[60%] flex flex-col gap-y-2">
        {food.tag === "Veg" ? (
          <img className="max-w-[16px]" src={vegLogo} />
        ) : (
          <img className="max-w-[16px]" src={nonVegLogo} />
        )}
        <h2 className="sm:text-lg text-base font-bold ">{food.title}</h2>
        <p className="">{food.description}</p>
        <h2 className="sm:text-lg text-base font-bold ">Rs {food.price}</h2>
      </div>
      <div className="w-[40%] relative">
        <img className="rounded-md" src={food.image} />
        {isInCart ? ( // Render remove button if the item is in the cart
          <Button className="absolute flex sm:px-4 px-1 items-center justify-between -bottom-4 right-4 left-4 bg-white text-black font-bold text-lg uppercase shadow-md">
            <Minus size={18} onClick={handleRemoveCart} />
            <span className="font-semibold text-base">{quantity}</span>
            <Plus size={18} onClick={handleAddToCart} />
          </Button>
        ) : (
          <Button
            onClick={handleAddToCart}
            className="absolute -bottom-4 right-4 left-4 bg-white text-red-600 font-bold sm:text-lg text-sm uppercase shadow-md"
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;

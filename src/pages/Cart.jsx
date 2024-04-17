import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/state-manager/cart-store";
import { Minus, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    totalPrice,
    totalTax,
  } = useCart();

  const handleAddToCart = (food) => {
    addToCart(food);
  };

  const handleRemoveCart = (foodId) => {
    removeFromCart(foodId);
  };

  useEffect(() => {}, [cartItems]);

  const handleCopy = () => {
    let orderDetails = "Order Details:";

    cartItems.map((item) => {
      orderDetails += `  ${item.quantity} x  ${item.title}  : ${item.price}  `;
    });

    orderDetails += `  Sub total:  ${totalPrice.toFixed(
      2
    )}  Taxes: ${totalTax.toFixed(2)}  Total : ${(
      totalPrice + totalTax
    ).toFixed(2)}`;
    navigator.clipboard.writeText(orderDetails);

    setCopied(true);
  };

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [copied]);
  return (
    <div>
      <div className="flex flex-col gap-y-4 mt-6">
        {cartItems.length === 0 ? (
          <p>Looks like you haven't added any product in the cart yet</p>
        ) : (
          cartItems.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-foodCardBgColor rounded-lg px-4 py-4 flex items-center justify-between pb-8"
              >
                <div className="flex items-center gap-x-4">
                  <div className="w-[40%] relative">
                    <img src={item.image} className="rounded-md" alt="" />
                    <Button className="absolute flex sm:px-4 px-1 items-center justify-between -bottom-4 right-4 left-4 bg-white text-black font-bold text-lg uppercase shadow-md">
                      <Minus
                        size={18}
                        onClick={() => handleRemoveCart(item.id)}
                      />
                      <span className="font-semibold text-base">
                        {item.quantity}
                      </span>
                      <Plus size={18} onClick={() => handleAddToCart(item)} />
                    </Button>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p>Rs {item.price}</p>
                  </div>
                </div>
                <Trash2
                  size={30}
                  className="hover:text-red-600 cursor-pointer"
                  onClick={() => deleteFromCart(item.id)}
                />
              </div>
            );
          })
        )}
      </div>

      <Separator className="my-6" />
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <p>Sub Total</p>
          <p>Rs {totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Taxes</p>
          <p>Rs {totalTax.toFixed(2)}</p>
        </div>

        <div className="flex justify-between font-semibold items-center mt-2">
          <p>Total</p>
          <p>Rs {(totalPrice + totalTax).toFixed(2)}</p>
        </div>
      </div>

      <Separator className="my-6" />
      <div className="flex items-center gap-x-6">
        {copied ? (
          <Button className="w-1/2 bg-categoresBgColor font-normal py-6 text-black text-lg">
            Copied!
          </Button>
        ) : (
          <Button
            onClick={handleCopy}
            className="w-1/2 bg-categoresBgColor font-normal py-6 text-black text-lg"
          >
            Copy Order
          </Button>
        )}
        <Button className="w-1/2 bg-orderWhatsappBgColor whitespace-normal font-normal sm:py-6 py-8 text-white text-lg">
          <a target="_blank" href="https://wa.me/918762582739">
            Order via whatsapp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import Menu from "./pages/Menu";
import Pay from "./pages/Pay";
import { BiFoodMenu } from "react-icons/bi";
import { LuChefHat } from "react-icons/lu";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { cn } from "./lib/utils";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { useCart } from "./state-manager/cart-store";
import "./App.css"
import Header from "./components/header";

export default function App() {
  const [tab, setTab] = React.useState(0);

  const { totalPrice } = useCart()

  const tabItems = [
    { icon: <BiFoodMenu className="text-2xl text-gray-600 font-extralight" />, title: "Menu" },
    { icon: <LuChefHat className="text-2xl text-gray-600 font-extralight" />, title: "About" },
    {
      icon: <TbDeviceMobileDollar className="text-2xl text-gray-600 font-extralight" />,
      title: "Pay Us",
    },
    {
      icon: <MdOutlineShoppingCart className="text-2xl text-gray-600 font-extralight" />,
      title: `Total : Rs ${totalPrice.toFixed(2)}`,
    },
  ];
  return (
    <div className="max-w-[600px] px-3 py-4 relative mx-auto">
      <Header />
      <div className="fixed sm:min-w-[600px] min-w-full bottom-0 flex flex-wrap bottom-shadow justify-around bg-white z-[999]">
        {tabItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setTab(index)}
            className={cn(
              ` flex flex-col gap-y-1 cursor-pointer items-center sm:px-10 py-2 ustify-center`,
              index === tab ? "border-t-red-600 border-t-2" : ""
            )}
          >
            {item.icon}
            <span className="text-base">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="pb-20">
        {tab === 0 && <Menu />}
        {tab === 1 && <About />}
        {tab === 2 && <Pay />}
        {tab === 3 && <Cart />}
      </div>
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories, foods } from "../../data";
import React from "react";
import FoodCard from "./foodCard";

const Food = () => {

  return (
    <div>
      <Accordion type="multiple" defaultValue={"1"} collapsible>
        {categories.map((category, index) => (
          <AccordionItem key={index} id={category} value={index + 1}>
            <AccordionTrigger className="font-bold text-lg">{category}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-4 ">
                {foods.map((food, indexi) => {
                  if (food.category === category) {
                    return (
                      <FoodCard key={indexi} food={food}>
                        {food.title}
                      </FoodCard>
                    );
                  }
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Food;

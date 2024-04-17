import Header from "@/components/header";
import React from "react";
import payUs from "/assets/PayUs.png";
import phonepay from "/assets/phonepe.png";
import googlepay from "/assets/googlepay.png";
import amazonpay from "/assets/amazonpay.png";
import paytm from "/assets/paytm.png";
import { Separator } from "@/components/ui/separator";

const Pay = () => {
  return (
    <div>
      <img src={payUs} />
      <p className="border-b-2 border-solid text-center text-lg pb-8 font-semibold">
        Scan the QR to pay
      </p>

      <div className="grid grid-cols-2 sm:gap-6 gap-4 mt-6">
        <div className="bg-foodCardBgColor text-center py-10 px-2.5 rounded-md flex flex-col items-center gap-y-1">
          <img className="max-w-[120px] " src={googlepay} />
          <h3 className="font-bold">googlepay</h3>
          <p className="sm:text-base text-sm">yenumenu@icici</p>
        </div>
        <div className="bg-foodCardBgColor text-center py-10 px-2.5 rounded-md flex flex-col items-center gap-y-1">
          <img className="max-w-[120px] " src={phonepay} />
          <h3 className="font-bold">phonepe</h3>
          <p className="sm:text-base text-sm">yenumenu@icici</p>
        </div>
        <div className="bg-foodCardBgColor text-center py-10 px-2.5 rounded-md flex flex-col items-center gap-y-1">
          <img className="max-w-[120px] " src={amazonpay} />
          <h3 className="font-bold">amazonpay</h3>
          <p className="sm:text-base text-sm">yenumenu@icici</p>
        </div>
        <div className="bg-foodCardBgColor text-center py-10 px-2.5 rounded-md flex flex-col items-center gap-y-1">
          <img className="max-w-[120px] " src={paytm} />
          <h3 className="font-bold">paytm</h3>
          <p className="sm:text-base text-sm">yenumenu@icici</p>
        </div>
      </div>
    </div>
  );
};

export default Pay;

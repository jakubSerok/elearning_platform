import React from "react";
import { PricingTable } from "@clerk/nextjs";
const Pricing = () => {
  return (
    <div className=" mt-22  text-3xl px-72 flex flex-col items-center justify-center w-full">
      <h2 className="text-4xl text-center font-game">Pricing</h2>
      <h2 className="text-xl text-center font-game">
        Join For unlimited access to all Features and courses
      </h2>
      <PricingTable />
    </div>
  );
};

export default Pricing;

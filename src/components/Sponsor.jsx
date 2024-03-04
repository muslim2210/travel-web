import React from "react";
import { sponsor } from "../constant";

const Sponsor = () => {
  return (
    <div className="flex flex-row gap-6 md:gap-7 lg:gap-[50px] items-center justify-center lg:justify-evenly mx-auto flex-wrap lg:mt-7 md:mt-5 py-5 lg:py-0 lg:w-full">
      {sponsor.map((item) => (
        <div key={item} className="py-1">
          <img src={item} className="h-6 md:h-8" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Sponsor;

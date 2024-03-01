import React from "react";
import { sponsor } from "../constant";

const Sponsor = () => {
  return (
    <div className="flex flex-row gap-6 md:gap-7 lg:gap-[50px] items-center justify-center flex-wrap lg:mt-0 py-8 lg:py-0">
      {sponsor.map((item) => (
        <div key={item} className="h-5 py-5">
          <img src={item} className="" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Sponsor;

import React from "react";
import { arrowL, arrowR } from "../assets/icons";
import CardDestination from "../components/CardDestination";
import { destinations } from "../constant";

const TopDestination = () => {
  return (
    <>
      <section className="max-container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-5">
          <div className="flex flex-col justify-center mb-4">
            <h2 className="font-CircularStd font-bold text-[16px] md:text-[23px] uppercase text-secondary leading-tight text-center lg:text-start tracking-widest">
              Top Destination
            </h2>
            <h1 className="font-CircularStd font-bold text-[32px] md:text-[40px] mt-4 text-black leading-tight text-center lg:text-start md:mb-3">
              Explore Top Destination
            </h1>
          </div>
          <div className="flex justify-between md:justify-center gap-5 cursor-pointer mb-2">
            <div className="w-[64px] h-[64px] bg-primary rounded-full flex justify-center items-center hover:bg-white hover:border hover:border-black">
              <img src={arrowL} alt="" width={15} height={15} />
            </div>
            <div className="w-[64px] h-[64px] bg-primary rounded-full flex justify-center items-center hover:bg-white hover:border hover:border-black">
              <img src={arrowR} alt="" width={15} height={15} />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8 md:gap-5 mt-5 md:mt-10">
        {destinations.map((destination) => (
          <CardDestination key={destination.label} {...destination} />
        ))}
      </div>
    </>
  );
};

export default TopDestination;

import React from "react";
import { travelpoint } from "../assets/images";
import { statistics } from "../constant";
import StatisticCard from "../components/StatisticCard";

const TravelPoint = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-5">
        {/* Image container */}
        <div className="w-full h-[350px] md:h-[700px] lg:w-3/5">
          <div className="absolute px-0 left-0 lg:w-[800px] 2xl:w-[1000px]">
            <img src={travelpoint} alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center mt-9 lg:w-2/5 lg:mt-[20px]">
          {/* text container */}
          <h2 className="font-CircularStd font-bold text-[16px] md:text-[23px] uppercase text-secondary leading-tight text-center lg:text-start tracking-widest">
            Travel Point
          </h2>
          <h1 className="font-CircularStd font-bold text-[32px] md:text-[40px] mt-4 text-black leading-tight text-center lg:text-start">
            We helping you find your dream location
          </h1>
          <p className="text-base font-inter text-slate-gray opacity-50 text-center lg:text-start text-[16px] md:text-[18px] mt-5 md:mt-6 lg:mt-2 lg:max-w-[400px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>

          <div className="flex flex-col md:flex-row justify-center lg:justify-start flex-wrap gap-4 md:gap-5 lg:gap-6 mt-5 md:mt-10 lg:mt-6">
            {statistics.map((statistic) => (
              <StatisticCard key={statistic.value} {...statistic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPoint;

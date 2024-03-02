import React from "react";

const StatisticCard = ({ value, label }) => {
  return (
    <div className="flex justify-center flex-col sm:w-[350px] sm:h-[160px] md:w-[330px] lg:w-[200px] w-full border border-slate-gray rounded-[32px] px-11 py-10 lg:px-5 lg:py-5">
      <h3 className="font-CircularStd text-center text-[35px] leading-normal font-bold text-orange">
        {value}
      </h3>
      <p className="font-inter font-light leading-relaxed text-black mt-3 md:mt-5 text-[18px] text-center">
        {label}
      </p>
    </div>
  );
};

export default StatisticCard;

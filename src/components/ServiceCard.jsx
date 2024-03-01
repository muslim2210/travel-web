import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex justify-center flex-col sm:w-[350px] sm:h-[279px] md:w-[288px] md:h-[443px] w-full border border-slate-gray rounded-[32px] shadow-xl px-10 py-10">
      <div className="flex justify-center">
        <img src={imgURL} alt={label} />
      </div>

      <h3 className="mt-5 md:mt-11 font-CircularStd text-center text-[24px] leading-normal font-bold">
        {label}
      </h3>
      <p className="font-inter font-light leading-relaxed text-grey opacity-50 mt-5 md:mt-9 text-[17px] text-center">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;

import React from "react";

const CardFeatures = ({ imgURL, label, subText }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-start w-full py-5 md:py-2 px-8 cursor-pointer hover:border-2 hover:border-slate-gray hover:rounded-[32px]">
      <div className="w-[100px] h-[100px] lg:w-[90px] lg:h-[90px] md:mr-7">
        <img src={imgURL} alt={label} />
      </div>

      <div className="flex flex-col justify-start py-3 lg:py-1 2xl:py-3">
        <h3 className="font-CircularStd text-[23px] leading-normal font-bold">
          {label}
        </h3>
        <p className="font-inter font-light leading-relaxed text-grey opacity-50 text-[18px] max-w-[240px] mt-2">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default CardFeatures;

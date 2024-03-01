import React from "react";
import { destination1 } from "../assets/images";

const CardDestination = ({ imgURL, label, price, country, rating }) => {
  return (
    // <div className="flex relative justify-center flex-col sm:w-[350px] sm:h-[279px] md:w-[288px] md:h-[443px] w-full border border-slate-gray rounded-[32px] shadow-xl px-10 py-10">
    <div className="flex relative justify-center flex-col sm:w-[350px] sm:h-[279px] md:w-[288px] md:h-[443px] w-full border border-slate-gray rounded-[32px] shadow-xl md:mt-10">
      <img
        src={imgURL}
        alt={label}
        className="h-80 w-full rounded-t-[32px] object-cover"
      />

      <div className="px-5 pb-5 mt-4">
        <p>
          <span className="text-3xl font-bold text-slate-900">{price}</span>
        </p>
        <h3 className="mt-2 font-CircularStd text-[24px] leading-normal font-bold">
          {label}
        </h3>
        <p className="font-inter font-light leading-relaxed text-grey opacity-50 mt-2 text-[17px]">
          {country}
        </p>
        <div className="mt-2 mb-5 flex items-center">
          <span className="mr-2 rounded font-semibold">{rating}</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardDestination;

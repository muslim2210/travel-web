import React from "react";
import Button from "../components/Button";
import { bgSubs } from "../assets/images";
import { msg } from "../assets/icons";

const Subscribe = () => {
  return (
    <section className="max-container md:px-5">
      <div className="hidden md:block md:absolute translate-y-[-20px] translate-x-[-20px]">
        <img src={bgSubs} alt="" />
      </div>
      <div className="container mx-auto bg-secondary/30 rounded-[32px]">
        <div className="py-11 px-5 flex flex-col justify-center">
          <div className="flex flex-col justify-center gap-5 max-w-[800px] mx-auto">
            {/* text */}
            <h2 className="font-CircularStd font-bold text-[16px] md:text-[23px] uppercase text-secondary leading-tight text-center tracking-widest">
              subscribe to our newsletter
            </h2>
            <h1 className="font-CircularStd font-bold text-[32px] md:text-[40px] lg:text-[55px] mt-4 text-black leading-tight text-center md:mb-11">
              Prepare yourself & let’s explore the beauty of the world
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            {/* form */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-10 md:mx-auto justify-center md:justify-between mt-7 md:mt-8 font-CircularStd">
              <input
                type="text"
                name="subscribe"
                placeholder="Your Email"
                className="font-CircularStd py-[24px] px-[34px] rounded-[16px] font-semibold placeholder:text-black/80 border border-slate-gray  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary md:w-[400px] lg:w-[600px] md:text-[20px]"
              />
              {/* button */}
              <button className="bg-primary hover:bg-[#5D50C6]/70 text-white md:text-[20px] font-inter py-[24px] px-[64px] rounded-[16px] shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

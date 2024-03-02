import React from "react";
import { hero } from "../assets/images/";
import { work1 } from "../assets/icons";
import { play } from "../assets/icons";
import Button from "../components/Button";
import Sponsor from "../components/Sponsor";

const Hero = () => {
  return (
    <section className="max-container w-full pt-[100px] lg:pt-[50px]">
      <div className="container mx-auto px-4 lg:py-[100px] ">
        <div className="flex flex-col lg:flex-row justify-between p-4">
          {/* hero image */}
          <div className="lg:w-3/5 lg:order-2">
            <div className="w-full">
              <img src={hero} alt="" />
            </div>
          </div>
          {/* hero text */}
          <div className="lg:w-2/5 lg:order-1 lg:mt-[70px]">
            <div className="flex flex-col justify-center items-center">
              <div className="lg:w-full">
                <Button variant="bg-white text-secondary flex flex-wrap gap-2 px-8 py-4 items-center font-bold text-sm font-CircularStd text-[14px]">
                  Explore the world!
                  <img src={work1} alt="" />
                </Button>
              </div>
              <h1 className="font-bold leading-tight text-black text-[40px] md:text-[56px] mt-7 md:mt-8 text-center lg:text-start">
                Travel <span className="text-secondary">Top destination</span>{" "}
                of the world
              </h1>
              <p className="text-base font-inter text-slate-gray opacity-50 text-center lg:text-start text-[16px] md:text-[18px] mt-5 md:mt-6 md:w-[500px] lg:w-full">
                We always make our customer happy by providing as many choices
                as possible{" "}
              </p>
              <div className="flex flex-col md:flex-row w-full gap-6 justify-center lg:justify-start mt-7 md:mt-8 font-CircularStd">
                <Button variant="text-[14px] text-white bg-primary hover:bg-[#5D50C6]/70 md:px-[32px]">
                  Get Started
                </Button>
                <Button variant="bg-white text-black border border-1 border-slate-gray items-center flex flex-wrap gap-2 justify-center text-[14px]">
                  <img src={play} alt="" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Sponsor />
      </div>
    </section>
  );
};

export default Hero;

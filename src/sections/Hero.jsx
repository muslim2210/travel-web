import React from "react";
import { hero } from "../assets/images/";
import { work1 } from "../assets/icons";
import { play } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="max-container w-full min-h-screen pt-[50px]">
      <div className="container mx-auto px-4 py-28">
        <div className="flex flex-col lg:flex-row justify-between p-4">
          {/* hero image */}
          <div className="flex-1 lg:w-2/3 lg:order-2">
            <div className="lg:w-[772px] lg:h-[713px] flex justify-self-end">
              <img src={hero} alt="" />
            </div>
          </div>
          {/* hero text */}
          <div className="flex-1 lg:w-1/3 lg:order-1">
            <div className=" flex flex-col justify-center items-center">
              <Button variant="bg-white text-secondary flex flex-wrap gap-2 px-8 py-4 items-center font-bold text-sm font-CircularStd text-[14px]">
                Explore the world!
                <img src={work1} alt="" />
              </Button>
              <h1 className="font-bold leading-tight text-black text-[40px] md:text-[56px] mt-7 md:mt-8 text-center">
                Travel <span className="text-secondary">Top destination</span>{" "}
                of the world
              </h1>
              <p className="text-base font-inter text-slate-gray opacity-50 text-center text-[16px] md:text-[18px] mt-5 md:mt-6 max-w-[500px]">
                We always make our customer happy by providing as many choices
                as possible{" "}
              </p>
              <div className="flex flex-col md:flex-row w-full gap-6 justify-center mt-7 md:mt-8 font-CircularStd">
                <Button variant="text-[14px] text-white bg-primary hover:bg-[#5D50C6]/70 md:px-[32px]">
                  Get Started
                </Button>
                <Button variant="bg-white text-black border-slate-gray border-2 items-center flex flex-wrap gap-2 justify-center text-[14px]">
                  <img src={play} alt="" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

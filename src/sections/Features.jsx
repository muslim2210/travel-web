import React from "react";
import { keyfeautures } from "../assets/images";
import { features } from "../constant";
import CardFeatures from "../components/CardFeatures";

const Features = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col lg:flex-row gap-7">
        {/* image container */}
        <div className="lg:order-2 w-full">
          <img src={keyfeautures} alt="" />
        </div>
        {/* text container */}
        <div className="mt-5 lg:order-1 2xl:mt-20">
          <h2 className="font-CircularStd font-bold text-[16px] md:text-[23px] uppercase text-secondary leading-tight text-center lg:text-start tracking-widest">
            key features
          </h2>
          <h1 className="font-CircularStd font-bold text-[32px] md:text-[40px] mt-4 text-black leading-tight text-center lg:text-start">
            We offer best services
          </h1>
          <p className="text-base font-inter text-slate-gray opacity-50 text-center lg:text-start text-[16px] md:text-[18px] mt-5 md:mt-6 lg:mt-2 lg:max-w-[400px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          {/* card features */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start flex-wrap gap-4 md:gap-5 lg:gap-6 mt-5 md:mt-10 lg:mt-6">
            {features.map((feature, index) => (
              <CardFeatures key={feature.index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

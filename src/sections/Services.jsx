import React from "react";
import { services } from "../constant";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="flex flex-col justify-center mb-3">
          <h2 className="font-CircularStd font-bold text-[16px] md:text-[23px] uppercase text-secondary leading-tight text-center lg:text-start tracking-widest">
            services
          </h2>
          <h1 className="font-CircularStd font-bold text-[32px] md:text-[40px] mt-4 text-black leading-tight text-center lg:text-start md:mb-11">
            Our top value categories for you
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center flex-wrap md:flex-nowrap lg:flex-nowrap gap-8 md:gap-5 mt-5 md:mt-10">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

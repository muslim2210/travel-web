import React from "react";
import { services } from "../constant";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container mt-10 flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;

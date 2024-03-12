import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { testimoni } from "../constant";
import { arrowL, arrowR } from "../assets/icons";
import CardTestimoni from "../components/CardTestimoni";

const Testimoni = () => {
  return (
    <section className="max-container ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-CircularStd font-bold text-[16px] md:text-[23px] uppercase text-secondary leading-tight text-center tracking-widest">
            testimonials
          </h2>
          <h1 className="font-CircularStd font-bold text-[32px] md:text-[40px] mt-4 text-black leading-tight text-center md:mb-11">
            Trust our clients
          </h1>
        </div>
        <div className="py-5 px-5 md:w-[584px] lg:w-[878px] md:mx-auto">
          {/* slider */}
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=""
          >
            {/* card testimoni */}
            {testimoni.map((testi, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardTestimoni {...testi} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="md:aboslute md:translate-y-[-300px]">
          {/* arrow */}
          <div className="flex justify-between cursor-pointer">
            <div className="w-[64px] h-[64px] bg-primary rounded-full flex justify-center items-center hover:bg-white hover:border hover:border-black shadow-xl">
              <img src={arrowL} alt="" width={15} height={15} />
            </div>
            <div className="w-[64px] h-[64px] bg-primary rounded-full flex justify-center items-center hover:bg-white hover:border hover:border-black shadow-xl">
              <img src={arrowR} alt="" width={15} height={15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;

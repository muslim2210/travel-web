import React from "react";
import { arrowL, arrowR } from "../assets/icons";
import CardDestination from "../components/CardDestination";
import { destinations } from "../constant";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swipper styles
import "swiper/css";
import "swiper/css/pagination";

// import requires
import { Pagination } from "swiper/modules";

const TopDestinationNew = () => {
  return (
    <>
      <section className="max-container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-5 lg:mt-12">
          <div className="flex flex-col justify-center mb-4">
            <h2 className="font-CircularStd font-bold text-[16px] md:text-[23px] uppercase text-secondary leading-tight text-center lg:text-start tracking-widest">
              Top Destination
            </h2>
            <h1 className="font-CircularStd font-bold text-[32px] md:text-[40px] mt-4 text-black leading-tight text-center lg:text-start md:mb-3">
              Explore Top Destination
            </h1>
          </div>
          <div className="flex justify-between md:justify-center gap-5 cursor-pointer mb-2">
            <div className="w-[64px] h-[64px] bg-primary rounded-full flex justify-center items-center hover:bg-white hover:border hover:border-black shadow-xl">
              <img src={arrowL} alt="" width={15} height={15} />
            </div>
            <div className="w-[64px] h-[64px] bg-primary rounded-full flex justify-center items-center hover:bg-white hover:border hover:border-black shadow-xl">
              <img src={arrowR} alt="" width={15} height={15} />
            </div>
          </div>
        </div>
      </section>
      <div className="flex md:flex-row justify-center xl:max-w-[1100px] mx-auto flex-nowrap gap-10 md:gap-5 mt-5 md:mt-16">
        {/* {destinations.map((destination) => (
          <CardDestination key={destination.label} {...destination} />
        ))} */}
        {/* slider */}
        <Swiper
          className="flex justify-center px-2 md:px-10 h-[650px] md:h-[600px]"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {destinations.map((destination, index) => {
            return (
              <SwiperSlide key={index}>
                <CardDestination {...destination} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TopDestinationNew;

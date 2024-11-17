"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import React from "react";

const slides = [
  {
    title: "Backend Development",
    description:
      "Building scalable backend systems with modern technologies for high performance and reliability.",
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive, user-friendly UIs with React and Next.js for a seamless cross-device experience.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing frontend and backend performance, from database queries to UI rendering, for smooth experiences.",
  },
  {
    title: "System Architecture",
    description:
      "Designing robust, scalable systems using best practices in backend technologies like PostgreSQL and Redis.",
  },
  {
    title: "API Development",
    description:
      "Building high-performance RESTful APIs and microservices for seamless system integration and communication.",
  },
];

export default function SliderWhatIsTheBest() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide className="cursor-grab pb-8" key={slide.title}>
            <h3 className="text-2xl font-medium mb-3">{slide.title}</h3>
            <p className="text-base font-medium leading-loose">
              {slide.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import React from "react";

const slides = [
  {
    title: "Phát triển Backend",
    description:
      "Tạo ra các hệ thống backend mạnh mẽ, mở rộng được, sử dụng công nghệ tiên tiến để đảm bảo hiệu suất ổn định và đáng tin cậy.",
  },
  {
    title: "Phát triển Frontend",
    description:
      "Thiết kế giao diện người dùng dễ sử dụng và đẹp mắt với React và Next.js, mang lại trải nghiệm tuyệt vời trên mọi thiết bị.",
  },
  {
    title: "Tối ưu hiệu suất",
    description:
      "Cải thiện hiệu suất của cả frontend và backend, tối ưu hóa từ các truy vấn cơ sở dữ liệu đến việc hiển thị giao diện người dùng, giúp mọi thứ hoạt động mượt mà hơn.",
  },
  {
    title: "Kiến trúc hệ thống",
    description:
      "Xây dựng hệ thống có khả năng mở rộng và dễ bảo trì, áp dụng các phương pháp và công nghệ backend tiên tiến như PostgreSQL và Redis để đạt hiệu suất tối ưu.",
  },
  {
    title: "Phát triển API",
    description:
      "Xây dựng các API RESTful và microservices mạnh mẽ, dễ dàng tích hợp và giao tiếp giữa các hệ thống với nhau một cách hiệu quả.",
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

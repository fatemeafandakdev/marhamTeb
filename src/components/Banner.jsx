
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import cream from "../assests/img/cream.webp";
import breath from "../assests/img/breath.webp";
import spicy from "../assests/img/spicy.webp";
import pain from "../assests/img/pain.webp";

function Banner() {
  const navigate = useNavigate();

 
  const slides = [
    {
      id: 1,
      img: cream,
      alt: "cream",
      title: "کرم گیاهی",
    },
    {
      id: 2,
      img: spicy,
      alt: "spicy",
      title: "ادویه ترکیبی",
    },
    {
      id: 3,
      img: pain,
      alt: "pain",
      title: "درمان دردهای عضلانی",
    },
    {
      id: 4,
      img: breath,
      alt: "breath",
      title: "افزایش تنفس سالم",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((item) => (
        <SwiperSlide
          key={item.id}
          onClick={() => navigate(`/productDetail?id=${item.id}`)} 
          className="cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.alt}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
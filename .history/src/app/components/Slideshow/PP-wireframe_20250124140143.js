'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slideshow({ slides }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
              className="object-cover w-full h-64 md:h-96 rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

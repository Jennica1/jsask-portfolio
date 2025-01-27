'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slideshow({ slides, height = 'h-64', width = 'w-full' }) {
    return (
      <div className={`mx-auto ${width}`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className={`rounded-lg shadow-lg ${height}`}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.alt || `Slide ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  
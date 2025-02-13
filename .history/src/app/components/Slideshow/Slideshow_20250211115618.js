'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slideshow({ slides, height = 'h-full', width = 'w-full' }) {
    return (
      <div className={`mx-auto ${width}`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          className={`rounded-lg shadow-lg ${height}`}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.alt || `Slide ${index + 1}`}
                className="object-cover w-auto h-auto rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    );
  }
  
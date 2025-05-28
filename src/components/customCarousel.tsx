import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { CarouselItem } from '../schemas/carousel';
import { useState } from 'react';
import RightArrow from '../assets/icons/right-arrow.png';
import LeftArrow from '../assets/icons/left-arrow.png';

interface IProps {
  items: CarouselItem[];
}

function CustomCarousel({ items }: IProps) {
  return (
    <div className='custom-carousel'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        loop
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        className='my-swiper my-swiper-video'
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === 'image' ? (
              <img src={item.source} alt={`Slide ${index + 1}`} />
            ) : (
              <video
                controls
                src={item.source}
                autoPlay
                loop
                muted
                playsInline
                className='my-video-slide'
              ></video>
            )}
          </SwiperSlide>
        ))}
        <div className='custom-prev'>
          <img src={LeftArrow} alt='Previous' />
        </div>
        <div className='custom-next'>
          <img src={RightArrow} alt='Next' />
        </div>
      </Swiper>
    </div>
  );
}
export default CustomCarousel;

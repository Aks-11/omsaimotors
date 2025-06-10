import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { CarouselItem } from '../schemas/carousel';
import RightArrow from '../assets/icons/right-arrow.png';
import LeftArrow from '../assets/icons/left-arrow.png';
import { useRef } from 'react';

interface IProps {
  items: CarouselItem[];
  isHomePage?: boolean;
}

function CustomCarousel({ items, isHomePage }: IProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = () => {
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });
  };

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
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === 'image' ? (
              <img
                src={item.source}
                alt={`Slide ${index + 1}`}
                className={isHomePage ? 'home-page-slide' : ''}
              />
            ) : (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
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

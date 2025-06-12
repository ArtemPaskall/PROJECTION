import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import st from "./slider.module.scss";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className={st["slider"]}
      >
        <SwiperSlide>
          <img src="/hero.png" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.png" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.png" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>


      <div class="swiper-scrollbar"></div>
    </>
  );
};

export default ImageSlider;

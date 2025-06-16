import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./slider.scss"
import Image from "next/image"

const ImageSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="slider"
      >
        <SwiperSlide>
          <img src="/hero.jpg" alt="Slide 1" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.jpg" alt="Slide 2" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.jpg" alt="Slide 3" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.jpg" alt="Slide 4" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero.jpg" alt="Slide 5" className="slider-image" />
        </SwiperSlide>
      </Swiper>
      <div className="slider-scrollbar"></div>
      <div className="tip-wrapp">
        <div className="tip">Clothing</div>
        <div className="tip">Meta Ads</div>
        <div className="tip">
          <Image src="/geo.svg" width={10} height={10} alt={"geo"} />
          <p> USA</p>
        </div>
      </div>
    </>
  )
}

export default ImageSlider

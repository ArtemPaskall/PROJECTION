import "@/app/styles/globals.scss"
import st from "./circles.module.scss"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

export default function CirclesBlock() {
  return (
    <>
      <div className="main-wrapp">
        <div className={st["circle-wrapp"]}>
          <div className={st["circle-item"]}>
            <Image
              src={"/circle1.svg"}
              width={300}
              height={300}
              alt="founder"
              className={st["circle"]}
            />
          </div>
          <div className={st["circle-item"]}>
            <Image
              src={"/circle1.svg"}
              width={300}
              height={300}
              alt="founder"
              className={st["circle"]}
            />
          </div>
          <div className={st["circle-item"]}>
            <Image
              src={"/circle1.svg"}
              width={300}
              height={300}
              alt="founder"
              className={st["circle"]}
            />
          </div>
          <div className={st["circle-item"]}>
            <Image
              src={"/circle1.svg"}
              width={300}
              height={300}
              alt="founder"
              className={st["circle"]}
            />
          </div>
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className={`${st["circle-swiper"]} circle-swiper`} // додаємо ще глобальний клас
        >
          <SwiperSlide>
            <img src="/circle1.svg" alt="Slide 1" className="slider-image2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/circle1.svg" alt="Slide 2" className="slider-image2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/circle1.svg" alt="Slide 3" className="slider-image2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/circle1.svg" alt="Slide 4" className="slider-image2" />
          </SwiperSlide>
        </Swiper>
        <div className="circle-slider-scrollbar"></div>
      </div>
    </>
  )
}

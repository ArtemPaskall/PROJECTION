import "@/app/styles/globals.scss"
import st from "./circles.module.scss"
import "./circles.scss"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function CirclesBlock() {
  return (
    <section>
      <div className="main-wrapp">
        <div className={st["circle-wrapp"]}>
          {["/circle1.svg", "/circle2.svg", "/circle3.svg", "/circle4.svg"].map(
            (src, i) => (
              <div key={i} className={st["circle-item"]}>
                <Image
                  src={src}
                  width={300}
                  height={300}
                  alt={`founder-${i + 1}`}
                  className={st["circle"]}
                />
              </div>
            )
          )}
        </div>

        <div className={st["circle-mobile--wrapp"]}>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="circle-bullet ${className}"></span>`,
            }}
            className={st["circle-mobile"]}
          >
            {[
              "/circle1.svg",
              "/circle2.svg",
              "/circle3.svg",
              "/circle4.svg",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="slider-image2"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

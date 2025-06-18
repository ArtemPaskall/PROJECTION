import "@/app/styles/globals.scss"
import st from "./card-block.module.scss"
import "./card-block.scss"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function CardBlock() {
  const cards = ["/card1.svg", "/card2.svg", "/card3.svg", "/card4.svg"]

  return (
    <section className={st["card-block"]}>
      <div className="main-wrapp">
        <div className={st["card-block-grid"]}>
          {cards.map((src, i) => (
            <div key={i} className={st["card-image-wrapp"]}>
              <Image
                src={src}
                alt={`Card Image ${i + 1}`}
                width={300}
                height={500}
                className={st["card-image"]}
              />
            </div>
          ))}
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="card-block-bullet ${className}"></span>`,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className={st["card-block-slider"]}
        >
          {cards.map((src, i) => (
            <SwiperSlide key={i}>
              <div className={st["card-image-wrapp"]}>
                <Image
                  src={src}
                  alt={`Card Image ${i + 1}`}
                  width={300}
                  height={500}
                  className={st["card-image"]}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

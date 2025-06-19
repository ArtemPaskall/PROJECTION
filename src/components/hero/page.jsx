import "@/app/styles/globals.scss"
import st from "./hero.module.scss"
import Image from "next/image"
import Slider from "@/components/slider/page.jsx"
import { useModal } from "@/context/GetInTouch"

export default function Hero() {
  const { openModal } = useModal()

  return (
    <section className={st["hero"]}>
      <div className="main-wrapp">
        <div className={st["hero-wrapp"]}>
          <div className={st["hero-wrapp--left"]}>
            <Image
              src={"/big-background.png"}
              alt="Hero"
              width={300}
              height={500}
              priority
              className={st["big-background"]}
            />
            <div className={st["hero-wrapp--left-inner"]}>
              <h1 className={st["main-header"]}>
                Building <br />
                <span className={st["main-header--gradient"]}>data-driven</span>
                <br /> e-commerce
                <br /> on Shopify
              </h1>
              <div className={st["description-wrapp"]}>
                <div className={st["description"]}>
                  We help businesses grow and scale <br /> with our expertise in
                  &nbsp;
                  <span className={st["expertise"]}>
                    <span className={st["expertise-nowrap"]}>
                      <span className={st["expertise-italic"]}>
                        performance
                      </span>
                      marketing
                    </span>
                  </span>
                  &nbsp; , &nbsp;
                  <span className={st["expertise"]}>
                    <span className={st["expertise-nowrap"]}>
                      <span className={st["expertise-italic"]}>user</span>
                      experience
                    </span>
                  </span>
                  &nbsp; and &nbsp;
                  <span className={st["expertise"]}>
                    <span className={st["expertise-nowrap"]}>
                      <span className={st["expertise-italic"]}>creative</span>
                      strategy
                    </span>
                  </span>
                </div>
                <div className={st["button-wrapp"]}>
                  <button
                    type="button"
                    className={st["green-button"]}
                    onClick={openModal}
                  >
                    Free Strategy Call
                    <Image
                      src={"/button-image.svg"}
                      alt="button image"
                      width={42}
                      height={42}
                      className={st["green-button-image"]}
                    />
                  </button>
                  <div className={st["reviews-block"]}>
                    <span className={st["reviews-block-white"]}>
                      146+ reviews. &nbsp;
                    </span>
                    All chances are you’ll be impressed too.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={st["hero-wrapp--right"]}>
            <div className={st["slider-wrapp"]}>
              <Slider />
              <div className={st["price-block"]}>
                <Image
                  src={"/slider-background.png"}
                  alt="Hero"
                  width={30}
                  height={50}
                  className={st["slider-background-img"]}
                />
                <Image
                  src={"/gradient.png"}
                  alt="Hero"
                  width={300}
                  height={300}
                  className={st["gradient-img"]}
                />
                <div className={st["calendar-wrapp"]}>
                  <Image
                    src={"/calendar.svg"}
                    alt="Hero"
                    width={36}
                    height={36}
                    className={st["calendar-img"]}
                  />
                  <div>July, 2023 — by today</div>
                </div>
                <h2 className={st["price-block-header"]}>Vintage Clothing</h2>
                <p className={st["price-block-description"]}>
                  Online store of vintage clothes
                </p>
                <div className={st["price-wrapp"]}>
                  <div className={st["price-item"]}>
                    <div className={st["price-name"]}>Budget:</div>
                    <div className={st["price-value"]}>$3,525.92</div>
                  </div>
                  <div className={st["price-item"]}>
                    <div className={st["price-name"]}>Profit:</div>
                    <div className={st["price-value"]}>$44,529.57</div>
                  </div>
                  <div className={st["price-item"]}>
                    <div className={st["price-name"]}>ROAS:</div>
                    <div className={st["price-value"]}>1350%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

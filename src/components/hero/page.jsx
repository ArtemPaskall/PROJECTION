import "@/app/styles/globals.scss";
import st from "./hero.module.scss";
import Image from "next/image";
import Slider from "@/components/slider/page.jsx";

export default function Hero() {
  return (
    <div className={st["hero"]}>
      <div className="main-wrapp">
        <div className={st["hero-wrapp"]}>
          <div className={st["hero-wrapp--left"]}>
            <h1 className={st["main-header"]}>
              Building <br />
              <span className={st["main-header--gradient"]}> data-driven </span>
              <br /> e-commerce
              <br /> on Shopify
            </h1>
            <div className={st["description-wrapp"]}>
              <div className={st["description"]}>
                We help businesses grow and scale <br /> with our expertise in
                &nbsp;
                <span className={st["expertise"]}>
                  <span className={st["expertise-nowrap"]}>
                    <span className={st["expertise-italic"]}>performance</span>
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
                <button type="button" className={st["green-button"]}>
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
          <div className={st["hero-wrapp--right"]}>
            <div>
              <Slider />
              {/* <Image
                src={"/hero.png"}
                alt="Hero"
                width={300}
                height={500}
                className={st["hero-img"]}
              /> */}
              <div className={st["slider-wrapp"]}>
                <Image
                  src={"/slider-background.png"}
                  alt="Hero"
                  width={300}
                  height={500}
                  className={st["hero-img"]}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

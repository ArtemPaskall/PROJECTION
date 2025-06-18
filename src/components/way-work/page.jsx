import st from "./way-work.module.scss"
import "@/app/styles/globals.scss"
import Image from "next/image"

export default function WayWork() {
  return (
    <section className={st["way-work"]}>
      <div className={"main-wrapp"}>
        <div className={st["way-work-wrapp"]}>
          <div className={st["way-work--left"]}>
            <div className={st["first-line"]}>
              <div className={st["way-work-text-1"]}>
                <span className={st["way-work-text-2"]}>The </span>
                way
              </div>
              <div className={st["images-wrapp"]}>
                <Image
                  src={"/man.png"}
                  alt="man image"
                  width={170}
                  height={170}
                  className={st["man-image"]}
                />
                <Image
                  src={"/Play_button2.svg"}
                  alt="man image"
                  width={170}
                  height={170}
                  className={st["play-button"]}
                />
              </div>
            </div>
          </div>
          <div className={st["way-work--right"]}>
            <div className={st["way-work-description"]}>
              We grow Shopify stores{" "}
              <span className={st["way-work-description-bold"]}>
                from 4 to 6 figures{" "}
              </span>{" "}
              in revenue using creative strategies in performance marketing
            </div>
            <div className={`${st["way-work-text-1"]} ${st["text-position"]}`}>
              we work
            </div>
          </div>
          <div className={st["way-work-description-mobile"]}>
            We grow Shopify stores{" "}
            <span className={st["way-work-description-bold"]}>
              from 4 to 6 figures{" "}
            </span>{" "}
            in revenue using creative strategies in performance marketing
          </div>
        </div>
      </div>
    </section>
  )
}

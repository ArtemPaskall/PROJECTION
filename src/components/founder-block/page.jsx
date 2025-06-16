import "@/app/styles/globals.scss"
import st from "./founder.module.scss"
import Image from "next/image"

export default function FounderBlock() {
  return (
    <>
      <div className={"main-wrapp"}>
        <div className={st["founder-wrapp"]}>
          <div className={st["founder-wrapp-left"]}>
            <div className={st["misson"]}> • our mission</div>
            <div className={`${st["founder-text-mobile"]} ${st["mt20"]}`}>
              <p
                className={`${st["founder-description-text"]} ${st["text-intended"]}`}
              >
                We believe that by creating value for people we make the world a
                happier place.
              </p>
              <p className={`${st["founder-description-text"]} ${st["mt20"]}`}>
                Based on our experience and innovative approach in marketing.
                Our clients implement their values and ideas, integrating
                sustainable development into the foundation of their digital
                business.
              </p>
            </div>
            <div className={st["founder-img-wrapp"]}>
              <Image
                src={"/founder.jpg"}
                width={50}
                height={50}
                alt="founder"
                className={st["founder-img"]}
              />
              <Image
                src={"/Play_button.png"}
                width={90}
                height={90}
                alt="founder"
                className={st["play-button-img"]}
              />
            </div>
            <div className={st["founder-name"]}>Victor Terekhovskyi</div>
            <div className={st["founder-title"]}>Сo-founder & COO</div>
          </div>
          <div className={st["founder-wrapp-right"]}>
            <p
              className={`${st["founder-description-text"]} ${st["text-intended"]}`}
            >
              We believe that by creating value for people we make the world a
              happier place.
            </p>
            <p className={`${st["founder-description-text"]} ${st["mt20"]}`}>
              Based on our experience and innovative approach in marketing. Our
              clients implement their values and ideas, integrating sustainable
              development into the foundation of their digital business.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

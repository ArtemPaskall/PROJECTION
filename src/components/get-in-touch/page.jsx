"use client"
import "@/app/styles/globals.scss"
import st from "./get-in-touch.module.scss"
import Image from "next/image"
import { useModal } from "@/context/GetInTouch"

export default function GetInTouch() {
  const { isOpenModal, closeModal } = useModal()

  return (
    <section
      className={`${st["get-in-touch-block"]} ${
        isOpenModal ? st["visible"] : ""
      }`}
    >
      <div className={"main-wrapp"}>
        <div className={st["form-block-background"]}>
          <Image
            src={"/form-bg-1.png"}
            alt={`Form Background`}
            width={300}
            height={500}
            className={st["form-background"]}
          />
          <div className={st["form-content"]}>
            <Image
              src={"/white-cross.svg"}
              alt={`close button`}
              width={40}
              height={40}
              className={st["close-button"]}
              onClick={closeModal}
            />
            <div className={st["form-content-left"]}>
              <h2 className={st["touch-header"]}>
                Ready to discuss your project with us?
              </h2>

              <div className={st["touch-header-2"]}>Choose your industry</div>
              <div className={st["industry-wrapp"]}>
                <div className={st["industry-item"]}>Clothing</div>
                <div className={st["industry-item"]}>Cosmetics</div>
                <div className={st["industry-item"]}>B2B</div>
                <div className={st["industry-item"]}>Electronics</div>
                <div className={st["industry-item"]}>Other sectors</div>
              </div>
              <div
                className={`${st["touch-header-2"]} ${st["touch-header-2-margin"]}`}
              >
                Contact me back at
              </div>
              <form action="" method="post" className={st["send-form"]}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your E-mail"
                />
                <div className={st["button-wrapp"]}>
                  <button type="submit" className={st["form-button"]}>
                    Send a massage{" "}
                    <Image
                      src={"/button-pen.svg"}
                      alt={`Form Background`}
                      width={30}
                      height={30}
                      className={st["button-pen-img"]}
                    />
                  </button>
                  <div className={st["callback-wrapp"]}>
                    <Image
                      src={"/arrow-callback.svg"}
                      alt={`Form Background`}
                      width={56}
                      height={56}
                      className={st["upwork-img"]}
                    />
                    <div className={st["callback-text"]}>
                      Or you can
                      <span className={st["callback-text-bold"]}>
                        {" "}
                        Book a Free Demo Call{" "}
                      </span>
                      at convenient time
                    </div>
                  </div>
                </div>
                <div className={st["policy-text"]}>
                  By sending this form I confirm that I have read and accept the{" "}
                  <span className={st["policy-green-text"]}>
                    {" "}
                    Privacy Policy
                  </span>{" "}
                </div>
              </form>
            </div>
            <div className={st["form-content-right"]}>
              <h2 className={st["upwork-header"]}>
                <Image
                  src={"/upwork.svg"}
                  alt={`Form Background`}
                  width={56}
                  height={56}
                  className={st["upwork-img"]}
                />
                <div>
                  <span className={st["our-text"]}>Our </span>clients say
                </div>
              </h2>
              <div className={st["gray-line"]}></div>
              <div className={st["upwork-rate"]}>
                <Image
                  src={"/star.svg"}
                  alt={`Star Image`}
                  width={24}
                  height={24}
                  className={st["upwork-star"]}
                />
                <div className={st["upwork-rate-value"]}>5.0</div>
                <Image
                  src={"/upwork-text.svg"}
                  alt={`Upwork Logo`}
                  width={90}
                  height={28}
                  className={st["upwork-text"]}
                />
              </div>
              <p className={st["upwork-text-2"]}>
                <span className={st["upwork-text-2-black"]}>
                  "I had a positive experience working with Victor and his team.
                </span>
                They were always quick to respond and very professional in their
                work. I would recommend them to others."
              </p>
              <div className={st["kingdom-wrapp"]}>
                <Image
                  src={"/geo2.svg"}
                  alt={`Upwork Logo`}
                  width={15}
                  height={18}
                  className={st["geo2-img"]}
                />
                United Kingdom
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

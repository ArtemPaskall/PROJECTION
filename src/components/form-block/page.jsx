import "@/app/styles/globals.scss"
import st from "./form-block.module.scss"
import Image from "next/image"

export default function FormBlock() {
  return (
    <div className={st["form-block"]}>
      <div className={st["form-block-gradient"]}>
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
              <div className={st["form-content-left"]}>
                <h2 className={st["form-header"]}>
                  Ready to discuss your project with us?
                </h2>
                <form action="" method="post" className={st["send-form"]}>
                  <div className={st["first-line-wrapp"]}>
                    <input
                      type="text"
                      name="full-name"
                      required
                      placeholder="Full Name*"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="E-mail*"
                    />
                  </div>
                  <input
                    type="text"
                    name="link"
                    placeholder="Link your store"
                  />
                  <input type="text" name="about" placeholder="About Project" />
                  <div className={st["button-wrapp"]}>
                    <div className={st["policy-text"]}>
                      By sending this form I confirm that I have read and accept
                      the{" "}
                      <span className={st["policy-green-text"]}>
                        {" "}
                        Privacy Policy
                      </span>{" "}
                    </div>
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
                    "I had a positive experience working with Victor and his
                    team.
                  </span>
                  They were always quick to respond and very professional in
                  their work. I would recommend them to others."
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
      </div>
    </div>
  )
}

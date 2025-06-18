import "@/app/styles/globals.scss"
import st from "./footer.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className={st["footer"]}>
      <Image
        src={"/footer-gradient.png"}
        alt={`Footer Background`}
        width={300}
        height={500}
        className={st["footer-gradient"]}
      />{" "}
      <Image
        src={"/gradient-mobile.png"}
        alt={`Footer Background`}
        width={300}
        height={500}
        className={st["footer-gradient-mobile"]}
      />
      <div className="main-wrapp">
        <div className={st["footer-wrapp"]}>
          <div className={st["footer-wrapp-left"]}>
            <div className={st["footer-vertical-alignment"]}>
              <div>
                <h2 className={st["footer-header"]}>
                  Let's discuss your project
                </h2>
                <button
                  type="button"
                  className={st["footer-lets-discuss-mobile"]}
                >
                  <Image
                    src={"/lets-discuss.svg"}
                    alt={`Footer Background`}
                    width={45}
                    height={45}
                    className={st["footer-lets-discuss-img"]}
                  />
                  <div style={{ maxWidth: "100px" }}>let’s discuss</div>
                </button>
                <div className={st["footer-email"]}>
                  <Image
                    src={"/email-img.svg"}
                    alt={`Footer Background`}
                    width={20}
                    height={30}
                    className={st["footer-email-img"]}
                  />
                  team@unknown.marketing
                </div>
              </div>
              <div className={st["footer-bottom-text"]}>
                ©2024 UM. All rights reserved.
              </div>
            </div>
          </div>
          <div className={st["footer-wrapp-right"]}>
            <div className={st["footer-menu"]}>
              <div className={st["footer-vertical-alignment"]}>
                <div>
                  <div className={st["footer-header-small"]}>Menu</div>
                  <nav>
                    <ul className={st["footer-menu-list"]}>
                      <li>
                        <Link href={"/"}>SERVICES</Link>
                      </li>
                      <li>
                        <Link href={"/"}>OUR APPROACH</Link>
                      </li>
                      <li>
                        <Link href={"/"}>PROJECTS</Link>
                      </li>
                      <li>
                        <Link href={"/"}>ABOUT US</Link>
                      </li>
                      <li>
                        <Link href={"/"}>blog</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <Link href="/" className={st["footer-bottom-text"]}>
                  Term of use
                </Link>
              </div>
            </div>
            <div className={st["footer-social"]}>
              <div className={st["footer-vertical-alignment"]}>
                <div>
                  <div className={st["footer-header-small"]}>Our Social:</div>
                  <nav>
                    <ul className={st["footer-social-list"]}>
                      <li>
                        <Link href={"/"}>
                          <Image
                            src={"/insta.svg"}
                            alt={`Instagram`}
                            width={75}
                            height={75}
                            className={st["social-img"]}
                          />
                          <div className={st["social-link"]}>instagram</div>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"}>
                          <Image
                            src={"/telegram.svg"}
                            alt={`Instagram`}
                            width={75}
                            height={75}
                            className={st["social-img"]}
                          />
                          <div className={st["social-link"]}>Telegram</div>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"}>
                          <Image
                            src={"/linkedin.svg"}
                            alt={`Instagram`}
                            width={75}
                            height={75}
                            className={st["social-img"]}
                          />
                          <div className={st["social-link"]}>linkedin</div>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <Link href="/" className={st["footer-bottom-text"]}>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className={st["footer-policy-mobile"]}>
            <Link
              href="/"
              className={`${st["footer-bottom-text"]} ${st["footer-bottom-text-mobile"]}`}
            >
              Term of use
            </Link>
            <Link
              href="/"
              className={`${st["footer-bottom-text"]} ${st["footer-bottom-text-mobile"]}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className={`${st["footer-bottom-text"]} ${st["footer-bottom-text-mobile"]} ${st["footer-copyright-mobile"]}`}
            >
              ©2024 UM. All rights reserved.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

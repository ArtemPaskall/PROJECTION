"use client"
import st from "./header.module.scss"
import "@/app/styles/globals.scss"
import Image from "next/image"
import Link from "next/link"
import MenuOpen from "../menu-open/page.jsx"
import { useBackgroundContext } from "@/context/BackgroundContext"
import { useEffect, useState } from "react"
import { useModal } from "@/context/GetInTouch"

export default function Header() {
  const { blurBackground, unBlurBackground } = useBackgroundContext()
  const { openModal } = useModal()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={st["header"]}>
        <div className="main-wrapp">
          <div
            className={`${st["header-wrapp"]} ${
              scrolled ? st["header-scrolled"] : ""
            }`}
          >
            <div className={st["header-wrapp-left"]}>
              <Link href={"/"}>
                <Image
                  src="/Logo.svg"
                  height={32}
                  width={73}
                  alt="UM Logo"
                  className={st["main-logo-img"]}
                />
              </Link>
              <nav className={st["nav"]}>
                <ul className={st["main-menu"]}>
                  <li>
                    <Link href="/">SERVICES</Link>
                  </li>
                  <li>
                    <Link href="/">OUR APPROACH</Link>
                  </li>
                  <li>
                    <Link href="/">PROJECTS</Link>
                  </li>
                  <li
                    className={st["menu-block-arrow"]}
                    onMouseEnter={blurBackground}
                    onMouseLeave={unBlurBackground}
                  >
                    <Link href="/">ABOUT US</Link>
                    <Image
                      src="/arrow-menu.svg"
                      width={5}
                      height={5}
                      alt="arrow"
                      className={st["arrow-menu-img"]}
                    />
                    <div className={st["submenu"]}>
                      <Link href="/">About us</Link>
                      <Link href="/">Career Hub</Link>
                    </div>
                  </li>
                  <li
                    className={st["menu-block-arrow"]}
                    onMouseEnter={blurBackground}
                    onMouseLeave={unBlurBackground}
                  >
                    <Link href="/">blog</Link>
                    <Image
                      src="/arrow-menu.svg"
                      height={8}
                      width={5}
                      alt="arrow"
                      className={st["arrow-menu-img"]}
                    />
                    <div className={st["submenu"]}>
                      <Link href="/">Blog 1</Link>
                      <Link href="/">Blog 2</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={st["header-wrapp-right"]}>
              <button
                type="button"
                className={st["lets-talk-button"]}
                onClick={openModal}
              >
                Let’s talk
                <Image
                  src={"/lets-talk.svg"}
                  alt="Lets Talk Image"
                  width={32}
                  height={32}
                  className={st["lets-talk-image"]}
                />
              </button>
            </div>
            <div
              className={st["header-wrapp-right--mobile"]}
              onClick={openModal}
            >
              <Image
                src={"/lets-talk.svg"}
                alt="Lets Talk Image"
                width={32}
                height={32}
                className={st["lets-talk-image--mobile"]}
              />
              <MenuOpen />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

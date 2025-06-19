"use client"
import React from "react"
import st from "./mobile-menu.module.scss"
import Link from "next/link"
import Image from "next/image"
import { useMenu } from "@/context/MenuContext"

export default function MobileMenu() {
  const { isMenuOpen, closeMenu } = useMenu()

  return (
    <div className={`${st["mobile-menu"]} ${isMenuOpen ? st.open : ""}`}>
      <Image
        src={"/footer-gradient.png"}
        alt="close menu"
        width={25}
        height={25}
        className={st["mobile-menu-bg"]}
      />
      <div className={st["menu-close"]}>
        <Image
          src={"/white-cross.svg"}
          alt="close menu"
          width={25}
          height={25}
          className={st["menu-close-img"]}
          onClick={closeMenu}
        />
      </div>
      <nav>
        <ul className={st["mobile-menu-list"]}>
          <li>
            <Link href="/" onClick={closeMenu}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/" onClick={closeMenu}>
              OUR APPROACH
            </Link>
          </li>
          <li>
            <Link href="/" onClick={closeMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/" onClick={closeMenu}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/" onClick={closeMenu}>
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

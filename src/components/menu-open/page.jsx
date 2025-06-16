"use client"
import st from "./menu-open.module.scss"
import Image from "next/image"
import { useMenu } from "@/context/MenuContext"

export default function MenuOpen() {
  const { openMenu } = useMenu()

  return (
    <>
      <Image
        src={"/burger-menu.svg"}
        alt="Lets Talk Image"
        width={32}
        height={32}
        className={st["burger-menu-image"]}
        onClick={openMenu}
      ></Image>
    </>
  )
}

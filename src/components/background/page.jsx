"use client"
import { useBackgroundContext } from "@/context/BackgroundContext"
import styles from "./background.module.scss"

export default function Background({ children }) {
  const { isBackgroundBlurred } = useBackgroundContext()

  return (
    <div className={styles.wrapper}>
      {children}
      <div
        className={`${styles.overlay} ${
          isBackgroundBlurred ? styles.active : ""
        }`}
      />
    </div>
  )
}

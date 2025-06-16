"use client"
import { createContext, useContext, useState } from "react"

const BackgroundContext = createContext()

export function BackgroundProvider({ children }) {
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false)

  const blurBackground = () => {
    setIsBackgroundBlurred(true)
  }
  const unBlurBackground = () => {
    setIsBackgroundBlurred(false)
  }

  return (
    <BackgroundContext.Provider
      value={{ isBackgroundBlurred, blurBackground, unBlurBackground }}
    >
      {children}
    </BackgroundContext.Provider>
  )
}

export function useBackgroundContext() {
  return useContext(BackgroundContext)
}

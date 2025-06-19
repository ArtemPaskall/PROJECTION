"use client"
import { createContext, useContext, useState } from "react"

const GetInTouchContext = createContext()

export const GetInTouchProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  return (
    <GetInTouchContext.Provider value={{ isOpenModal, openModal, closeModal }}>
      {children}
    </GetInTouchContext.Provider>
  )
}

export const useModal = () => useContext(GetInTouchContext)

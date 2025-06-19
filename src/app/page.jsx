"use client"
import Header from "@/components/header/page.jsx"
import MobileMenu from "@/components/mobile-menu/page.jsx"
import Hero from "@/components/hero/page.jsx"
import Background from "@/components/background/page.jsx"
import WayWork from "@/components/way-work/page.jsx"
import VideoBlock from "@/components/video-block/page.jsx"
import FounderBlock from "@/components/founder-block/page.jsx"
import CirclesBlock from "@/components/circles-block/page.jsx"
import CardBlock from "@/components/card-block/page.jsx"
import FormBlock from "@/components/form-block/page.jsx"
import Footer from "@/components/footer/page.jsx"
import GetInTouch from "@/components/get-in-touch/page.jsx"

import "./styles/globals.scss"

export default function Home() {
  return (
    <>
      <GetInTouch />
      <MobileMenu />
      <Header />
      <Background>
        <Hero />
        <VideoBlock />
        <FounderBlock />
        <CirclesBlock />
        <WayWork />
        <CardBlock />
        <FormBlock />
        <Footer />
      </Background>
    </>
  )
}

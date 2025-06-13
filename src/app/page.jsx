"use client";
import Header from "@/components/header/page.jsx";
import MobileMenu from "@/components/mobile-menu/page.jsx";
import Hero from "@/components/hero/page.jsx";
import DarkBackground from "@/components/background/page.jsx";
import WayWork from "@/components/way-work/page.jsx";
import "./styles/globals.scss";

export default function Home() {
  return (
    <div>
      <MobileMenu />
      <DarkBackground />
      <Header />
      <Hero />
      <WayWork />
      Hello world!
    </div>
  );
}

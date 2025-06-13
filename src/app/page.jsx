"use client";
import Header from "@/components/header/page.jsx";
import MobileMenu from "@/components/mobile-menu/page.jsx";
import Hero from "@/components/hero/page.jsx";
import "./styles/globals.scss";

import DarkBackground from "@/components/background/page.jsx";

export default function Home() {
  return (
    <div>
      <MobileMenu />
      <DarkBackground />
      <Header />
      <Hero />
      Hello world!
    </div>
  );
}

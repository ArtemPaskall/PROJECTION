import st from "./header.module.scss";
import "@/app/styles/globals.scss";
import Image from "next/image";
import Link from "next/link";
import MenuOpen from "../menu-open/page.jsx";

export default function Header() {
  return (
    <div className={st["header"]}>
      <div className="main-wrapp">
        <div className={st["header-wrapp"]}>
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
                <li>
                  <Link href="/">ABOUT US</Link>
                </li>
                <li>
                  <Link href="/">blog</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={st["header-wrapp-right"]}>
            <button type="button" className={st["lets-talk-button"]}>
              Let’s talk
              <Image
                src={"/lets-talk.svg"}
                alt="Lets Talk Image"
                width={32}
                height={32}
                className={st["lets-talk-image"]}
              ></Image>
            </button>
          </div>
          <div className={st["header-wrapp-right--mobile"]}>
            <Image
              src={"/lets-talk.svg"}
              alt="Lets Talk Image"
              width={32}
              height={32}
              className={st["lets-talk-image--mobile"]}
            ></Image>
            <MenuOpen />
          </div>
        </div>
      </div>
    </div>
  );
}

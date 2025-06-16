// import "@/app/styles/globals.scss"
// import st from "./videoBlock.module.scss"
// import Image from "next/image"

// export default function VideoBlock() {
//   return (
//     <section className="main-wrapp">
//       <div className={st["video"]}>
//         <Image
//           src="/video-bg.png"
//           width={1920}
//           height={1080}
//           alt="video background"
//           className={st["videoBg"]}
//         />
//         <div className={st["play-button"]}>
//           <div>
//             <span className={st["button-text"]}>Play</span> Showreel
//           </div>
//           <Image
//             src="/play-button.svg"
//             width={10}
//             height={10}
//             alt="video play"
//             className={st["video-play"]}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"
import { useState } from "react"
import "@/app/styles/globals.scss"
import st from "./videoBlock.module.scss"
import Image from "next/image"

export default function VideoBlock() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="main-wrapp">
      <div className={st["video"]}>
        <Image
          src="/video-bg.png"
          width={1920}
          height={1080}
          alt="video background"
          className={st["videoBg"]}
        />
        <div className={st["play-button"]} onClick={() => setIsPopupOpen(true)}>
          <div>
            <span className={st["button-text"]}>Play</span> Showreel
          </div>
          <Image
            src="/play-button.svg"
            width={10}
            height={10}
            alt="video play"
            className={st["video-play"]}
          />
        </div>

        {isPopupOpen && (
          <div
            className={st["popup-overlay"]}
            onClick={() => setIsPopupOpen(false)}
          >
            <div
              className={st["popup-content"]}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={st["close-btn"]}
                onClick={() => setIsPopupOpen(false)}
              >
                <Image
                  src="/close-button.png"
                  width={30}
                  height={40}
                  alt="video play"
                />
              </button>
              <video controls autoPlay className={st["video-frame"]}>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

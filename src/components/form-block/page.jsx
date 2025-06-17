import "@/app/styles/globals.scss"
import st from "./form-block.module.scss"
import Image from "next/image"

export default function FormBlock() {
  return (
    <div className={st["form-block"]}>
      <div className={st["form-block-gradient"]}>
        <div className={"main-wrapp"}>
          <div className={st["form-block-background"]}>
            <Image
              src={"/form-bg-1.png"}
              alt={`Form Background`}
              width={300}
              height={500}
              className={st["form-background"]}
            />
            <div className={st["form-content"]}>
              <div className={st["form-content-left"]}>
                <h2 className={st["form-header"]}>
                  Ready to discuss your project with us?
                </h2>
                <form action="" method="post">
                  <input
                    type="text"
                    name="full-name"
                    required
                    placeholder="Full Name*"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail*"
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="Link your store"
                  />
                  <input type="text" name="about" placeholder="About Project" />
                </form>
              </div>
              <div className={st["form-content-right"]}>
                <div>asdfasdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

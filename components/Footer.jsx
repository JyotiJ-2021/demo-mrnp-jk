import Link from "next/link"
import React from "react"
import { footer } from "../app/styles/common"

const Footer = () => {
  return (
    <footer className={footer.footer_box}>
      <div className={footer.footer_container}>
        <div className={footer.footer_content}>
          <div className={footer.logo_box}>
            <h2 className={footer.logo}>JOY</h2>
          </div>

          <div className={footer.social_box}>
            <h3 className={footer.follow}>Follow : </h3>
            <div className={footer.link}>
              {/* <Link href="https://github.com/JyotiJ-2021/">
                <img src="/github.svg" alt="logo" className={footer.icon} />
              </Link> */}
              <Link href="https://www.linkedin.com/in/jyoti-kumari-74b921213/">
                <img src="/linkedln.png" alt="logo" className={footer.icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

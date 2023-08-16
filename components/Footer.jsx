"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { footer } from "../app/styles/common"
import axios from "axios"

const Footer = () => {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    axios
      .get("/api/getCookies")
      .then((res) => {
        setIsAuth(res.data.isAuthenticated)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    isAuth && (
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
  )
}

export default Footer

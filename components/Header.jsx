"use client"
import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { header } from "../app/styles/common"
import axios from "axios"
import { useRouter } from "next/navigation"

const Header = () => {
  const path = usePathname()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Posts", href: "/posts" },
  ]

  useEffect(() => {
    axios
      .get("/api/getCookies")
      .then((res) => {
        setIsAuth(res.data.isAuthenticated)
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const logout = async () => {
    try {
      await axios.get("/api/logout")
      window.location.reload()
      router.push("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div className={header.box}>
        {isAuth ? (
          <ul className={header.nav}>
            {navItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`${
                      item.href === path
                        ? header.nav_active
                        : header.nav_inactive
                    } ${header.nav_link} `}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <h2 className="text-2xl text-sky-800 font-bold">JOY</h2>
        )}
        <div className={header.nav_right}>
          {!isAuth ? (
            <>
              <Link href="/login"> Login</Link> |
              <Link href="/register"> Register</Link>
            </>
          ) : (
            <p onClick={logout} className="cursor-pointer">
              Logout
            </p>
          )}
        </div>
      </div>
      <div className={header.mb_box}>
        {open ? (
          <>
            <div className={header.logo_box}>
              <h2 className={header.logo}>JOY</h2>
              <svg
                onClick={() => setOpen(false)}
                className={`${header.close} z-50 bg-white`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            {isAuth && (
              <ul className={header.mb_nav}>
                {navItems.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={header.lists}
                      onClick={() => setOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`${
                          item.href === path
                            ? header.nav_active
                            : header.nav_inactive
                        } ${header.mb_nav_link} `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
            <div className={header.mb_nav_right}>
              {!isAuth ? (
                <>
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                  |
                  <Link href="/register" onClick={() => setOpen(false)}>
                    Register
                  </Link>
                </>
              ) : (
                <p onClick={logout}> Logout</p>
              )}

              {/**todo show logout when user login and hide login and register */}
            </div>
          </>
        ) : (
          <>
            <div className={`${header.logo_box} mb-0`}>
              <Link href="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={header.profile}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
              <h2 className={`${header.logo} `}>JOY</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={header.close}
                onClick={() => setOpen(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Header

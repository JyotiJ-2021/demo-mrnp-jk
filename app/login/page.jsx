"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { login } from "../styles/common"

const Login = () => {
  const [inputs, setInputs] = useState({})
  const [showMessage, setMessage] = useState()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    axios
      .post("/api/login", inputs)
      .then((res) => {
        setLoading(false)

        router.push("/")
        if (res.data.message === "Invalid Password") {
          setMessage("You are not logged in yet, please try to register first")
        } else {
          router.push("/")
          window.location.reload()
          setInputs({})
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChange = (e) => {
    setMessage()

    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({ ...prevState, [name]: value }))
    if (
      inputs.email &&
      inputs.email.length > 0 &&
      inputs.password &&
      inputs.password.length > 0
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }

  return (
    <div className={login.box}>
      <form onSubmit={handleSubmit}>
        <h2 className={login.heading}>Login</h2>
        <div className="mb-4 ">
          <label className={login.label} htmlFor="email">
            Email
          </label>
          <input
            className={login.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className={login.label} htmlFor="password">
            Password
          </label>
          <input
            className={login.input}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        <button
          className={login.button}
          type="submit"
          disabled={buttonDisabled}
        >
          Submit {loading && "loading..."}
        </button>
        <div className={login.content}>
          <Link href="/register" variant="body2">
            Don't have an account ? Register
          </Link>
        </div>
        <div className="mt-4">
          {showMessage && (
            <div className={login.message}>
              {showMessage}
              <div className="text-center">or</div>
              <span className="text-red-700">
                Invalid username or password.
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login

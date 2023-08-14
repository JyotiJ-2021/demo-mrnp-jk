"use client"
import { countries } from "../../utils/country"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { register } from "../styles/common"

const Register = () => {
  const router = useRouter()
  const [showMessage, setMessage] = useState()
  const [inputs, setInputs] = useState({})
  const [state, setState] = useState([])
  const [confirmPassword, setConfirmPassword] = useState()
  const [checkPassword, setCheckPassword] = useState()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    axios
      .post("/api/register", inputs)
      .then((res) => {
        if (res.data.message === "Register successful") {
          setLoading(false)
          router.push("/login")
          setInputs({})
          setState([])
        } else {
          setMessage(
            "An account with this username/email already exists. Please log in or use a different email to register."
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChange = (e) => {
    setCheckPassword()

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

  const handleCountry = (e) => {
    const getcountryId = e.target.value
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    const getState = countries.find(
      (country) => country.country === getcountryId
    ).states
    setState(getState)
  }

  const matchPassword = (e) => {
    setConfirmPassword(e.target.value)

    if (inputs.password === e.target.value) {
      setCheckPassword("Password match")
      setTimeout(() => {
        setCheckPassword()
      }, 1000)
    } else {
      setCheckPassword("Password not match")
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function isValidPassword(password) {
    const minLength = 8
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\/\\]/.test(
      password
    )

    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter
    )
  }
  console.log(inputs.gender)
  return (
    <div className={register.box}>
      <form className="mb-4" onSubmit={handleSubmit}>
        <h2 className={register.heading}>Sign Up</h2>
        <div className="mb-4">
          <label className={register.label} htmlFor="name">
            Name
          </label>

          <input
            className={register.input}
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 relative">
          <label className={register.label} htmlFor="email">
            Email
          </label>
          <input
            className={register.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Name"
            required
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <div className="absolute -bottom-4 text-xs  text-red-400 animate-fade-in">
            {inputs.email && !isValidEmail(inputs.email) && (
              <p className="text-red-500">Email is not valid</p>
            )}
          </div>
        </div>
        <div className="mb-4 relative">
          <label className={register.label} htmlFor="password">
            Password
          </label>
          <input
            className={register.input}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <div className={register.error}>
            {inputs.password && !isValidPassword(inputs.password) && (
              <p className="text-red-500">Password is not strong enough.</p>
            )}
          </div>
        </div>

        <div className="mb-4 relative">
          <label className={register.label} htmlFor="confpassword">
            Confirm Password
          </label>
          <input
            className={register.input}
            type="password"
            id="confpassword"
            name="confpassword"
            placeholder="Enter Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => matchPassword(e)}
          />
          <div className={register.error}>
            {checkPassword && (
              <span className="text-green-500">{checkPassword}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className={register.label} htmlFor="country">
            Country
          </label>
          <select
            className={register.select}
            id="country"
            name="country"
            placeholder="Select Country"
            required
            onChange={(e) => handleCountry(e)}
          >
            <option selected className={register.option}>
              Select Country
            </option>
            {countries.map((item, i) => {
              return (
                <option key={i} value={item.country}>
                  {item.country}
                </option>
              )
            })}
          </select>
        </div>
        <div className="mb-4">
          <label className={register.label} htmlFor="state">
            State
          </label>
          <select
            className={register.select}
            id="state"
            name="state"
            placeholder="Select State"
            required
            onChange={(e) => handleChange(e)}
          >
            {state.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <div className="mb-4">
          <label className={register.label} htmlFor="gender">
            Gender
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
              required
            />
            <label className={register.gender} htmlFor="male">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              required
            />
            <label className={register.gender} htmlFor="female">
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              required
              onChange={handleChange}
            />
            <label className={register.gender} htmlFor="other">
              Other
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className={register.label} htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            className={register.input}
            type="number"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter Contact Number"
            required
            value={inputs.contactNumber || ""}
            onChange={handleChange}
          />
        </div>
        <button
          className={register.button}
          type="submit"
          disabled={buttonDisabled}
        >
          Sign Up
        </button>

        <div className={register.link}>
          <Link href="/login" variant="body2">
            Already have an account ? Login
          </Link>
        </div>

        <div className="mt-4">
          {showMessage && <div className={register.message}>{showMessage}</div>}
        </div>
      </form>
    </div>
  )
}

export default Register

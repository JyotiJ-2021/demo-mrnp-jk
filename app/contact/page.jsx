"use client"
import React, { useState } from "react"
import axios from "axios"
import { contact } from "../styles/common"

const ContactPage = () => {
  const [inputs, setInputs] = useState({})
  const [show, setShow] = useState(false)
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setInputs({})

    axios
      .post("/api/contact", inputs)
      .then((res) => {
        setShow(true)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setInputs({})
      })
  }

  return (
    <div className={contact.box}>
      <h4 className={contact.join}>Join Our Team</h4>
      {show ? (
        <p className={contact.message}>
          Thanks for being awesome! We have received your message and would like
          to thank you for writing to us.
        </p>
      ) : (
        <form className={contact.form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className={contact.label}>
              Name:
            </label>

            <input
              type="text"
              name="name"
              className={contact.input}
              placeholder="Enter Name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={contact.label}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              className={contact.input}
              placeholder="Enter Email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={contact.label}>
              Message:
            </label>
            <textarea
              name="message"
              rows="4"
              className={contact.textarea}
              placeholder="Write your message here"
              value={inputs.message || ""}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className={contact.button}>
            Connect
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactPage

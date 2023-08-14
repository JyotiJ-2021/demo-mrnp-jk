"use client"
import React, { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { useRouter } from "next/navigation"

const AddPost = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setInputs({})

    axios
      .post("/api/todo", inputs)
      .then((res) => {
        console.log("hello")
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setInputs({})
        setModalOpen(false)
        router.refresh()
      })
  }
  return (
    <div className="text-right mb-4 mt-2">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-sky-800 hover:bg-sky-600 text-white  py-2 px-4 rounded"
      >
        Add new post
      </button>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        style={{ background: "red" }}
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div
            onClick={() => setModalOpen(false)}
            className=" text-2xl text-gray-800 relative"
          >
            <h1 className="text-2xl text-center mb-4">Add new post</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              onClick={() => setModalOpen(false)}
              className="w-6 h-6 absolute right-0 top-0 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
              className="w-full mb-4 p-2 border text-gray-800 border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
              className="w-full mb-4 p-2 border text-gray-800 border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default AddPost

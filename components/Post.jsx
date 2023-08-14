"use client"
import React, { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { useRouter } from "next/navigation"

const Post = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [edit, setEdit] = useState(post)
  const router = useRouter()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEdit((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .patch(`/api/todo/${post.id}`, edit)
      .then((res) => {
        console.log("hello")
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setModalOpen(false)
        router.refresh()
      })
  }

  const handleDelete = (id) => {
    axios
      .delete(`/api/todo/${id}`)
      .then((res) => {
        console.log("hello")
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setModalDeleteOpen(false)
        router.refresh()
      })
  }

  return (
    <div
      key={post.id}
      className="m-2 w-full md:w-1/3  max-w-md  bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="p-4 text-left">
        <h2 className="text-sm text-gray-500 font-bold ">{post.title}</h2>
        <p className="text-sm text-gray-500 mt-2">{post.description}</p>
      </div>

      <div className="flex justify-end px-4 pb-4">
        <button
          type="submit"
          onClick={() => setModalOpen(true)}
          className="text-blue-600 hover:underline focus:outline-none mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>

        <button
          type="submit"
          onClick={() => setModalDeleteOpen(true)}
          className="text-red-600 hover:underline focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>

      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        style={{ background: "red" }}
      >
        <div className="bg-white rounded-lg shadow-lg  p-8 text-sky-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl mb-8 relative">
              Edit Post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute right-0 top-0 cursor-pointer"
                onClick={() => setModalOpen(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </h1>

            <input
              type="text"
              placeholder="Title"
              name="title"
              value={edit.title || ""}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              placeholder="Description"
              name="description"
              value={edit.description || ""}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-blue-600 border rounded p-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="text-white bg-blue-600 border rounded p-2 border-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        modalOpen={modalDeleteOpen}
        setModalOpen={setModalDeleteOpen}
        style={{ background: "red" }}
      >
        <div className="bg-white rounded-lg shadow-lg  p-8 text-sky-800">
          <h1 className="text-2xl mb-8 relative">
            Delete Post{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={() => setModalDeleteOpen(false)}
              className="w-6 h-6 absolute right-0 top-0 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </h1>
          <h1 className="mb-8">Are you sure you want to delete this post?</h1>
          <div>
            <button
              type="submit"
              onClick={() => setModalDeleteOpen(false)}
              className="text-blue-600 border rounded p-2 border-blue-600 hover:bg-blue-600 hover:text-white  focus:outline-none mr-2"
            >
              No
            </button>
            <button
              type="submit"
              onClick={() => handleDelete(post.id)}
              className="text-blue-600 border rounded p-2 border-blue-600 hover:bg-blue-600 hover:text-white  focus:outline-none mr-2"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Post

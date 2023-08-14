"use client"
import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [data, setData] = useState([])
  const logout = async () => {
    try {
      await axios.get("/api/logout")
      router.push("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get("/api/profile")
      setData(res.data.data)
    }

    fetchUser()
  }, [])

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <hr className="my-4" />

      {data && (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-left">Name:</p>
            <p className="text-left">{data.name}</p>
          </div>
          <div>
            <p className="font-semibold text-left">Email:</p>
            <p className="text-left">{data.email}</p>
          </div>
          <div>
            <p className="font-semibold text-left">Country:</p>
            <p className="text-left">{data.country}</p>
          </div>
          <div>
            <p className="font-semibold text-left">State:</p>
            <p className="text-left">{data.state}</p>
          </div>
          <div>
            <p className="font-semibold text-left">Contact Number:</p>
            <p className="text-left">{data.contactNumber}</p>
          </div>
          <div>
            <p className="font-semibold text-left">Gender:</p>
            <p className="text-left">{data.gender}</p>
          </div>
        </div>
      )}
      <hr className="my-4" />

      <button //remove logout from here
        onClick={logout}
        className="bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  )
}

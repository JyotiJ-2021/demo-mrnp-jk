"use client"
import axios from "axios"
import React, { useEffect, useState } from "react"

export default function ProfilePage() {
  const [data, setData] = useState([])

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
    </div>
  )
}

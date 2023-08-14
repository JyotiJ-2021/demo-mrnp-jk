import React from "react"

const ProfileUser = ({ params }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p className="text-4xl">Profile Page {params.id}</p>
      </div>
    </div>
  )
}

export default ProfileUser

"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import AddPost from "../../components/AddPost"
import PostList from "../../components/PostList"

const CURD = () => {
  const [posts, setPosts] = useState()

  async function fetchData() {
    const response = await axios.get("http://localhost:3000/api/todo")
    console.log(response.data)
    setPosts(response.data)
  }
  fetchData()

  return (
    <div>
      <h4 className="text-2xl mb-4">Todo List</h4>
      <AddPost />
      {posts && <PostList posts={posts} />}
    </div>
  )
}

export default CURD

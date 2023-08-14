import React from "react"
import Post from "./Post"

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-wrap text-center w-full  justify-center ">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList

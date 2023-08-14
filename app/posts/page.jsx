import React from "react"
async function getPostsData() {
  const res = await fetch("https://dummyjson.com/products")
  await new Promise((reslove) => setTimeout(reslove, 3000))
  return res.json()
}

const Posts = async () => {
  const posts = await getPostsData()

  //search by brand category title price
  //detail page
  //cart
  //wishlist
  //redux

  return (
    <>
      <h4 className="text-2xl text-left">Posts</h4>
      <div class=" ">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.products.map((item, i) => (
            <li
              key={i}
              className="bg-white text-left shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {item.discountPercentage && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
                    {item.discountPercentage}% Off
                  </span>
                )}
              </div>
              <div className="p-4">
                {" "}
                <h3 className="text-lg text-left font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-gray-500 text-sm mb-1">
                  Brand: {item.brand}
                </p>
                <p className="text-gray-500 text-sm">
                  Category: {item.category}
                </p>
                <div className="flex justify-between">
                  <p className="  text-sky-600 text-lg font-semibold mb-2">
                    ${item.price}{" "}
                  </p>
                  <p className="text-yellow-500 text-sm mb-1">
                    &#9733; : {item.rating}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Posts

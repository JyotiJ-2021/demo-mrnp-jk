import { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

export const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("todotoken")?.value || ""
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)

    return decodedToken.email
  } catch (error) {
    throw new Error(error.message)
  }
}

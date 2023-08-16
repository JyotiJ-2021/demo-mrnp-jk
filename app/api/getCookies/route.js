import jwt, { decode } from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function GET(request) {
  const token = request.cookies.get("todotoken") || ""
  const decodedToken =
    token && jwt.verify(token.value, process.env.TOKEN_SECRET)
  if (decodedToken) {
    return NextResponse.json({ isAuthenticated: true }, { status: 200 })
  }
  return NextResponse.json({ isAuthenticated: false }, { status: 200 })
}

import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { email, password } = body

    const users = await prisma.users.findUnique({
      where: {
        email: email,
        password: password,
      },
    })
    console.log(users)
    if (users) {
      const tokenData = {
        id: users._id,
        username: users.name,
        email: users.email,
      }
      //create token
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      })
      const response = NextResponse.json({
        message: "Login successful",
        success: true,
      })
      response.cookies.set("todotoken", token, {
        httpOnly: true,
      })
      return response
    } else {
      return NextResponse.json({ message: "Invalid Password" }, { status: 200 })
    }
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: "User not found", err },
      { status: 500 }
    )
  }
}

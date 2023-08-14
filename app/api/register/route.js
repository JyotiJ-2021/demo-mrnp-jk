import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

export const POST = async (request) => {
  try {
    const body = await request.json()

    const { name, email, password, gender, country, state, contactNumber } =
      body

    const usersExists = await prisma.users.findUnique({
      where: {
        email,
      },
    })

    if (usersExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 200 }
      )
    } else {
      const contact = JSON.parse(contactNumber)
      const salt = await bcryptjs.genSalt(10)
      const hashedPassword = await bcryptjs.hash(password, salt)

      await prisma.users.create({
        data: {
          name,
          email,
          password: hashedPassword,
          gender,
          country,
          state,
          contactNumber: contact,
        },
      })
      return NextResponse.json(
        { message: "Register successful" },
        { status: 200 }
      )
    }
  } catch (err) {
    return NextResponse.json({ message: " error found ", err }, { status: 500 })
  }
}

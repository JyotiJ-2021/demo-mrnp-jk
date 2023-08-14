import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const connectInfo = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json(connectInfo)
  } catch (err) {
    return NextResponse.json({ message: "Contact error", err }, { status: 500 })
  }
}

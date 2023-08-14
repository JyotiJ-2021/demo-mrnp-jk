import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { title, description } = body

    const newPsot = await prisma.todo.create({
      data: {
        title,
        description,
        like: 0,
        dislike: 0,
      },
    })

    return NextResponse.json(newPsot)
  } catch (err) {
    return NextResponse.json({ message: "Post error", err }, { status: 500 })
  }
}

export const GET = async () => {
  try {
    const newPsot = await prisma.todo.findMany()

    return NextResponse.json(newPsot)
  } catch (err) {
    return NextResponse.json({ message: "Get error", err }, { status: 500 })
  }
}

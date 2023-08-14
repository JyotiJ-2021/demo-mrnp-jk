import prisma from "../../../libs/prismadb"
import { NextResponse } from "next/server"

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json()
    const { title, description } = body

    const { id } = params
    const updatePost = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    })

    if (!updatePost) {
      return NextResponse.json(
        { message: "Post not found", err },
        { status: 404 }
      )
    }

    return NextResponse.json(updatePost)
  } catch (err) {
    return NextResponse.json({ message: "update error", err }, { status: 500 })
  }
}

export const GET = async (request, { params }) => {
  try {
    const { id } = params
    const newPsot = await prisma.todo.findUnique({
      where: {
        id,
      },
    })

    if (!newPsot) {
      return NextResponse.json(
        { message: "Post not found", err },
        { status: 404 }
      )
    }

    return NextResponse.json(newPsot)
  } catch (err) {
    return NextResponse.json({ message: "Get error", err }, { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params
    const newPsot = await prisma.todo.delete({
      where: {
        id,
      },
    })

    return NextResponse.json("Post has been deleted")
  } catch (err) {
    return NextResponse.json({ message: "Deleted error", err }, { status: 500 })
  }
}

import prisma from "../../libs/prismadb"
import { getDataFromToken } from "../../../utils/getDataFromToken"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request)

    const user = await prisma.users.findUnique({
      where: {
        email: userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        gender: true,
        state: true,
        country: true,
        contactNumber: true,
      },
    })

    return NextResponse.json({
      message: "User found",
      data: user,
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    console.log("reached here")
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    })
    response.cookies.set("todotoken", "", {
      httpOnly: true,
      expires: new Date(0),
    })

    console.log(response)

    return response
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

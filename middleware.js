import { NextResponse } from "next/server"

export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/verifyemail"

  const token = request.cookies.get("todotoken")?.value || ""

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/profile",
    "/login",
    "/register",
    "/verifyemail",
    "/posts",
    "/todo",
    "/contact",
    "/about",
  ],
}

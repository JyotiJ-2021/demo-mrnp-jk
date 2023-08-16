import { NextResponse } from "next/server"
let url = process.env.DOMAIN
export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath =
    path === "/login" ||
    path === "/register" ||
    path === "/api/login" ||
    path === "/api/register"
  const token = request.cookies.get("todotoken")?.value || ""

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(url, request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(
      new URL("/login" || "/api/login", request.nextUrl)
    )
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    `/profile`,
    `/login`,
    `/register`,
    `/posts`,
    `/contact`,
    `/about`,
    "/api/login",
    "/api/register",
    "/api/contact",
    "/api/logout",
    "/api/profile",
    "/api/getCookies",
  ],
}

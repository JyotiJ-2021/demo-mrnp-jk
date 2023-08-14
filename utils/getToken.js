"use client"
import { cookies } from "next/headers"

const cookieStore = cookies()
export const token = cookieStore.get("todotoken") || ""

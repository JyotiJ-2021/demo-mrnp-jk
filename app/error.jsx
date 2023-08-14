"use client"
import Link from "next/link"
import React from "react"

const Error = ({ error, reset }) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-emerald-700 dark:text-emerald-500">
          There was a problem
        </p>

        <h1 className="tracking-tight mt-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          {error} Something went wrong
        </h1>
        <p className="text-base">
          Please try again later or contact support if the problem persists
        </p>

        <div className="justify-center">
          <button onClick={reset}>Try again</button>
          <Link href="/">Go back home </Link>
        </div>
      </div>
    </main>
  )
}

export default Error

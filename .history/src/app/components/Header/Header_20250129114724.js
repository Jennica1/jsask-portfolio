import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <>
      <header className="flex justify-between w-full p-4">
        <div className="flex items-center">
          <Image
            src="Logo.svg"
            width={70}
            height={70}
            alt="logo" />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </div>
      </header>
    </>
  )
}

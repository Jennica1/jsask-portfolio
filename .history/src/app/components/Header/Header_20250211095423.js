import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <>
      <header className="w-full fixed top-0 left-0  flex justify-between z-50 px-6 py-4 bg-[#F9F3ED]">
    

        <div className="flex items-center">
          <Link href="/">
          <Image
            src="/images/Logo.svg"
            width={80}
            height={50}
            alt="logo" />
            </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/#projects">Projects</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </header>
    </>
  )
}

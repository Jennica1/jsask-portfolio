import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center pl-10 pr-10 py-4">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/Logo.svg"
            width={80}
            height={50}
            alt="logo"
          />
        </Link>
      </div>

      <nav className="flex items-center space-x-4">
        <Link href="/#projects">Projects</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  )
}

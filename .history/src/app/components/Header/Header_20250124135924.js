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
            width={50}
            height={50}
            alt="logo" />
        </div>

        <div className="flex items-center space-x-4">
          <button><Link href="/">Home</Link></button>
          <button>Case Study</button>
          <button>Contact</button>
        </div>
      </header>
    </>
  )
}

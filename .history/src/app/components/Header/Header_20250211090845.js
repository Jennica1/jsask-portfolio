import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between pl-10 pr-10 pt-4 shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/Logo.svg" width={80} height={50} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/#projects">Projects</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </header>
  );
}

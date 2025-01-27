import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="flex justify-center flex-col items-center">
      <Header/>
      <h1>Jennica's Portfolio</h1>
    </main>
    </>
  );
}

import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function pocketPals() {
  return(
    <div className="flex justify-center flex-col items-center ">
        <Header/>
        <main>
            <p>hi</p>
            <Image 
            src="/images/Proj_Background.svg"
            width={60}
            height={60}></Image>
        </main>
    </div>
  );
}

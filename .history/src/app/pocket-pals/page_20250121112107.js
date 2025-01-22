import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function pocketPals() {
  return(
    <div className="flex justify-center flex-col items-center ">
        <Header/>
        <main>
            <p>hi</p>
            <div>
            <Image
              src="/images/pocket_pals_img.svg"
              width={0}
              height={0}
              alt='dont worry about it'
              className="w-auto -z-100">
            </Image>
            <Image 
            src="/images/Proj_Background.svg"
            width={0}
            height={0}
            alt='dont worry about it'
            className="w-auto -z-100">
            </Image>
            </div>
        </main>
    </div>
  );
}

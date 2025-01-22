import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center ">
      <Header />
      <main>
        <div>
          <div /**app info */>
            <Image
              src="/images/pocket_pals_img.svg"
              width={0}
              height={0}
              alt="pocket pals"
              className="w-auto z-100"
            ></Image>
            <div>
              <h2>Pocket Pals</h2>
              <p>UI/UX</p>
              <p>
                A learning app for kids. Focused on educating children about
                endangered animals across the globe through interactive
                learning.
              </p>
              <h2>Project Details:</h2>
              <p>role:</p>
              <p>App Interface Designer</p>
              <p>Skills Used:</p>
              <div>
                <p>Figma</p>
                <p>next.js</p>
                <p>User Testing</p>
              </div>
            </div>
          </div>
          <Image
            src="/images/Proj_Background.svg"
            width={0}
            height={0}
            alt="dont worry about it"
            className="w-auto -z-100"
          ></Image>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main>
        <section className="relative">
          {/* Background Image */}
          <Image
            src="/images/Proj_Background.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute inset-0 -z-10 object-cover"
          />

          {/* Foreground Content */}
          <div className="relative flex flex-col md:flex-row items-start gap-8 p-8 ">
            {/* App Title Image */}
            <Image
              src="/images/pocket_pals_img.svg"
              width={0}
              height={0}
              alt="pocket pals"
              className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[60%] max-w-[1200px] object-contain  mx-auto md:mx-0"
            />

            {/* App Details */}
            <div className="text-sm lg:pt-10 sm:w-2/3">
              <h2 className="text-2xl font-bold">Pocket Pals</h2>
              <p className="text-base text-gray-600">UI/UX</p>
              <p className="mt-4 text-base w-[80%]">
                A learning app for kids. Focused on educating children about
                endangered animals across the globe through interactive
                learning.
              </p>
              <h2 className="mt-6 text-xl font-bold">Project Details:</h2>
              <div className="mt-4">
                <p className="text-base font-medium">Role:</p>
                <p className="text-base">App Interface Designer</p>
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Skills Used:</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="bg-gray-100 px-3 py-2 rounded text-base">
                    Figma
                  </span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-base">
                    Next.js
                  </span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-base">
                    User Testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      <section>

      </section>
      </main>
    </div>
  );
}

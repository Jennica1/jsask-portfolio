import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
  <Header />
  <main>
    <div className="relative">
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
          className="w-2/5 sm:w-1/5 md:w-1/3 lg:w-1/2 max-w-lg object-contain"
        />

        {/* App Details */}
        <div className="text-lg">
          <h2 className="text-2xl font-bold">Pocket Pals</h2>
          <p className="text-base text-gray-600">UI/UX</p>
          <p className="mt-4 text-base">
            A learning app for kids. Focused on educating children about
            endangered animals across the globe through interactive learning.
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
    </div>
  </main>
</div>

  );
}

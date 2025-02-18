import Slideshow from "../components/Slideshow/Slideshow"
import Image from "next/image"

export default function Information() {
    return(
        <>
        <section className="flex flex-row justify-center gap-6 w-full max-w-6xl mx-auto pt-10 mt-20">
          {/* Left Box */}
          <div className="w-[8px] bg-[#890620] h-grow"></div>

          {/* Main Content */}
          <div className="flex-1 max-w-fit">
            <h2 className="md:mt-3 text-xl font-bold">Background:</h2>
            <p className="max-w-xl">
            The goal was to create an app that educated children about endangered animals world issue in order to develop an early understanding on what they can do to help or be mindful of.
            </p>

            <h2 className="mt-6 md:mt-3 text-xl font-bold">
              Key Features:
            </h2>
            <ul className="list-disc ml-6 mb-6">
              <li>
              Basic language as our target demographic is children ages 10-12.
              </li>
              <li>
                Translating document jargon to more easy-to-understand terms.
              </li>
              <li>
                Unnecessary effort to look for different Canadian government
                forms.
              </li>
              <li>
                Managing several client information and keeping it organized.
              </li>
            </ul>
          </div>
        </section>
        </>
    )
}
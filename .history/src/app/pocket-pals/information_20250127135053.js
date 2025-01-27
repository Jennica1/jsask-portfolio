import Slideshow from "../components/Slideshow/PP-wireframe"
import Image from "next/image"

export default function Information() {
    return(
        <>
        <section>
          <h2 className="mt-6 md:mt-3 text-xl font-bold">The Purpose:</h2>
          <p>
            The goal was to create an app that educated children about
            endangered animals world issue in order to develop an early
            understanding on what they can do to help or be mindful of.
          </p>

          <h2 className="mt-6 md:mt-3 text-xl font-bold">Key Features:</h2>

          <ul className="list-disc ml-6">
            <li>
              Basic language as our target demographic is children ages 10-12.{" "}
            </li>
            <li>Simple interface to reduce confusion when navigating.</li>
            <li>
              Implemented colours that elementary-aged children commonly engage
              positively with.
            </li>
            <li>
              Games that are simple enough for children but makes learning more
              engaging.
            </li>
          </ul>

          <h2 className="mt-6 md:mt-3 text-xl font-bold">Challenges Faced:</h2>
          <ul className="list-disc ml-6">
            <li>
              Colour choices were bright but, visually unappealing and
              frequently clashed together.
            </li>
            <li>
              Balancing the amount of article information that is informative
              but can still be understood by young children.{" "}
            </li>
            <li>
              How to could we customize the initial set-up for the account?
            </li>
          </ul>
        </section>
        </>
    )
}
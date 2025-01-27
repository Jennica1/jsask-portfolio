import Slideshow from "../components/Slideshow/PP-wireframe"

export default function backgroundInfo() {
    return(
        <>
        <section className="relative flex flex-col md:flex-row items-start">
          {/* Background Image */}
          <Image
            src="/images/Background - Dark Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="absolute inset-0 w-full object-cover -z-10" // Ensures the image is behind content
          />
        
          {/* Content */}
          <div className="relative z-20 p-6 md:p-10  ">
            <h2 className="mt-6 md:mt-3 text-xl font-bold">
              Background Information
            </h2>
        
            {/* Parent Flex Container */}
            <div className="flex flex-col md:flex-row items-start gap-6 mt-4">
              {/* Ordered List */}
              <ol className="list-decimal ml-6">
                Key features are:
                <ul className="list-disc ml-6">
                  <li>Simple language</li>
                  <li>Straight-forward interface</li>
                  <li>Colourful</li>
                  <li>Engaging with young audience</li>
                </ul>
              </ol>
        
              {/* Slideshow Div */}
              <div className="flex gap-6">
                <Slideshow
                  slides={[
                    { image: "./images/Leading Page.png", alt: "Slide 1" },
                    { image: "./images/Article.png", alt: "Slide 2" },
                  ]}
                  height="h-auto"
                  width="w-52"
                />
        
                <Slideshow
                  slides={[
                    { image: "./images/Rough Sketch.png", alt: "Slide 1" },
                    { image: "./images/Site Map.png", alt: "Slide 2" },
                  ]}
                  height="h-auto"
                  width="w-52"
                />
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
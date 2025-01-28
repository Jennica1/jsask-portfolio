<section className="relative flex flex-col md:flex-row items-start mb-12 p-6 md:p-12">
  {/* Background Image */}
  <Image
    src="/images/Background - Dark Blue.svg"
    width={0}
    height={0}
    alt="Background Image"
    className="w-full h-auto absolute object-cover -z-10"
  />

  {/* Images for larger screens */}
  <div className="hidden md:flex gap-4 items-center">
    <Image
      src="/pocketPals/HiFi - Home Page.png"
      width={0}
      height={0}
      className="w-full h-auto"
      alt="HiFi - Home Page"
    />
    <Image
      src="/pocketPals/HiFi - Marmot Article.png"
      width={0}
      height={0}
      className="w-full h-auto"
      alt="HiFi - Marmot Article"
    />
    <Image
      src="/pocketPals/HiFi - Choose Your Topic.png"
      width={0}
      height={0}
      className="w-full h-auto"
      alt="HiFi - Choose Your Topic"
    />
    <Image
      src="/pocketPals/HiFi - Styling.png"
      width={0}
      height={0}
      className="w-full h-full"
      alt="HiFi - Styling"
    />
  </div>

  {/* Slideshow for smaller screens */}
  <div className="flex md:hidden w-full items-center">
    <Slideshow
      slides={[
        { image: "./pocketPals/HiFi - Home Page.png", alt: "Slide 1" },
        { image: "./pocketPals/HiFi - Marmot Article.png", alt: "Slide 2" },
        { image: "./pocketPals/HiFi - Choose Your Topic.png", alt: "Slide 3" },
      ]}
      height="h-auto"
      width="w-40"
    />

    <Image
      src="/pocketPals/HiFi - Styling.png"
      width={0}
      height={0}
      className="w-full h-full"
      alt="HiFi - Styling"
    />
  </div>
</section>

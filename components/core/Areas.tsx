const serviceAreas = [
  {
    city: "Downtown",
    description:
      "Quick and reliable moving in the heart of Dubai with Abu Muhammad Movers.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Downtown%20Dubai",
  },
  {
    city: "Arabian Ranches",
    description: "Smooth villa relocations in peaceful Arabian Ranches.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Arabian%20Ranches",
  },
  {
    city: "Dubai Marina",
    description: "Expert movers for high-rise homes in Dubai Marina.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Dubai%20Marina",
  },
  {
    city: "Jumeirah (1, 2, 3, Islands, Park)",
    description:
      "Trusted moving for villas and homes across all Jumeirah areas.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Jumeirah",
  },
  {
    city: "Business Bay",
    description: "Fast residential and office moves in Business Bay.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Business%20Bay",
  },
  {
    city: "Al Barsha (and South)",
    description: "Hassle-free moves in Al Barsha and Al Barsha South.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Al%20Barsha",
  },
  {
    city: "Jumeirah Village Circle (JVC)",
    description: "Affordable, reliable moving services in JVC.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Jumeirah%20Village%20Circle",
  },
  {
    city: "Jumeirah Lake Towers (JLT)",
    description: "Safe and efficient relocations in JLT towers.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Jumeirah%20Lake%20Towers",
  },
  {
    city: "Dubai Silicon Oasis",
    description: "Tech-friendly moves for homes and offices in DSO.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Dubai%20Silicon%20Oasis",
  },
  {
    city: "Springs, Meadows, Lakes",
    description: "Family-friendly moves in Springs, Meadows & Lakes.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Springs%2C%20Meadows%2C%20Lakes",
  },
  {
    city: "Arabian Ranches 2",
    description: "Professional moving services in Arabian Ranches 2.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Arabian%20Ranches%202",
  },
  {
    city: "Al Quoz",
    description: "Residential and commercial moves done right in Al Quoz.",
    link: "https://wa.me/971556461731?text=I%20need%20movers%20in%20Al%20Quoz",
  },
];

export function Areas() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-3 md:px-0 con mt-36">
        {/* Title */}
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold md:text-4xl mb-8 md:mb-12 lg:mb-16">
          Popular Dubai Areas We Serve
        </h2>

        {/* Content */}
        <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
          {serviceAreas.map((Areas, i: number) => (
            <a
              href={Areas.link}
              key={i}
              title={`contact with movers in ${Areas.city}, dubai`}
              className="flex-col flex items-start justify-between border border-gray-300 p-10 h-60 hover:bg-black hover:text-white transition"
            >
              <div className=" flex w-full items-center justify-between">
                <h3 className="text-xl ">Movers in {Areas.city}, Dubai</h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground">{Areas.description}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="max-w-4xl mx-auto text-center text-gray-600 mt-5">
          Our familiarity with the logistics and regulations in these areas
          ensures a smooth moving process, no matter where you&#39;re relocating
          within Dubai.
        </p>
      </div>
    </section>
  );
}

import CTA from "@/components/core/CTA";
import {
  CheckCircle,
  DollarSign,
  Medal,
  MedalIcon,
  Truck,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[30px] bg-white dark:bg-dark md:px-0 px-3">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-evenly -mx-4">
            <div className="w-full px-4 lg:w-6/12 md:order-1 order-2">
              <div className="flex md:flex-row flex-col items-center  sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <div className="w-full rounded-2xl h-72 overflow-hidden bg-red-300 relative">
                      <Image
                        src={"/images/movers-packing-box.jpg"}
                        alt="packing box"
                        fill
                        className="absolute object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="py-3 sm:py-4">
                    <div className="w-full rounded-2xl h-72 overflow-hidden bg-red-300 relative">
                      <Image
                        src={
                          "/images/abu-muhammad-movers-with-happy-customer.jpg"
                        }
                        alt="team photo of abu muhammad movers with customer in dubai"
                        fill
                        className="absolute object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <div className="w-full rounded-2xl md:h-[400px] h-72 overflow-hidden bg-red-300 relative">
                      <Image
                        src={"/images/movers-in-dubai-team.jpg"}
                        alt="Team photo of Abu Muhammad Movers with trucks"
                        fill
                        className="absolute object-cover object-center"
                      />
                    </div>
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 md:order-2 order-1">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  About Us
                </span>
                <h1 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Best Movers & Packers in Dubai Since 2010
                </h1>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Welcome to Abu Muhammad Movers, your trusted partner for
                  seamless relocations across Dubai and the UAE.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  Established in 2010, we’ve spent over a decade perfecting our
                  craft—delivering professional, reliable, and human-centered
                  moving and packing services that put your mind at ease.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get A Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-5xl mx-auto">
        <h2 className="md:text-4xl text-3xl font-semibold">Our Journey</h2>
        <p className="text-gray-600 mt-5 md:text-xl text-lg">
          Since our registration in 2010, Abu Muhammad Movers has grown from a
          small local outfit into one of the UAE’s leading moving companies.
        </p>
        <p className="text-gray-600 mt-2 text-xl">
          What began as a family-run business in Dubai has expanded to serve
          Sharjah, Abu Dhabi, Ajman, and beyond—always guided by our founding
          promise: to make every move smooth, safe, and stress-free.
        </p>
      </section>
      <section className="md:px-0 px-3 mt-36">
        <div className="max-w-6xl mx-auto">
          <h2 className=" md:text-4xl text-3xl font-semibold text-center mb-16">
            Our Mission & Values
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12  place-items-center">
            <div className="text-center">
              <Medal
                className="w-12 h-12 mb-6 yel inline-block"
                strokeWidth={1.2}
              />
              <h3 className=" text-xl  mb-3">Professionalism</h3>
              <p className="leading-relaxed text-sm text-gray-600">
                Every team member is trained to handle your belongings with the
                utmost care, using industry-leading equipment and best
                practices.
              </p>
            </div>
            <div className="text-center">
              <Medal
                className="w-12 h-12 mb-6 yel inline-block"
                strokeWidth={1.2}
              />
              <h3 className=" text-xl  mb-3">Trust & Transparency</h3>
              <p className="leading-relaxed text-sm text-gray-600">
                Upfront, competitive pricing and open communication ensure you
                know exactly what to expect—no hidden fees, no surprises.
              </p>
            </div>
            <div className="text-center">
              <Medal
                className="w-12 h-12 mb-6 yel inline-block"
                strokeWidth={1.2}
              />
              <h3 className=" text-xl  mb-3">Customer-First Approach</h3>
              <p className="leading-relaxed text-sm text-gray-600">
                From your first call to final delivery, we tailor our services
                to your unique needs and timeline.
              </p>
            </div>
            <div className="text-center">
              <Medal
                className="w-12 h-12 mb-6 yel inline-block"
                strokeWidth={1.2}
              />
              <h3 className=" text-xl  mb-3">Quality Assurance</h3>
              <p className="leading-relaxed text-sm text-gray-600">
                We use premium packing materials, secure transport vehicles, and
                rigorous quality checks to safeguard your possessions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-5xl mx-auto">
        <h2 className="md:text-4xl text-3xl font-semibold">What We Offer</h2>
        <p className="text-gray-600 mt-3">
          We provide a full spectrum of moving and packing services designed to
          fit every requirement and budget:
        </p>

        <ul className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4 list-disc list-inside text-gray-600">
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong> Home Moving</strong>
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong>Office Moving</strong>
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong>Local Moving in Dubai</strong>
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong>Packing Services (full-service or materials-only)</strong>
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong>Single Item Moving ( large or small item )</strong>
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong>Furniture Installation</strong>
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong>Storage Services (short- & long-term)</strong>
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            <strong>Furniture Movers in Dubai</strong>
          </li>
        </ul>
        <p className="text-gray-600 mt-5 text-lg">
          Each service is backed by our 100% satisfaction guarantee, ensuring
          your items arrive on time and intact.
        </p>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-between con mt-36 md:px-0 px-3">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Where We Serve
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            With strategically located depots and a fleet of modern vehicles, we
            cover the following areas:
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
            {[
              "Movers in Dubai",
              "Movers in Sharjah",
              "Movers in Abu Dhabi",
              "Movers in Ajman",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-semibold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg">
            No matter the distance or complexity, our local expertise ensures
            efficient routing and cost-effective solutions
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full  mt-10 lg:mt-0 lg:pl-32">
          <div className="rounded-xl shadow-lg relative md:h-[400px] h-80 overflow-hidden">
            <Image
              src="/images/team-image-of-movers.jpg" // Replace with actual path
              alt="Team working with tools"
              fill
              className="object-cover object-center absolute"
            />
          </div>
        </div>
      </section>
      <section className="con mt-36 md:px-0 px-3">
        <h2 className="md:text-4xl text-3xl font-semibold md:leading-12 leading-[38px]">
          <span className="block">Why Choose Us?</span>
          <span className="underline underline-offset-4 bg-primary text-[#ECD920] p-1">
            Movers in Dubai
          </span>
        </h2>
        <p className="md:text-xl text-base mt-5 max-w-4xl  text-muted-foreground">
          With over 15 years of dedicated service, Abu Muhammad Movers
          established ourselves as reliable movers in Dubai, assisting families
          and businesses with seamless relocations within UAE.
        </p>
        <p className="md:text-xl text-base mt-2 max-w-4xl text-muted-foreground">
          Here is why Abu Muhammad Movers are the Best Movers and Packers for
          You.
        </p>
        <div className="con grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <MedalIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                15+ Years of Expertise
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Proven track record across thousands of successful moves.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <UsersRoundIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Dedicated Support
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Real-time updates and a friendly customer care team available
                24/7.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <Truck className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Flexible Scheduling
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Weekend moves, emergency relocations, and same-day service when
                you need it most.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <DollarSign className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Competitive Rates
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Transparent quotes with no hidden charges.
              </p>
            </div>
          </div>
        </div>
        <p className="md:text-xl text-base mt-5 max-w-4xl text-muted-foreground">
          We understand that moving can be a significant undertaking, and our
          mission is to provide you with a hassle-free experience at a lower
          cost compared to other cheap movers in Dubai.
        </p>
        <p className="md:text-xl text-base mt-2 max-w-4xl text-muted-foreground">
          Whether you&#39;re looking for villa movers in Dubai, office movers in
          Dubai, or house movers in Dubai, we&#39;ve got you covered.
        </p>
      </section>
      <CTA
        title="Ready to Move?"
        desc="Get your free, no-obligation quote today! Let Abu Muhammad Movers handle every detail so you can focus on settling into your new space."
        extra={
          <ul>
            <li>
              <strong>Phone : </strong> +971 55 6461731, +971 56 7878464
            </li>
            <li>
              <strong>Email : </strong> abumuhammad.movers@gmail.com
            </li>
          </ul>
        }
      />
    </>
  );
};

export default About1;

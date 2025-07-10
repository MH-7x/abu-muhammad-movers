import { Areas } from "@/components/core/Areas";
import CTA from "@/components/core/CTA";
import FAQs from "@/components/core/FAQs";
import ServiceHeroSection from "@/components/core/ServiceHeroSection";
import { APP } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Packing and Unpacking Services in Dubai - Call Now",
  description:
    "Abu Muhammad Movers is the Dubai leading Packing and unpacking company. We provide free moving quotes for home and business owners. Call Or WhatsApp Us: 055 6461731, 056 7878464",
  alternates: {
    canonical: `${APP.url}/packing-services-in-dubai`,
  },
  openGraph: {
    title: "Affordable Packing and Unpacking Services in Dubai - Call Now",
    description:
      "Abu Muhammad Movers is the Dubai leading Packing and unpacking company. We provide free moving quotes for home and business owners. Call Or WhatsApp Us: 055 6461731, 056 7878464",
    url: `${APP.url}/packing-services-in-dubai`,
    images: `${APP.url}/packing/packing-services-dubai.jpg`,
    type: "website",
    siteName: "Abu Muhammad Movers",
    phoneNumbers: ["+971 55 6461731", "+971 56 7878464"],
    emails: "abumuhammad.movers@gmail.com",
  },
  twitter: {
    title: "Affordable Packing and Unpacking Services in Dubai - Call Now",
    description:
      "Abu Muhammad Movers is the Dubai leading Packing and unpacking company. We provide free moving quotes for home and business owners. Call Or WhatsApp Us: 055 6461731, 056 7878464",
    card: "summary_large_image",
    images: `${APP.url}/packing/packing-services-dubai.jpg`,
  },
};

const PackingServicesPage = () => {
  return (
    <main>
      <ServiceHeroSection
        title={{
          first: "Packing Services in Dubai",
          second: "Abu Muhammad Movers",
        }}
        description={
          <>
            Abu Muhammad Movers has been a trusted name in Dubai moving and
            <Link href={"/packing-services-in-dubai"}>
              Packing Services
            </Link>{" "}
            since 2010, providing professional packing, unpacking, and moving
            solutions for families and businesses. <br /> Our warm, certified
            team treats your belongings with the utmost care – from everyday
            household items to fragile antiques and fine electronics
          </>
        }
        image={{
          src: "/packing/hero_packing_scene.jpg",
          alt: "Professional packing services in Dubai for families",
        }}
      />
      <section className="md:px-0 px-3 max-w-5xl mx-auto text-xl flex flex-col gap-y-5 text-gray-600 mt-36">
        <p>
          We use high-quality packing materials and proven techniques to make
          your move truly stress-free. Every service is fully insured and backed
          by our 100% satisfaction guarantee
        </p>
        <p>
          Ready to make your move easy? or looking for affordable packing
          services in Dubai? Call/WhatsApp us at +971 55 6461731 or +971 56
          7878464, or{" "}
          <Link
            className="underline underline-offset-2"
            href="/book-movers-online"
          >
            book online
          </Link>{" "}
          for a complimentary on-site estimate and a guaranteed seamless
          relocation.
        </p>
      </section>
      <Areas
        title="Why Choose Abu Muhammad Movers?"
        services={[
          {
            city: "Experienced, Certified Team",
            description:
              "With over a decade of service, our skilled packers and movers know every aspect of safe handling. Our certified professionals treat your items “with the utmost respect” and go above and beyond on every job",
            link: "https://abumuhammadmovers.com",
          },
          {
            city: "Fully Insured & Guaranteed",
            description:
              "All moves are fully insured for your peace of mind, and we stand behind our work with a 100% satisfaction guarantee . You can trust that we’ll make things right if ever there’s an issue.",
            link: "https://abumuhammadmovers.com",
          },
          {
            city: "Same-Day & Flexible Service",
            description:
              "Need a quick move? Our fast, efficient crews can often accommodate same-day or next-day packing requests. We work around your schedule to ensure a stress-free experience. ",
            link: "https://abumuhammadmovers.com",
          },
          {
            city: "Premium Packing Materials",
            description:
              "We use only top-quality boxes, bubble wrap, foam, and custom crating to protect your valuables. Each item is carefully layered and secured to guarantee it arrives intact",
            link: "https://abumuhammadmovers.com",
          },
          {
            city: "Customized Moving Plans",
            description:
              "Whether you need full-home packing, a single-room, or an entire office, we tailor our services to your needs. No move is too big or too small – we cover full, partial, and single-item packing services.",
            link: "https://abumuhammadmovers.com",
          },
          {
            city: "Transparent Pricing",
            description:
              "We offer a complimentary on-site estimate so you know exactly what to expect. Our quotes include all materials and labor, with no hidden fees , giving you complete confidence in our affordable pricing.",
            link: "https://abumuhammadmovers.com",
          },
        ]}
      />
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-evenly -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex md:flex-row flex-col items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 bg-secondary rounded-2xl h-72 m-3 relative overflow-hidden">
                    <Image
                      src={"/packing/hero_packing_scene.png"}
                      alt="Professional packing services in Dubai for families"
                      fill
                      className="absolute object-cover object-center"
                    />
                  </div>
                  <div className="py-3 sm:py-4 bg-secondary rounded-2xl h-72 m-3 relative overflow-hidden">
                    <Image
                      src={"/packing/glassware_packing_closeup.jpg"}
                      alt="Glass packing by trusted movers in Dubai"
                      fill
                      className="absolute object-cover object-center"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 md:my-4 m-3 bg-secondary rounded-2xl h-72 md:h-96 overflow-hidden">
                    <Image
                      src={"/packing/office-packing-sense.png"}
                      alt="Office packing experts in Dubai"
                      fill
                      className="absolute object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div className="mt-10 lg:mt-0 md:px-0 px-3">
                <span className="block mb-2 yel text-lg font-semibold ">
                  Our Services
                </span>
                <h2 className="mb-5 text-3xl font-semibold sm:text-[40px]/[43px]">
                  Our Moving and{" "}
                  <Link href={"/packing-services-in-dubai"}>
                    Packing Services
                  </Link>{" "}
                  in Dubai
                </h2>
                <p className="mb-2 text-base text-gray-600">
                  Abu Muhammad Movers provides comprehensive{" "}
                  <Link href={"/packing-services-in-dubai"}>
                    Packing Services
                  </Link>{" "}
                  in Dubai for both residential and commercial clients.
                </p>
                <p className="mb-5 text-base text-gray-600">
                  Our team handles every room and every item, from glassware in
                  the kitchen to electronics in the living room, carefully
                  wrapping and boxing each piece.
                </p>

                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  WhatsApp Us ..
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-0 px-3 max-w-5xl mx-auto text-xl flex flex-col gap-y-5 text-gray-600 mt-10">
        <p>
          Whether you’re moving an apartment, a villa, an office, or a retail
          space, we pack and secure everything using the best materials
          available.
        </p>
        <p>
          We also offer specialized packing for high-value items: antiques, fine
          art, grand pianos, and sensitive electronics receive custom crating
          and extra padding to ensure maximum protection
        </p>
        <p>Our all inclusive services cover:</p>
        <ul className="list-disc pl-5">
          <li>
            <b>Homes & Apartments:</b> Complete packing for every room –
            kitchenware, furniture, décor, clothing, and more. You decide
            whether we pack the whole house or just select rooms.
          </li>
          <li>
            <b>Specialty Items:</b> Custom solutions for antiques, artwork,
            collectibles, and electronics. We use premium wrapping and crating
            so your most delicate possessions arrive safely.
          </li>
          <li>
            <b>Full Packing Service:</b> We bring all packing materials and do
            all the work. Just point to what needs boxing up, and our team
            handles the rest.
          </li>
          <li>
            <b>Partial Packing & Unpacking:</b> Short on time? We can pack or
            unpack specific areas or items to meet your schedule.
          </li>
        </ul>
        <p>
          Every item we pack is treated with care, using expert layering and
          secure fastening to guarantee safe transport . In short, our packing
          services in Dubai cover everything you need for a successful move.
        </p>
      </section>
      <section className="md:px-0 px-3 mt-36 bg-black text-white py-20">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold md:text-4xl mb-16 md:mb-12 lg:mb-16">
          Benefits of Professional Packing and Unpacking
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 ">
          <li className="p-10 pb-20 overflow-hidden bg-white rounded-lg shadow-lg relative">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Damage Prevention
            </h4>
            <p className="text-gray-600">
              Proper packing is the key to a damage-free move. We use premium
              supplies and expert techniques so fragile items are protected
              end-to-end.
            </p>
            <svg
              className="absolute bottom-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,213.3C672,235,768,245,864,234.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </li>
          <li className="p-10 pb-20 overflow-hidden bg-white rounded-lg shadow-lg relative">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Time & Stress Saved
            </h4>
            <p className="text-gray-600">
              Let our trained team do the heavy lifting. We work quickly and
              methodically, ensuring your move is completed faster and with less
              hassle.
            </p>
            <svg
              className="absolute bottom-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,213.3C672,235,768,245,864,234.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </li>
          <li className="p-10 pb-20 overflow-hidden bg-white rounded-lg shadow-lg relative">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Secure Handling
            </h4>
            <p className="text-gray-600">
              Our professionals wrap and load your belongings with precision.
              You can relax knowing everything – from electronics to heirlooms –
              is handled safely.
            </p>
            <svg
              className="absolute bottom-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,213.3C672,235,768,245,864,234.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </li>
          <li className="p-10 pb-20 overflow-hidden bg-white rounded-lg shadow-lg relative">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Efficient Unpacking
            </h4>
            <p className="text-gray-600">
              We don’t just leave you at the door. Our crew will unpack your
              boxes, reassemble furniture, and help you settle in, creating a
              truly seamless relocation.
            </p>
            <svg
              className="absolute bottom-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,213.3C672,235,768,245,864,234.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </li>
          <li className="p-10 pb-20 overflow-hidden bg-white rounded-lg shadow-lg relative">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Full Protection
            </h4>
            <p className="text-gray-600">
              All our packing work is fully insured for extra peace of mind .
              Combined with our 100% satisfaction guarantee, you get complete
              confidence in a safe move.
            </p>
            <svg
              className="absolute bottom-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,213.3C672,235,768,245,864,234.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </li>
          <li className="p-10 pb-20 overflow-hidden bg-white rounded-lg shadow-lg relative">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Stress-Free Experience
            </h4>
            <p className="text-gray-600">
              Customers consistently praise how our service “made the whole
              process so easy” and ensured “nothing was damaged” . With Abu
              Muhammad Movers, you get an expert, proven moving partner.
            </p>
            <svg
              className="absolute bottom-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,213.3C672,235,768,245,864,234.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </li>
        </ul>
      </section>
      <section className="md:px-0 px-3 mt-36 con">
        <h2 className="text-center md:text-4xl text-3xl font-semibold">
          Moving & Packing Process (How It Works)
        </h2>

        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-center">
          We follow a clear, step-by-step process to make your move effortless:
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <div className="bg-accent rounded-2xl p-5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 relative">
              <Image
                src={"/images/Initial-Consultation-icon.png"}
                alt="1. Book Your Service icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Free On-Site Survey
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              We start with a complimentary in-home visit to assess your needs
              and provide an accurate quote.
            </p>
          </div>

          <div className="bg-accent rounded-2xl p-5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 relative">
              <Image
                src={"/images/moving-plan-icon.png"}
                alt="3. The Move Plan icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">Packing Day</h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              On the scheduled day, our certified packers arrive with all
              materials. They pack room by room, carefully wrapping each item
              and labeling boxes
            </p>
          </div>

          <div className="bg-accent rounded-2xl p-5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 relative">
              <Image
                src={"/images/safe-transportation.png"}
                alt="5. Safe Transportation icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Secure Transport
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Once packed, your items are loaded into our clean, insured trucks
              for safe transportation to your new location.
            </p>
          </div>

          <div className="bg-accent rounded-2xl p-5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 relative">
              <Image
                src={"/images/home-setting-icon.png"}
                alt="6. Unpacking and Settling-in icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Unpacking & Setup
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Upon arrival, we unpack your belongings, place furniture and boxes
              in your designated rooms, and set up as per your instructions
            </p>
          </div>
        </div>
      </section>
      <section className="con mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
        <div className="bg-accent md:h-[420px] h-80 relative md:mx-10 mx-5 rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-full rotate-12 -z-10 rounded-3xl bg-black"></div>
          <Image
            src={"/packing/booking_form_mockup.png"}
            alt="Full villa packing services in Dubai"
            fill
            className="absolute object-cover object-center rounded-3xl"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Free On-Site Estimate and Affordable Pricing
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            At Abu Muhammad Movers, we believe in clear, fair pricing. We offer
            a complimentary on-site estimate, where we come to you at no cost to
            evaluate the move and give you a detailed, honest quote.
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            Our rates are competitive and tailored to your specific needs, and
            we outline all costs upfront.
          </p>
        </div>
      </section>
      <section className="md:px-0 px-3 max-w-5xl mx-auto text-xl flex flex-col gap-y-5 text-gray-600 mt-36">
        <p>
          This transparent approach means no surprises – you only pay for the
          services and materials you choose .
        </p>
        <p>
          Whether you need full packing, unpacking, or partial services, we’ll
          work with your budget to find the best solution.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <b>Complimentary On-Site Estimate:</b> We visit your location for
            free to assess volume and provide an accurate quote.
          </li>
          <li>
            <b>Transparent Pricing:</b> All quotes include labour and materials;
            there are no hidden fees. We clearly explain any costs so you know
            exactly what you’re paying for.
          </li>
          <li>
            <b>Customized Packages:</b> Pick and choose only the services you
            need – full packing, moving, unpacking, or special handling – to
            stay within budget.
          </li>
          <li>
            <b>Easy Booking:</b> When you’re ready, simply call/WhatsApp us or
            <Link href={"/book-movers-online"}> book online</Link>. We’ll handle
            the rest for a hassle-free move.
          </li>
        </ul>
      </section>
      <section id="moving-cost-section" className="md:px-0 px-3 mt-36">
        <h2 className="text-center max-w-2xl font-semibold mb-5 mx-auto  md:text-4xl text-3xl">
          Packing and Moving Cost in Dubai
        </h2>
        <p className="max-w-4xl  mx-auto text-center text-muted-foreground">
          We understand that budget is a key consideration when choosing movers.
          At Abu Muhammad Movers, we are committed to providing high-quality
          services at affordable rates.
        </p>
        <p className="max-w-4xl  mx-auto text-center text-muted-foreground mt-3">
          We are known as one of the affordable movers and packers in Dubai
          without compromising on the quality and safety of your move.
        </p>
        <div className="overflow-x-auto md:p-4 mt-5">
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
            <table className="min-w-full table-auto text-sm sm:text-base">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left">Moving Size</th>
                  <th className="px-6 py-4 text-left">Cost Range (AED)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">Studio</td>
                  <td className="px-6 py-4">AED 650 - 1050</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="px-6 py-4">1 BHK</td>
                  <td className="px-6 py-4">AED 950 - 1450</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">2 BHK</td>
                  <td className="px-6 py-4">AED 1350 - 1950</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="px-6 py-4">3 BHK (Apartment)</td>
                  <td className="px-6 py-4">AED 1950 - 2850</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">3 BHK (Villa)</td>
                  <td className="px-6 py-4">AED 2350 - 3250</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="px-6 py-4">5 BHK (Villa)</td>
                  <td className="px-6 py-4">AED 3150 - 4350</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="max-w-4xl mt-5  mx-auto text-center yel">
          But, remember that the final cost depends on different factors like
          <span className="underline underline-offset-4"> volume</span>,
          <span className="underline underline-offset-4"> distance</span> and
          the services you need. Here,there is no need to worry, just contact us
          and get all levels of moving and packing services at affordable
          pricing.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full con mt-10">
          <p className="text-gray-600">
            Our pricing is transparent, with no hidden costs. The cost of your
            move will depend on factors such as the size of your home, the
            volume of items, the distance of the move, and the specific services
            you require (packing, storage, specialized items).
          </p>
          <p className="text-gray-600">
            We offer cheap moving services in Dubai that provide excellent value
            for money. What sets our best movers in Dubai apart is the
            combination of our experienced team, meticulous planning, careful
            handling, and competitive pricing.
          </p>
        </div>
      </section>
      <CTA
        title="Get Started Today"
        desc={
          <>
            Ready for a stress-free move? Let Abu Muhammad Movers handle the
            packing and unpacking with professionalism and care. Call/WhatsApp
            +971 55 6461731 or +971 56 7878464 now, or book online to schedule
            your complimentary on-site estimate
          </>
        }
        extra={
          <>
            <p>Phone/WhatsApp: +971 55 6461731 | +971 56 7878464</p>
            <p>
              Online Booking:{" "}
              <Link href={"/book-movers-online"}>Book Movers Online</Link>
            </p>
            <p>
              100% Satisfaction Guaranteed • Fully Insured • Same-Day Service
              Available
            </p>
          </>
        }
      />
      <FAQs
        Faqs={[
          {
            question:
              "What makes Abu Muhammad Movers one of the best packing services in Dubai?",
            answer: (
              <>
                At Abu Muhammad Movers, we’ve been delivering professional
                packing services in Dubai since 2010 — and we’ve built our
                reputation on trust, quality, and customer satisfaction. Our
                team is fully trained, our materials are top-tier, and every
                service is{" "}
                <strong>
                  fully insured and backed by a 100% satisfaction guarantee
                </strong>
                . Whether you&#39;re packing a villa, an apartment, or an
                office, we bring the expertise, care, and attention your
                belongings deserve.
              </>
            ),
          },
          {
            question:
              "How much does it cost to hire professional packing services in Dubai?",
            answer: (
              <>
                The cost of{" "}
                <Link href={"/packing-services-in-dubai"}>
                  Packing Services
                </Link>{" "}
                in Dubai depends on the size of your home or office, the number
                of items, and whether you need full or partial packing. At Abu
                Muhammad Movers, we offer{" "}
                <strong>affordable, transparent pricing</strong> with no hidden
                fees. Plus, we provide a <strong>free on-site estimate</strong>,
                so you know exactly what to expect before we begin. Quality
                packing doesn’t have to break the bank!
              </>
            ),
          },
          {
            question:
              "Do you offer residential and commercial packing services in Dubai?",
            answer: (
              <>
                Yes, we specialize in both <strong>residential</strong> and{" "}
                <strong>
                  commercial p
                  <Link href={"/packing-services-in-dubai"}>
                    Packing Services
                  </Link>
                </strong>{" "}
                across Dubai. From family homes and apartments to offices and
                retail spaces, Abu Muhammad Movers offers customized packing
                solutions using{" "}
                <strong>premium materials and trained professionals</strong>. We
                ensure everything — from fragile items to office files — is
                packed securely and labeled for stress-free unpacking.
              </>
            ),
          },
          {
            question:
              "What’s included in your full packing and unpacking services in Dubai?",
            answer: (
              <>
                Our full-service packing includes everything you need for a
                smooth move. We provide all packing materials, carefully wrap
                and box your items, label everything, and ensure safe handling.
                Once you arrive at your new location, our team will{" "}
                <strong>
                  unpack, reassemble furniture, and place items where you want
                  them
                </strong>{" "}
                — saving you hours of work. It’s a truly{" "}
                <strong>seamless, start-to-finish solution</strong>.
              </>
            ),
          },
          {
            question:
              "Are Abu Muhammad Movers’ packing services insured and guaranteed in Dubai?",
            answer: (
              <>
                Absolutely. Every packing job we handle is{" "}
                <strong>fully insured</strong>, and we proudly offer a{" "}
                <strong>100% satisfaction guarantee</strong>. Your peace of mind
                matters — whether we’re packing a delicate vase or an entire
                office setup. We stand behind the quality of our service and
                take every precaution to ensure your belongings are safe and
                secure throughout the process.
              </>
            ),
          },
          {
            question:
              "Can I book your packing services in Dubai online or via WhatsApp?",
            answer: (
              <>
                Yes, we’ve made booking quick and convenient! You can either{" "}
                <a
                  href="https://abumuhammadmovers.com/book-movers-online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  book online here
                </a>{" "}
                or reach us via WhatsApp at <strong>+971 55 6461731</strong> or{" "}
                <strong>+971 56 7878464</strong>. Our friendly team is ready to
                assist with your questions, schedule a free estimate, or confirm
                your moving date — all from the comfort of your phone.
              </>
            ),
          },
          {
            question:
              "Do you provide same-day or urgent packing services in Dubai?",
            answer: (
              <>
                We do! Abu Muhammad Movers offers{" "}
                <strong>
                  same-day and urgent{" "}
                  <Link href={"/packing-services-in-dubai"}>
                    Packing Services
                  </Link>
                </strong>{" "}
                depending on availability. Our flexible team can often
                accommodate last-minute moves without compromising quality.
                Whether it’s a tight deadline or a surprise move, we’re here to
                pack your items{" "}
                <strong>quickly, securely, and professionally</strong>.
              </>
            ),
          },
          {
            question:
              "What packing materials do Abu Muhammad Movers use for fragile items?",
            answer: (
              <>
                We use only{" "}
                <strong>high-quality, professional-grade materials</strong> to
                ensure maximum protection. This includes bubble wrap, foam
                sheets, heavy-duty boxes, stretch film, and custom wooden crates
                for high-value or fragile items like glassware, electronics,
                antiques, and fine art. Every item is packed with care and
                labeled accordingly for safe handling and easy unpacking.
              </>
            ),
          },
          {
            question:
              "Do you offer free on-site estimates for packing services in Dubai?",
            answer: (
              <>
                Yes, we offer a{" "}
                <strong>100% free on-site survey and estimate</strong> — no
                strings attached. One of our experienced consultants will visit
                your location, assess your items, and provide a clear,
                customized quote. This ensures accurate pricing and allows us to
                tailor our{" "}
                <Link href={"/packing-services-in-dubai"}>
                  Packing Services
                </Link>{" "}
                exactly to your needs.
              </>
            ),
          },
          {
            question:
              "Why choose professional packing services instead of packing on my own in Dubai?",
            answer: (
              <>
                While packing on your own might seem cost-effective, it often
                leads to <strong>stress, damage, and delays</strong>. With Abu
                Muhammad Movers, you get <strong>trained professionals</strong>,{" "}
                <strong>top-quality materials</strong>, and{" "}
                <strong>years of experience</strong>. We pack faster, safer, and
                more efficiently — and we take full responsibility for the
                safety of your items. It’s the smart choice for a smooth,
                hassle-free move.
              </>
            ),
          },
        ]}
      />
    </main>
  );
};

export default PackingServicesPage;

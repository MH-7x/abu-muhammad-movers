import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { locations } from "../page";
import ServiceHeroSection from "@/components/core/ServiceHeroSection";
import FAQs from "@/components/core/FAQs";
import { type Metadata } from "next";
import { APP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Movers Online | Abu Muhammad Movers",
  description:
    "Book movers online with Abu Muhammad Movers in Dubai. Get a free quote and experience hassle-free moving services. Contact us today!",
  alternates: {
    canonical: `${APP.url}/book-movers-online`,
  },
  openGraph: {
    title: "Book Movers Online | Abu Muhammad Movers",
    description:
      "Book movers online with Abu Muhammad Movers in Dubai. Get a free quote and experience hassle-free moving services. Contact us today!",
    url: `${APP.url}/book-movers-online`,
    images: [
      {
        url: `${APP.url}/images/movers-in-dubai.jpg`,
        width: 1200,
        height: 630,
        alt: "Book Movers Online",
      },
    ],
    type: "website",
    siteName: "Abu Muhammad Movers",
    phoneNumbers: ["+971 55 6461731", "+971 56 7878464"],
    emails: "abumuhammad.movers@gmail.com",
  },
  twitter: {
    title: "Book Movers Online | Abu Muhammad Movers",
    description:
      "Book movers online with Abu Muhammad Movers in Dubai. Get a free quote and experience hassle-free moving services. Contact us today!",
    images: [
      {
        url: `${APP.url}/images/movers-in-dubai.jpg`,
        width: 1200,
        height: 630,
        alt: "Book Movers Online",
      },
    ],
  },
};

const BookMoversOnlinePage = () => {
  return (
    <main>
      <section className="py-24 md:mt-32 mt-16 mb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-x-32 clear-left md:mb-16 mb-10">
            <div className=" md:mb-0 mb-4">
              <h1 className="text-black font-manrope md:text-4xl text-3xl font-semibold md:pr-20 leading-10 mb-5 md:text-left text-center">
                Contact With Best Movers and Packers in Dubai
              </h1>
              <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                We are the best movers and packers in Dubai, providing top-notch
                moving services to make your relocation smooth and hassle-free.
                Contact us today to get a free quote and experience our
                exceptional service.
              </p>
              <div className="flex md:items-center md:justify-start justify-center">
                <Link
                  aria-label="WhatsApp Us"
                  href="https://wa.me/+971556461731?text=I%20am%20looking%20for%20movers%20!"
                >
                  <Button size={"lg"} className="bg-green-600">
                    WhatsApp Us <MessageCircleMore />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="border-l-2 md:w-xl md:border-indigo-600 border-white px-10 py-6">
              <div className="mb-8">
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                  Phone Number
                </h6>
                <Link href={"tel:+971556461731"} title="Phone Number 1">
                  <h3 className="text-black md:text-lg text-base font-semibold leading-8 md:text-start text-center">
                    +971 55 6461731
                  </h3>
                </Link>
                <Link href={"tel:+971567878464"} title="Phone Number 2">
                  <h3 className="text-black md:text-lg text-base font-semibold leading-8 md:text-start text-center">
                    +971 56 7878464
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {locations.map((location, i: number) => (
              <Link
                key={i}
                href={`${location.link}`}
                title={`Contact With  ${location.city}`}
              >
                <div className="h-96 relative flex justify-center rounded-2xl overflow-hidden">
                  <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/90 to-gray-600/40 z-10"></div>
                  <Image
                    src={"/images/movers-in-dubai.jpg"}
                    fill
                    alt="Movers and Packers in dubai"
                    className="absolute object-cover object-center "
                  />
                  <div className="absolute bottom-0 mb-6 text-center px-6 z-20">
                    <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                      {location.city}
                    </h5>
                    <p className="text-white text-sm font-normal leading-5">
                      {location.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ServiceHeroSection
        title={{
          first: "Get A Free Moving Quote ",
          second: "From Abu Muhammad Movers",
        }}
        description="Fill out the form below to get a free moving quote and book our professional movers online. We are here to assist you with all your moving needs."
        image={{
          src: "/images/movers-in-dubai.jpg",
          alt: "Book Movers Online",
        }}
      />
      <section id="moving-cost-section" className="md:px-0 px-3 mt-36">
        <h2 className="text-center max-w-2xl font-semibold mb-5 mx-auto  md:text-4xl text-3xl">
          Moving Cost Of Abu Muhammad Movers in Dubai
        </h2>
        <p className="max-w-4xl  mx-auto text-center text-muted-foreground">
          The cost of Abu Muhammad Movers and usually the other packers and
          movers in Dubai depends on the capacity or size of stuff as well as of
          your moving requirements. But You can estimate to pay the following
          cost.
        </p>
        <div className="overflow-x-auto p-4 mt-5">
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
      </section>
      <FAQs
        Faqs={[
          {
            question:
              "How does Abu Muhammad Movers use technology for easier moves?",
            answer:
              "We use smart tech like real-time GPS tracking for your belongings, clever scheduling, and a digital list of all your items. This means you're always updated and in charge of your move, making it smooth and reliable across the UAE and the wider MENA region.",
          },
          {
            question: "Should I book Abu Muhammad Movers in advance?",
            answer:
              "It's always a good idea to book early, especially when it's a busy time of year. But don't worry, our flexible system often lets us take last-minute bookings too. We're here to make even urgent moves simple and stress-free for you.",
          },
          {
            question: "What kind of moving services do you offer?",
            answer:
              "We offer a complete range of moving services for homes, offices, and businesses. We're also experts at moving fragile and valuable items, using special packing and handling methods designed just for your needs.",
          },
          {
            question:
              "What makes Abu Muhammad Movers stand out from other movers?",
            answer:
              "We're different because we use technology to make your move better. From GPS tracking to smart route planning and great customer service, we offer a safer, faster, and more open moving experience than traditional companies.",
          },
          {
            question: "How can I get a quick price quote for my move?",
            answer:
              "Just visit our website for an instant and clear price quote. Simply add a few details about your move, and you'll get an estimate in seconds.",
          },
          {
            question: "Do you help with packing my items?",
            answer:
              "Yes, absolutely! Our professional teams offer full packing, partial packing, or just fragile-item packing options. Whatever your move needs, we'll make sure your items are packed safely and efficiently.",
          },
          {
            question: "Where does Abu Muhammad Movers operate?",
            answer:
              "We cover all major areas in Dubai and across the UAE. Plus, we handle moves across borders and internationally within the MENA region and beyond.",
          },
          {
            question: "When is the best time to book my move with you?",
            answer:
              "It's ideal to book 1 to 2 weeks ahead to secure your preferred date. However, we can often help with short-notice moves too, depending on our availability.",
          },
          {
            question: "Do you offer storage solutions?",
            answer:
              "Yes, Abu Muhammad Movers provides safe, climate-controlled storage units. These are perfect for both short and long-term needs, especially during transitions or home renovations.",
          },
          {
            question: "Are packing materials included in the service?",
            answer:
              "Yes, packing materials are included if you choose our Standard or Premium packages. If you go with our Saver package, you can add materials as an optional extra.",
          },
          {
            question: "Can you help with furniture assembly and disassembly?",
            answer:
              "Yes, our skilled team provides professional furniture disassembly and reassembly as part of our Standard and Premium moving packages.",
          },
          {
            question: "What safety steps do you take during moves?",
            answer:
              "We make the safety of your items our top priority. We use high-quality packing materials, employ skilled professionals, and follow secure transport practices to prevent any damage and give you peace of mind.",
          },
          {
            question: "How can I reach customer support during my move?",
            answer:
              "Abu Muhammad Movers offers 24/7 customer support via phone, email, and live chat. This means you'll always have help whenever you need it most.",
          },
        ]}
      />
    </main>
  );
};

export default BookMoversOnlinePage;

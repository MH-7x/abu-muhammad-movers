import React from "react";
import type { Metadata } from "next";
import { APP } from "@/lib/constants";
import ServiceHeroSection from "@/components/core/ServiceHeroSection";
import Link from "next/link";
import {
  BadgeDollarSignIcon,
  HandshakeIcon,
  MedalIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";
import { Areas } from "@/components/core/Areas";
import Image from "next/image";
import TestimonialSlider from "@/components/core/TestimonialsSlider";
import CTA from "@/components/core/CTA";
import FAQs from "@/components/core/FAQs";

export const metadata: Metadata = {
  title: "Trusted Local Movers in Dubai | Abu Muhammad Movers",
  description:
    "Trusted local movers in Dubai. Affordable, same-day moving, packing, and storage by Abu Muhammad Mover. Call now for a free quote and stress-free service.",
  alternates: {
    canonical: `${APP.url}/local-movers-in-dubai`,
  },
  openGraph: {
    title: "Trusted Local Movers in Dubai | Abu Muhammad Movers ",
    description:
      "Trusted local movers in Dubai. Affordable, same-day moving, packing, and storage by Abu Muhammad Mover. Call now for a free quote and stress-free service.",
    url: `${APP.url}/local-movers-in-dubai`,
    images: `${APP.url}/local/abu-muhammad-movers-dubai-truck.jpg`,
  },
  twitter: {
    title: "Trusted Local Movers in Dubai | Abu Muhammad Movers ",
    description:
      "Trusted local movers in Dubai. Affordable, same-day moving, packing, and storage by Abu Muhammad Mover. Call now for a free quote and stress-free service.",
    card: "summary_large_image",
    images: `${APP.url}/local/abu-muhammad-movers-dubai-truck.jpg`,
  },
};
const LocalMoversInDubaiPage = () => {
  return (
    <main>
      <ServiceHeroSection
        title={{
          first: "Best Local Movers in Dubai",
          second: "Abu Muhammad Movers",
        }}
        description={
          <>
            Abu Muhammad Mover is your friendly, professional moving partner for
            hassle-free relocations across Dubai. Our expert team is on hand to
            handle every detail. <br /> We proudly serve neighborhoods across
            the city – from Dubai Hills and Arabian Ranches to Downtown Dubai
            and Dubai Marina – ensuring a smooth move no matter where you are.
          </>
        }
        image={{
          src: "/local/abu-muhammad-movers-dubai-truck.jpg",
          alt: "Professional local movers in Dubai from Abu Muhammad Movers loading furniture into branded moving truck near Dubai skyline",
        }}
      />
      <section className="md:px-0 px-3 max-w-5xl mx-auto text-xl flex flex-col gap-y-5 text-gray-600 mt-36">
        <p>
          Our drivers know all the city’s routes and regulations, ensuring
          efficient and compliant moving logistics.{" "}
        </p>
        <p>
          We are local relocation specialists, offering comprehensive Dubai
          moving services at affordable rates with no hidden charges. Our 5-star
          rated service and guaranteed safety mean you can focus on settling in
          while we handle the heavy lifting.
        </p>
        <ul>
          <li>
            <b>Get Free Quote:</b>{" "}
            <Link href={"/book-movers-online"}>
              Book our moving team online
            </Link>{" "}
            or{" "}
            <Link
              href={
                "https://wa.me/+971556461731?text=I%20am%20looking%20for%20movers%20!"
              }
            >
              WhatsApp us at +971 55 6461731
            </Link>{" "}
            for a fast, free estimate.
          </li>
          <li>
            <b>Contact With Movers</b>:{" "}
            <Link href={"/book-movers-online"}>
              Book our moving team online
            </Link>{" "}
            or{" "}
            <Link
              href={
                "https://wa.me/+971556461731?text=I%20am%20looking%20for%20movers%20!"
              }
            >
              Call us at +971 56 7878464 or reach out on WhatsApp
            </Link>{" "}
            anytime for friendly, professional support.
          </li>
        </ul>
      </section>
      <section className="con mt-36 md:px-0 px-3">
        <h2 className="md:text-4xl text-3xl font-semibold md:leading-12 leading-[38px]">
          <span className="block">Why Choose Abu Muhammad Mover?</span>
          <span className="underline underline-offset-4 bg-primary text-[#ECD920] p-1">
            Best Local Moving Company
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
                Trusted & Experienced
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                We are licensed and insured, meeting the highest standards for
                safety and reliability.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <BadgeDollarSignIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Hassle-Free Moves
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Our full service covers everything from packing to unpacking, so
                you can relax on moving day.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <HandshakeIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Affordable Rates (Cheap Movers Dubai):
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Competitive pricing means you get great value without
                compromising on quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <TruckIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                No Hidden Charges
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                You’ll get a detailed written quote upfront, protecting you from
                surprise fees.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <ShieldCheckIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Care and Reliability
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                We handle your belongings with the utmost care, ensuring they
                arrive safely and on time.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <ShieldCheckIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">Expert Team</h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Our professional movers are trained to handle items of all sizes
                and fragility with care, and we deliver fast, reliable results
                on every job.
              </p>
            </div>
          </div>
        </div>
        <p className="md:text-xl text-base mt-5 max-w-4xl text-muted-foreground">
          Our trucks and equipment are meticulously maintained, and all moves
          are fully insured, giving you guaranteed peace of mind.
        </p>
      </section>
      <Areas
        title="Our Local Moving Services"
        services={[
          {
            city: "Home Moving / Residential Relocation",
            description:
              "Moving houses, apartments, or villas? Our home movers in Dubai pack, load, and transport your belongings safely to your new address. We handle permits and building rules so you don’t have to.",
            link: "/home-moving",
          },
          {
            city: "Office Moving / Commercial Relocation",
            description:
              " Minimize downtime with our expert office movers Dubai. We carefully relocate office furniture, electronics, and files, so your business can resume quickly.",
            link: "/office-moving",
          },
          {
            city: "Dubai Logistics & Moving",
            description:
              "End-to-end planning and execution of your relocation. We know every area of Dubai and handle all the logistics – routes, permits, parking – to ensure a smooth, stress-free move.",
            link: "/local-movers-in-dubai",
          },
          {
            city: "Single Item & Furniture Transport",
            description:
              "Need just one sofa or a piano moved? No problem. As professional furniture movers in Dubai, we specialize in single-item moves and handle all heavy or fragile pieces with the right equipment.",
            link: "/single-item-moving",
          },
          {
            city: "Packing and Moving",
            description:
              "Our full packing services Dubai use high-quality materials (boxes, bubble wrap, tape) to protect your items. We pack, label, transport, and unpack so you don’t have to lift a finger.",
            link: "/packing-services",
          },
          {
            city: "Furniture Installation",
            description:
              "Our team provides furniture dismantling and assembly services, ensuring that your furniture is set up correctly in your new space. We are the best furniture movers in Dubai.",
            link: "/furniture-installation-dubai",
          },
          {
            city: "Fine Art Relocation",
            description:
              "Trust our specialists to handle the secure relocation of your delicate and valuable fine art pieces.",
            link: "/fine-art-relocation",
          },
          {
            city: "Storage Services",
            description:
              "Short on space during your move? We offer secure temporary storage in climate-controlled facilities, so your belongings are safe and accessible when needed.",
            link: "/storage-services-dubai",
          },
          {
            city: "Furniture Movers Dubai",
            description:
              "Get free quotes or book your moving service in Dubai. We provide apartment, villa, office, and single-item moving & relocation services at unbeatable prices",
            link: "/furniture-movers-dubai",
          },
        ]}
      />
      <section className="md:px-0 px-3 mt-36 con">
        <h2 className="text-center md:text-4xl text-3xl font-semibold">
          Moving Process (How It Works)
        </h2>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-center">
          Our moving process is designed to be simple and efficient, ensuring a
          smooth transition for you and your belongings.
        </p>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-center">
          Each step is overseen by your dedicated move coordinator, ensuring
          clear communication and a stress-free experience.
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
              1. Free Assessment & Quote
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Contact us or submit{" "}
              <Link
                href={"/book-movers-online"}
                className="underline underline-offset-2"
              >
                our online form
              </Link>{" "}
              to receive a free, customized quote. We’ll assess your move size
              and needs with no obligation.
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
            <h3 className="text-xl font-semibold text-center">
              2. Planning & Packing
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              We schedule your move on a convenient date. Our team provides
              packing materials and carefully packs your items, from delicate
              valuables to heavy furniture.
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
              3. Secure Transport
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              On moving day, our crew arrives on time with a clean truck. We use
              dollies, straps, and blankets to protect and secure all items in
              transit, ensuring guaranteed safety.
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
              4. Unloading & Setup:
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              At your new location, we place items where you want them and
              unpack everything. We assemble furniture as needed and even take
              away all packing debris, so you can settle in immediately.
            </p>
          </div>
        </div>
      </section>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-evenly -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex md:flex-row flex-col items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 bg-secondary rounded-2xl h-72 m-3 relative overflow-hidden">
                    <Image
                      src={"/local/villa-moving-service-dubai-hills.jpg"}
                      alt="Yellow and black Abu Muhammad Movers truck outside a villa in Dubai Hills during home moving service"
                      fill
                      className="absolute object-cover object-center"
                    />
                  </div>
                  <div className="py-3 sm:py-4 bg-secondary rounded-2xl h-72 m-3 relative overflow-hidden">
                    <Image
                      src={"/local/interior-of-moving-truck.jpg"}
                      alt="Interior of Abu Muhammad Movers truck showing professionally packed items with straps and protective padding in Dubai"
                      fill
                      className="absolute object-cover object-center"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 md:my-4 m-3 bg-secondary rounded-2xl h-72 md:h-96 overflow-hidden">
                    <Image
                      src={"/local/office-relocation-dubai.jpg"}
                      alt="Office relocation in Dubai with Abu Muhammad Movers packing computers and office chairs for business move"
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
                  Our Promise
                </span>
                <h2 className="mb-5 text-3xl font-semibold sm:text-[40px]/[43px]">
                  What We Promise To Our Customers
                </h2>
                <p className="mb-5 text-base text-gray-600">
                  We guarantee clear communication and 100% satisfaction on
                  every move. From your first quote to the final delivery, our
                  team provides transparent updates and support. We include full
                  insurance and a straightforward damage-claims process, as
                  relocation experts recommend
                </p>
                <p className="mb-8 text-base text-gray-600">
                  You can trust Abu Muhammad Mover to handle any issue promptly
                  – your belongings are always protected.
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
          Our dedicated move coordinators are available 7 days a week, ensuring
          assistance whenever you need it. In a multicultural city like Dubai,
          our team is fluent in English and Arabic, ensuring nothing is lost in
          translation.
        </p>
        <p>
          We even include{" "}
          <Link
            className="underline underline-offset-2"
            href={"http://localhost:3000/furniture-installation"}
          >
            furniture disassembly and reassembly
          </Link>{" "}
          at no extra charge, making even complex moves simple. Our support line
          is open 24/7, so you can reach us anytime by phone or WhatsApp for any
          moving questions or urgent help.
        </p>
        <p>
          <b>Extra Benefits:</b> We understand that moving can be
          time-sensitive. That’s why we offer 24/7 support and can often arrange
          same-day or next-day moves. We also provide free moving supplies
          (boxes, tape) to get you started, and you can schedule delivery of
          these supplies in advance.
        </p>
        <p>
          {" "}
          For eco-conscious clients, we offer an eco-packing option using
          recyclable materials. No matter how complex your requirements, Abu
          Muhammad Mover will tailor a moving plan that fits your needs and
          budget. Your satisfaction is our top priority.
        </p>
      </section>
      <section id="moving-cost-section" className="md:px-0 px-3 mt-36">
        <h2 className="text-center max-w-2xl font-semibold mb-5 mx-auto  md:text-4xl text-3xl">
          Local Moving Cost in Dubai
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
      <section className="con mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
        <div className="bg-accent md:h-[420px] h-80 relative md:mx-10 mx-5 rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-full rotate-12 -z-10 rounded-3xl bg-[#ECD920]"></div>
          <Image
            src={"/local/family-moving-villa-dubai.jpg"}
            alt="Happy family moving into new villa in Dubai with the help of Abu Muhammad Movers team unloading boxes"
            fill
            className="absolute object-cover object-center rounded-3xl"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Satisfied Clients Reviews From Dubai
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Abu Muhammad Movers is a leading moving company committed to
            delivering exceptional relocation services across the United Arab
            Emirates. Since our inception, we have focused on providing
            reliable, efficient, and affordable moving solutions.
          </p>
        </div>
      </section>

      <TestimonialSlider
        testimonials={[
          {
            cus_name: " Sarah K., Dubai Hills",
            cus_message:
              "Abu Muhammad Mover made our Dubai Hills villa move completely stress-free. The team was on time and super professional. Highly recommend!",
            cus_rating: "5/5",
            cus_avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          },
          {
            cus_name: "Alex R., Dubai Marina",
            cus_message:
              "Great service in Dubai Marina! They handled my office equipment with care and got everything done fast. Very affordable too",
            cus_rating: "4/5",
            cus_avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          },
          {
            cus_name: " Faisal H., Business Bay",
            cus_message:
              "Top-notch experience moving from Business Bay. Friendly crew and reliable service. No hidden fees, just honest work!",
            cus_rating: "4.5",
            cus_avatar: "https://randomuser.me/api/portraits/men/42.jpg",
          },
          {
            cus_name: "Nadia L., JVC",
            cus_message:
              "Very pleased with the packing and moving services. They took care of our apartment move in JVC flawlessly. 5 stars!",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/women/21.jpg",
          },
          {
            cus_name: " Mohammed A., Al Nahda",
            cus_message:
              "Efficient and careful! We moved our Al Nahda home, and Abu Muhammad Mover handled all the furniture installation. Best movers in Dubai!",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/men/11.jpg",
          },
          {
            cus_name: " Emily G., Downtown Dubai",
            cus_message:
              "Fast, reliable, and kind movers. My Downtown Dubai studio move was done same-day and without a hitch. Highly satisfied!",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/women/58.jpg",
          },
          {
            cus_name: " The Khan Family, Arabian Ranches",
            cus_message:
              "Our family move to Arabian Ranches was easy thanks to this team. They even stored a few items for us temporarily. Excellent service!",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/men/50.jpg",
          },
        ]}
      />
      <CTA
        title=" Get Your Free Quote Today"
        desc={
          <>
            Ready to experience a hassle-free move with Dubai’s trusted local
            movers? Get Free Quote now by{" "}
            <Link
              className="underline underline-offset-2"
              href="/book-movers-online"
            >
              booking online
            </Link>{" "}
            or Contact With Movers directly:
          </>
        }
        extra={
          <>
            <ul className="text-start list-disc list-inside">
              <li>
                <b>Call / WhatsApp:</b> +971 55 6461731 or +971 56 7878464
              </li>
              <li>
                <b>Book Online:</b>{" "}
                <Link
                  className="underline underline-offset-2"
                  href="/book-movers-online"
                >
                  Click Here to book online
                </Link>{" "}
              </li>
            </ul>
            <p className="mt-3 text-gray-600">
              Make your next move the easiest one yet with Abu Muhammad Mover.
              We handle every detail so you can relax and enjoy your new space!
            </p>
          </>
        }
      />
      <FAQs
        Faqs={[
          {
            question:
              "How much do movers cost in Dubai for a 1‑bedroom apartment?",
            answer: (
              <>
                You can expect to pay AED 1,100–1,500 for a standard 1‑bedroom
                move within Dubai. Prices vary with distance, volume of items,
                and add‑on services like packing or storage, so it’s best to
                request a tailored quote.{" "}
              </>
            ),
          },
          {
            question:
              "Which is the best moving company in Dubai for local moves?",
            answer: (
              <>
                Among top‑ranked providers,{" "}
                <Link href={"/"}>Abu Muhammad Movers</Link>,{" "}
                <Link
                  rel="noopener noreferrer"
                  href={"https://iss-relocations.com/"}
                >
                  ISS Relocations
                </Link>{" "}
                ,
                <Link
                  rel="noopener noreferrer"
                  href={"https://www.crownrelo.com/"}
                >
                  Crown Relocations
                </Link>{" "}
                , and{" "}
                <Link
                  rel="noopener noreferrer"
                  href={"https://bestforwardmovers.com/"}
                >
                  Forward Movers
                </Link>{" "}
                consistently earn 5‑star reviews for reliability, trained crews,
                and full‑service offerings. As you compare, look for:
                <ul className="list-disc list-inside mt-2">
                  <li>Real customer testimonials</li>
                  <li>Transparent pricing and clear service breakdowns</li>
                  <li>A minimum 10+ years of local experience</li>
                </ul>
              </>
            ),
          },
          {
            question: "Do movers in Dubai provide packing materials and boxes?",
            answer: (
              <>
                Yes—most reputable movers include bubble wrap, sturdy cartons,
                packing tape, and protective blankets as part of an end‑to‑end
                service. Some budget operators may charge extra, so always
                confirm whether materials are “all‑inclusive.”
              </>
            ),
          },
          {
            question: "How do I choose a reliable local mover in Dubai?",
            answer: (
              <>
                Vet movers by:
                <ol className="list-decimal list-inside mt-2">
                  <li>Checking licensing (Dubai Municipality or DED)</li>
                  <li>
                    Reading ≥ 50 verified reviews on platforms like
                    ServiceMarket and Abu Muhammad Movers
                  </li>
                  <li>
                    Requesting a free on‑site survey for an accurate, written
                    quote
                  </li>
                  <li>Confirming insurance and warranty coverage</li>
                  <li>
                    Comparing at least 3 quotes for service scope and hidden‑fee
                    disclosures{" "}
                  </li>
                </ol>
              </>
            ),
          },
          {
            question: "Are there licensed and insured movers in Dubai?",
            answer: (
              <>
                Absolutely—top movers must be licensed by Dubai’s authorities
                and typically offer “goods‑in‑transit” insurance. You can
                compare insured, pre‑screened companies via portals like
                ServiceMarket and <Link href={"/"}>Abu Muhammad Movers</Link>,{" "}
                to ensure full liability coverage.
              </>
            ),
          },
          {
            question: "Can I move on the same day with local movers in Dubai?",
            answer: (
              <>
                Yes—several companies (e.g.{" "}
                <Link href={"/"}>Abu Muhammad Movers</Link> and{" "}
                <Link
                  rel="noopener noreferrer"
                  href={"https://dsmovers.ae/en/"}
                >
                  Dar Al Salam Movers
                </Link>
                ) advertise 24/7 on‑demand, same‑day service. Availability
                depends on slot openings and crew capacity, and may incur a
                10–20% urgency surcharge.
              </>
            ),
          },
          {
            question: "What is included in a local moving service in Dubai?",
            answer: (
              <>
                A full‑service local move generally covers:
                <ul className="list-disc list-inside mt-2">
                  <li>Pre‑move survey and written estimate</li>
                  <li>Packing of all household items</li>
                  <li>
                    Loading, transport, unloading in climate‑controlled trucks
                  </li>
                  <li>Unpacking and basic furniture reassembly</li>
                  <li>Disposal of packing debris</li>
                  <li>Optionally, short‑term storage</li>
                </ul>
              </>
            ),
          },
          {
            question:
              "Do local movers in Dubai handle furniture disassembly and reassembly?",
            answer: (
              <>
                Yes—expert movers routinely dismantle beds, wardrobes, shelving,
                then reassemble on‑site. This “white‑glove” service ensures
                bulky items fit elevators and tight corridors safely.
              </>
            ),
          },
          {
            question: "How early should I book local movers in Dubai?",
            answer: (
              <>
                <ul className="list-disc list-inside mt-2">
                  <li>Off‑peak, local moves: Book 2–4 weeks in advance</li>
                  <li>
                    Peak season (May–August) or weekends: aim for 4–6 weeks
                    ahead
                  </li>
                  <li>
                    Last‑minute: some movers take bookings with just 48 hours’
                    notice, subject to availability
                  </li>
                </ul>
              </>
            ),
          },
          {
            question: "Are there any hidden costs with movers in Dubai?",
            answer: (
              <>
                Watch for extra fees for:
                <ul className="list-disc list-inside mt-2">
                  <li>Stair carries (beyond 3 flights)</li>
                  <li>Long‑carry distances from door to truck</li>
                  <li>Bulky or special‑care items (pianos, safes)</li>
                  <li>Bulky or special‑care items (pianos, safes)</li>
                  <li>Elevator permits or parking‑zone charges</li>
                  <li>After‑hours or holiday surcharges </li>
                </ul>
              </>
            ),
          },
          {
            question:
              "Can local movers in Dubai move within the same building?",
            answer: (
              <>
                Yes—moving within the same block often operates at the lower end
                of the pricing scale. Many movers offer a 25–30% discounted
                local‑building rate if there’s no driving required.
              </>
            ),
          },
          {
            question: "Do local movers in Dubai handle office relocations?",
            answer: (
              <>
                Many specialize in both residential and commercial
                moves—providing extra packaging for electronics, modular office
                furniture disassembly, and secure data‑cable management.
                Corporate customers can often schedule moves outside business
                hours to minimize downtime.
              </>
            ),
          },
          {
            question: "What is the cheapest way to hire local movers in Dubai?",
            answer: (
              <>
                <ul className="list-disc list-inside mt-2">
                  <li>Self‑pack your non‑fragile items</li>
                  <li>Move off‑peak (October–April)</li>
                  <li>Compare ⩾ 3 quotes via aggregators</li>
                  <li>
                    Opt for bare‑bones transport only if you can handle
                    loading/unloading
                  </li>
                  <li>
                    Beware “too good to be true” rates—hidden fees often nullify
                    upfront savings.{" "}
                  </li>
                </ul>
              </>
            ),
          },
          {
            question:
              "Are there any local movers in Dubai with storage options?",
            answer: (
              <>
                es—providers like Easytruck and Forward Movers offer
                air‑conditioned warehouse pods for both short‑ and long‑term
                storage, with door‑to‑door pickup and return.
              </>
            ),
          },
          {
            question:
              "How long does it take for local movers in Dubai to complete a move?",
            answer: (
              <>
                A typical 1‑bedroom apartment relocation takes 3–6 hours
                door‑to‑door. Larger homes may require a full day or split into
                multiple visits if storage is involved.
              </>
            ),
          },
          {
            question: "Can I book local movers in Dubai online?",
            answer: (
              <>
                Yes—most leading movers (including Abu Muhammad Movers,
                ServiceMarket, Easytruck, and Forward Movers) offer instant
                online quotes and booking portals, with secure deposit/payment
                options for a truly contactless experience.
              </>
            ),
          },
        ]}
      />
    </main>
  );
};

export default LocalMoversInDubaiPage;

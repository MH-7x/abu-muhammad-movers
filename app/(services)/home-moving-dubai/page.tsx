import { Areas } from "@/components/core/Areas";
import CTA from "@/components/core/CTA";
import FAQs from "@/components/core/FAQs";

import ServiceHeroSection from "@/components/core/ServiceHeroSection";
import TestimonialSlider from "@/components/core/TestimonialsSlider";
import { Button } from "@/components/ui/button";
import {
  BadgeDollarSignIcon,
  HandshakeIcon,
  MedalIcon,
  NotebookPenIcon,
  PhoneCall,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { APP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Movers And Packers Dubai | Affordable House Shifting Services",
  description:
    "Are you looking for movers that will relocation you home within dubai or beyond dubai at best price, look no further than Abu Muhammad Movers, leading and best house shifting company in dubai. Contact us now!",
  alternates: {
    canonical: `${APP.url}/home-moving-dubai`,
  },
  openGraph: {
    title: "Home Movers And Packers Dubai | Affordable House Shifting Services",
    description:
      "Are you looking for movers that will relocation you home within dubai or beyond dubai at best price, look no further than Abu Muhammad Movers, leading and best house shifting company in dubai. Contact us now!",
    images: [`${APP.url}/home-moving-dubai`],
    url: `${APP.url}/home-moving-dubai`,
    type: "website",
    siteName: "Abu Muhammad Movers",
    phoneNumbers: ["+971 55 6461731", "+971 56 7878464"],
    emails: "abumuhammad.movers@gmail.com",
  },
  twitter: {
    title: "Home Movers And Packers Dubai | Affordable House Shifting Services",
    description:
      "Are you looking for movers that will relocation you home within dubai or beyond dubai at best price, look no further than Abu Muhammad Movers, leading and best house shifting company in dubai. Contact us now!",
    images: [`${APP.url}/home-moving-dubai`],
  },
};

const HomeMovingDubaiPage = () => {
  return (
    <main className="">
      <ServiceHeroSection
        title={{
          first: "Home Moving Dubai:",
          second: "Best Home Movers in Dubai",
        }}
        description="Since 2010, we have been dedicated to providing top-tier movers and packers in Dubai, helping countless individuals and families transition to their new homes with ease. "
        image={{
          src: "/images/movers-in-dubai.jpg",
          alt: "Abu Muhammad Movers home moving Dubai: three movers in black and yellow carrying branded boxes against Dubai skyline at sunset",
        }}
      />
      <section className="con mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
        <div className="bg-accent md:h-[400px] h-80 relative md:mx-10 mx-5 rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-full rotate-12 -z-10 rounded-3xl bg-[#ECD920]"></div>
          <Image
            src={"/images/abu-muhammad-movers.jpg"}
            alt="Two Movers of Abu Muhammad Team Checking the boxs"
            fill
            className="absolute object-cover object-center rounded-3xl"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Affordable House Shifting Services in Dubai
          </h2>
          <p className="mt-3 text-muted-foreground">
            We pride ourselves on being one of the leading moving companies in
            Dubai, committed to delivering exceptional house shifting services
            in Dubai tailored to your specific needs.
          </p>
          <p className="mt-3 text-muted-foreground">
            Whether you&#39;re relocating a studio apartment, a sprawling villa,
            or a compact office, our expert team is equipped to handle every
            aspect of your move.
          </p>
          <p className="mt-3 text-muted-foreground">
            Choose Abu Muhammad Movers for a smooth, efficient, and worry-free
            relocation experience.
          </p>

          <div className="flex gap-x-3 mt-3">
            <Link href={"#services-section"}>
              <Button>View Our Services</Button>
            </Link>

            <Link href="#moving-cost-section">
              <Button variant={"link"}>Our Pricing List</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="md:px-0 px-3 max-w-5xl mx-auto text-xl flex flex-col gap-y-5 text-gray-600 mt-36">
        <p>
          Moving home can be one of life&#39;s most significant events, filled
          with both excitement and challenges. The prospect of a new beginning
          in a new space is exhilarating, yet the process of packing,
          organizing, and physically moving your belongings can feel
          overwhelming.
        </p>
        <p>
          This is where Abu Muhammad Movers steps in – your trusted partner for
          seamless and stress-free home moving in Dubai.
        </p>
        <p>
          Our extensive experience in the complexities of relocating within
          Dubai and across the UAE has earned us a reputation for reliability,
          professionalism, and unparalleled customer care.
        </p>
        <p>
          We understand that we&#39;re not just moving boxes; we&#39;re moving
          your life, your memories, and your most cherished possessions.
        </p>
      </section>
      <section className="con mt-36 md:px-0 px-3">
        <h2 className="md:text-4xl text-3xl font-semibold md:leading-12 leading-[38px]">
          <span className="block">Why Choose Abu Muhammad Movers for</span>
          <span className="underline underline-offset-4 bg-primary text-[#ECD920] p-1">
            Your Home Move in Dubai
          </span>
        </h2>
        <p className="md:text-xl text-base mt-5 max-w-4xl  text-muted-foreground">
          Selecting the right moving company is crucial for a successful
          relocation. At Abu Muhammad Movers, we offer more than just
          transportation; we provide a comprehensive moving solution built on
          trust and expertise.
        </p>
        <p className="md:text-xl text-base mt-2 max-w-4xl text-muted-foreground">
          Here’s why we are the preferred choice for local movers in Dubai:
        </p>
        <div className="con grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <MedalIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Over a Decade of Experience
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                With more than 10 years in the Dubai moving industry, we have
                the knowledge and skills to navigate any moving challenge, from
                traffic management in busy districts to handling delicate items
                in high-rise buildings.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <BadgeDollarSignIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Licensed and Insured
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                We are a fully licensed and insured moving company, providing
                you with peace of mind knowing your belongings are protected
                throughout the moving process.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <HandshakeIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Expert Local Knowledge
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Our team is intimately familiar with all major Dubai
                neighborhoods, including Downtown Dubai, Arabian Ranches, Dubai
                Marina, Jumeirah, and Business Bay. This local expertise ensures
                efficient logistics and timely execution of your move.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <TruckIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Trained and Professional Team:
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Our movers and packers are rigorously trained in the best
                packing, loading, transportation, and unpacking techniques. They
                are courteous, respectful, and dedicated to providing a positive
                moving experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <TruckIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Customer-Centric Approach:
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                We prioritize your needs and work closely with you to create a
                customized moving plan. Our goal is your complete satisfaction,
                and we go the extra mile to ensure a smooth transition to your
                new home.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <TruckIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Transparent Pricing:
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                We believe in honesty and transparency. Our quotes are detailed
                and free of hidden fees, so you know exactly what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="con mt-36 md:px-0 px-3" id="services-section">
        <h2 className="md:text-4xl text-3xl font-semibold md:leading-11 leading-[38px] max-w-lg mx-auto text-center">
          Our Home Moving Services in Dubai
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mt-5 text-lg/6 text-center">
          Abu Muhammad Movers offers a full spectrum of moving and packing
          services designed to cover every requirement of your home relocation
          in Dubai.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 items-center md:px-10">
          <div>
            <h3 className="md:text-3xl text-2xl mb-5">Villa Movers in Dubai</h3>
            <p className="text-gray-600">
              Moving a villa requires specialized expertise due to the size,
              volume of belongings, and often intricate furniture and outdoor
              items. Our villa movers in Dubai are highly experienced in
              managing large-scale relocations.
            </p>
            <p className="text-gray-600 mt-2">
              We provide comprehensive packing for all household items, careful
              handling of bulky furniture, and efficient transportation to your
              new villa, ensuring everything arrives safely and in perfect
              condition.
            </p>
            <div className="mt-5 flex gap-x-4">
              <Button>
                Call Now <PhoneCall />
              </Button>
              <Button variant={"secondary"}>
                Request A Quote <NotebookPenIcon />
              </Button>
            </div>
          </div>
          <div className="min-h-[400px] bg-secondary rounded-3xl relative overflow-hidden md:ml-16">
            <Image
              src={"/images/villa-movers-in-dubai.jpg"}
              alt="Villa movers Dubai by Abu Muhammad Movers loading wooden furniture onto a black-and-yellow moving truck"
              fill
              className="object-cover  absolute object-center"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 items-center md:px-10">
          <div className="min-h-[400px] bg-secondary rounded-3xl relative overflow-hidden md:mr-16">
            <Image
              src={"/images/apartment-moving-in-dubai.jpg"}
              alt="Abu Muhammad Movers packing glassware in branded boxes inside a Dubai high-rise near Marina"
              fill
              className="object-cover  absolute object-center"
            />
          </div>
          <div>
            <h3 className="md:text-3xl text-2xl mb-5">
              Apartment Moving Services in Dubai
            </h3>
            <p className="text-gray-600">
              Whether you&#39;re moving from or to a cozy studio apartment or a
              spacious penthouse, our apartment moving services in Dubai are
              tailored to suit all sizes.
            </p>
            <p className="text-gray-600 mt-2">
              We understand the specific challenges of apartment moves,
              including navigating stairwells, elevators, and building
              regulations.
            </p>
            <p className="text-gray-600 mt-2">
              Our team ensures minimal disruption and efficient handling of your
              belongings, making your apartment transition smooth and
              effortless.
            </p>
            <div className="mt-5 flex gap-x-4">
              <Button>
                Call Now <PhoneCall />
              </Button>
              <Button variant={"secondary"}>
                Request A Quote <NotebookPenIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 items-center md:px-10">
          <div>
            <Link href={"#"}>
              <h3 className="md:text-3xl text-2xl mb-5">
                Office Movers in Dubai
              </h3>
            </Link>
            <p className="text-gray-600">
              Relocating an office, whether it&#39;s a small home office or a
              larger corporate space, requires careful planning to minimize
              downtime.
            </p>
            <p className="text-gray-600 mt-2">
              Our office movers in Dubai are adept at efficiently packing and
              transporting office equipment, furniture, and documents with
              minimal disruption to your business operations.
            </p>
            <p className="text-gray-600 mt-2">
              We ensure a swift and organized move to your new workspace.
            </p>
            <div className="mt-5 flex gap-x-4">
              <Button>
                Call Now <PhoneCall />
              </Button>
              <Button variant={"secondary"}>
                Request A Quote <NotebookPenIcon />
              </Button>
            </div>
          </div>
          <div className="min-h-[400px] bg-secondary rounded-3xl relative overflow-hidden md:ml-16">
            <Image
              src={"/images/office-movers-dubai.jpg"}
              alt="Office relocation Dubai: Abu Muhammad Movers staff rolling server rack and disassembling desks"
              fill
              className="object-cover  absolute object-center"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 items-center md:px-10">
          <div className="min-h-[400px] bg-secondary rounded-3xl relative overflow-hidden md:mr-16">
            <Image
              src={"/images/packing-services.jpg"}
              alt="Close-up of hands sealing a yellow-taped ‘Fragile’ box with bubble-wrap and branded tape"
              fill
              className="object-cover  absolute object-center"
            />
          </div>
          <div>
            <Link href={"#"}>
              <h3 className="md:text-3xl text-2xl mb-5">
                Packing and Unpacking Services Dubai
              </h3>
            </Link>
            <p className="text-gray-600">
              Proper packing is the foundation of a successful move. Our
              professional packing services in Dubai utilize high-quality
              packing materials to ensure the safety of your belongings.
            </p>
            <p className="text-gray-600 mt-2">
              Our skilled packers carefully wrap and box everything from fragile
              items and electronics to books and clothing.
            </p>
            <p className="text-gray-600 mt-2">
              Upon arrival at your new home, we also offer comprehensive
              unpacking services, helping you settle in faster by unpacking
              boxes and placing items in their designated rooms.
            </p>
            <div className="mt-5 flex gap-x-4">
              <Button>
                Call Now <PhoneCall />
              </Button>
              <Button variant={"secondary"}>
                Request A Quote <NotebookPenIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 items-center md:px-10">
          <div>
            <Link href="#">
              {" "}
              <h3 className="md:text-3xl text-2xl mb-5">
                Storage Services Dubai
              </h3>{" "}
            </Link>
            <p className="text-gray-600">
              If your new home isn&#39;t ready or you need temporary storage
              during your move, we offer secure storage services in Dubai.
            </p>
            <p className="text-gray-600 mt-2">
              Our storage solutions provide a safe and climate-controlled
              environment for your belongings, whether you need short-term or
              long-term storage.
            </p>

            <div className="mt-5 flex gap-x-4">
              <Button>
                Call Now <PhoneCall />
              </Button>
              <Button variant={"secondary"}>
                Request A Quote <NotebookPenIcon />
              </Button>
            </div>
          </div>
          <div className="min-h-[400px] bg-secondary rounded-3xl relative overflow-hidden md:ml-16">
            <Image
              src={"/images/storage-services.jpg"}
              alt="Secure climate-controlled storage unit with branded boxes and mover with cart"
              fill
              className="object-cover  absolute object-center"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 items-center md:px-10">
          <div className="min-h-[400px] bg-secondary rounded-3xl relative overflow-hidden md:mr-16">
            <Image
              src={"/images/furniture-assembling.jpg"}
              alt="Furniture assembly in Dubai: mover using drill to build table with branded crates nearby"
              fill
              className="object-cover  absolute object-center"
            />
          </div>
          <div>
            <Link href={"#"}>
              <h3 className="md:text-3xl text-2xl mb-5">
                Furniture Disassembly, Assembly, and Installation
              </h3>
            </Link>
            <p className="text-gray-600">
              Handling large furniture requires expertise and the right tools.
            </p>
            <p className="text-gray-600 mt-2">
              Our team is skilled in furniture disassembly and assembly in
              Dubai, ensuring your beds, wardrobes, tables, and other items are
              taken apart safely for transit and reassembled correctly in your
              new home.
            </p>
            <p className="text-gray-600 mt-2">
              We also provide furniture installation services, helping you set
              up your space exactly as you envision.
            </p>
            <div className="mt-5 flex gap-x-4">
              <Button>
                Call Now <PhoneCall />
              </Button>
              <Button variant={"secondary"}>
                Request A Quote <NotebookPenIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="con mt-36 md:px-0 px-3">
        <h2 className="md:text-4xl text-3xl font-semibold">
          Our Specialized Moving Solutions
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-4xl">
          Some items require extra care and expertise during a move. Abu
          Muhammad Movers offers specialized moving services for valuable,
          fragile, or unusually sized belongings.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div className=" bg-secondary rounded-3xl relative overflow-hidden pb-5">
            <div className="md:h-96 h-80 bg-secondary relative overflow-hidden">
              <Image
                src={"/images/art-moving.jpg"}
                alt="Fine art and piano movers in Dubai crating artwork and lifting a grand piano"
                fill
                className={"absolute object-cover object-center"}
              />
            </div>
            <div className="px-5 mt-5">
              <h3 className="md:text-3xl text-2xl mb-3">
                Fine Art Movers in Dubai
              </h3>
              <p className="text-gray-600 text-base/5">
                Our fine art movers for residential relocation in Dubai are
                trained in the specific techniques required to pack, crate, and
                transport valuable artwork safely.
              </p>
              <p className="text-gray-600 text-base/5 mt-2">
                We use specialized materials and methods to ensure your pieces
                are protected from damage.
              </p>
              <div className="mt-5 flex gap-x-4">
                <Button>
                  Call Now <PhoneCall />
                </Button>
                <Button variant={"link"}>
                  Request A Quote <NotebookPenIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className=" bg-secondary rounded-3xl relative overflow-hidden pb-5">
            <div className="md:h-96 h-80 bg-secondary relative overflow-hidden">
              <Image
                src={"/images/piano-movers.jpg"}
                alt="three movers moving piano from home to truck in dubai"
                fill
                className={"absolute object-cover object-center"}
              />
            </div>
            <div className="px-5 mt-5">
              <h3 className="md:text-3xl text-2xl mb-3">
                Piano Movers in Dubai
              </h3>
              <p className="text-gray-600 text-base/5">
                Pianos are heavy, delicate, and require careful handling.
              </p>
              <p className="text-gray-600 text-base/5 mt-2">
                Our experienced piano movers in Dubai have the necessary
                equipment and expertise to safely move pianos of all sizes,
                ensuring they reach their destination without a scratch.
              </p>
              <div className="mt-5 flex gap-x-4">
                <Button>
                  Call Now <PhoneCall />
                </Button>
                <Button variant={"link"}>
                  Request A Quote <NotebookPenIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className=" bg-secondary rounded-3xl relative overflow-hidden pb-5">
            <div className="md:h-96 h-80 bg-secondary relative overflow-hidden">
              <Image
                src={"/images/pet-relocation.jpg"}
                alt="Pet relocation Dubai: mover with puppy in branded yellow carrier beside car transport trailer"
                fill
                className={"absolute object-cover object-center"}
              />
            </div>
            <div className="px-5 mt-5">
              <h3 className="md:text-3xl text-2xl mb-3">
                Pet Relocation in Dubai
              </h3>
              <p className="text-gray-600 text-base/5">
                We understand that your pets are part of your family.
              </p>
              <p className="text-gray-600 text-base/5 mt-2">
                While we focus on moving your household items, we can guide you
                on reliable pet relocation services in Dubai to ensure your
                furry friends are safely and comfortably transported to your new
                home.
              </p>
              <div className="mt-5 flex gap-x-4">
                <Button>
                  Call Now <PhoneCall />
                </Button>
                <Button variant={"link"}>
                  Request A Quote <NotebookPenIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className=" bg-secondary rounded-3xl relative overflow-hidden pb-5">
            <div className="md:h-96 h-80 bg-secondary relative overflow-hidden">
              <Image
                src={"/images/large-item-moving.png"}
                alt="movers packing large item of home"
                fill
                className={"absolute object-cover object-center"}
              />
            </div>
            <div className="px-5 mt-5">
              <h3 className="md:text-3xl text-2xl mb-3">
                Moving Large Furniture within Dubai
              </h3>
              <p className="text-gray-600 text-base/5">
                Even if you&#39;re not moving homes but need to relocate large
                or heavy furniture within your current residence.
              </p>
              <p className="text-gray-600 text-base/5 mt-2">
                our team can provide the muscle and expertise to move items
                safely and efficiently.
              </p>
              <div className="mt-5 flex gap-x-4">
                <Button>
                  Call Now <PhoneCall />
                </Button>
                <Button variant={"link"}>
                  Request A Quote <NotebookPenIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-5xl mx-auto">
        <h2 className="md:text-4xl text-3xl font-semibold">
          The Abu Muhammad Movers Process:{" "}
          <span className="md:block">How We Ensure a Smooth Move</span>
        </h2>
        <p className="text-gray-600 mt-3">
          We follow a structured and efficient process to make your home moving
          experience as seamless as possible:
        </p>

        <ol className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4 list-decimal list-inside text-gray-600">
          <li className="bg-secondary/50 p-3 rounded-2xl">
            <strong> Initial Consultation:</strong> Contact us to discuss your
            moving needs. We&#39;ll provide a free consultation and answer all
            your questions.
          </li>
          <li className="bg-secondary/50 p-3 rounded-2xl">
            <strong>Pre-Move Assessment:</strong> For larger moves, we conduct
            an on-site survey to assess the volume of items, identify specific
            requirements (like handling fragile or bulky items), and plan the
            logistics.
          </li>
          <li className="bg-secondary/50 p-3 rounded-2xl">
            <strong> Detailed Moving Plan:</strong> Based on the assessment, we
            create a customized moving plan outlining the timeline, services
            included, and any special instructions.
          </li>
          <li className="bg-secondary/50 p-3 rounded-2xl">
            <strong>Professional Packing:</strong> Our expert packers arrive on
            the scheduled day with high-quality materials to pack your
            belongings carefully and efficiently.
          </li>
          <li className="bg-secondary/50 p-3 rounded-2xl">
            <strong>Safe Loading and Transportation:</strong> Our trained movers
            carefully load the packed items onto our well-maintained,
            shock-absorbing vehicles. Our experienced drivers ensure safe
            transportation to your new location.
          </li>
          <li className="bg-secondary/50 p-3 rounded-2xl">
            <strong>Efficient Unloading:</strong> Upon arrival, we carefully
            unload your belongings, placing boxes and furniture in the
            designated rooms as per your instructions.
          </li>
          <li className="bg-secondary/50 p-3 rounded-2xl">
            <strong>Unpacking and Furniture Assembly:</strong> If opted for, our
            team will unpack your boxes and reassemble any furniture that was
            disassembled for the move, helping you get settled quickly.
          </li>
        </ol>
      </section>
      <section id="moving-cost-section" className="md:px-0 px-3 mt-36">
        <h2 className="text-center max-w-2xl font-semibold mb-5 mx-auto  md:text-4xl text-3xl">
          Home Moving Cost in Dubai
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
      <Areas />
      <TestimonialSlider
        title="What Our Clients Say"
        testimonials={[
          {
            cus_name: "Sarah K.",
            cus_message:
              "Abu Muhammad Movers made our move from Arabian Ranches to Jumeirah a breeze. The team was professional, efficient, and handled everything with care. Highly recommended!",
            cus_rating: "5/5",
            cus_avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          },
          {
            cus_name: "Ahmed F.",
            cus_message:
              "Moving my office in Business Bay seemed daunting, but Abu Muhammad Movers managed it perfectly. Minimal disruption and everything was set up quickly at the new location.",
            cus_rating: "4/5",
            cus_avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          },
          {
            cus_name: "David L.",
            cus_message:
              "I needed temporary storage for some furniture during my renovation. Abu Muhammad Movers provided a secure and convenient solution.",
            cus_rating: "4.5",
            cus_avatar: "https://randomuser.me/api/portraits/men/42.jpg",
          },
          {
            cus_name: "Fatima R.",
            cus_message:
              "I moved from JVC to Al Barsha, and the crew arrived on time, packed everything carefully, and even helped with unpacking. Stress-free experience from start to finish.",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/women/21.jpg",
          },
          {
            cus_name: "Mohammed A.",
            cus_message:
              "Great service! They helped us move our villa in Springs quickly and with no damage. The team was polite and organized.",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/men/11.jpg",
          },
          {
            cus_name: "Lina M.",
            cus_message:
              "We were worried about moving fragile items, but Abu Muhammad Movers packed everything professionally. Not a single scratch!",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/women/58.jpg",
          },
          {
            cus_name: "Khalid Z.",
            cus_message:
              "Used them twice already—once for home, once for office. Both times, the experience was smooth and stress-free.",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/men/50.jpg",
          },
          {
            cus_name: "Emily J.",
            cus_message:
              "Friendly staff and great communication. They kept us updated throughout the entire move. Would definitely use again!",
            cus_rating: "4.5",
            cus_avatar: "https://randomuser.me/api/portraits/women/36.jpg",
          },
          {
            cus_name: "Yousef B.",
            cus_message:
              "Fast, affordable, and careful. Everything you want in a moving company. Thanks again!",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/men/47.jpg",
          },
          {
            cus_name: "Noura H.",
            cus_message:
              "They helped me move into my first apartment in Dubai Marina. It was quick and easy, and they even helped with furniture setup.",
            cus_rating: "5",
            cus_avatar: "https://randomuser.me/api/portraits/women/12.jpg",
          },
        ]}
      />
      <FAQs
        Faqs={[
          {
            question: "How much does it cost to hire home movers in Dubai?",
            answer: (
              <>
                The cost varies depending on factors like the size of your home,
                the volume of items, the distance of the move, and services
                required,{" "}
                <Link
                  className="underline underline-offset-2"
                  href={"#moving-cost-section"}
                >
                  click to see the estimate cost of moving home in dubai
                </Link>{" "}
                or Contact us for a free, no-obligation quote tailored to your
                specific needs.{" "}
              </>
            ),
          },
          {
            question: "Are you affordable home movers and packers in Dubai?",
            answer:
              "Yes, we strive to provide high-quality moving and packing services at competitive and affordable prices. We offer transparent pricing with no hidden fees.  ",
          },
          {
            question: "How can I get a free quote for home moving in Dubai?",
            answer: (
              <>
                You can easily get a free quote by contacting us via{" "}
                <Link
                  className="underline underline-offset-2"
                  href={"tel:+971 55 6461731"}
                >
                  phone
                </Link>
                ,{" "}
                <Link
                  className="underline underline-offset-2"
                  href={
                    "https://wa.me/+971556461731?text=I%20am%20looking%20for%20movers%20!"
                  }
                >
                  WhatsApp
                </Link>
                , or by filling out the{" "}
                <Link
                  className="underline underline-offset-2"
                  href={"/book-movers-online"}
                >
                  contact form on our website
                </Link>
                . We&#39;ll gather details about your move and provide a
                detailed estimate.{" "}
              </>
            ),
          },
          {
            question:
              "What is the estimated cost for moving a 3 bedroom villa in Dubai?",
            answer: (
              <>
                The cost of moving a 3-bedroom villa typically ranges from AED
                2,350 to AED 3,250. Pricing depends on factors such as the
                volume of items, the complexity of the move, and any additional
                services required. For an accurate quote, we highly recommend
                scheduling a free on-site assessment.
              </>
            ),
          },
          {
            question:
              "Do you offer budget-friendly house shifting services in Dubai?",
            answer: (
              <>
                Yes, we aim to provide cost-effective house shifting services in
                Dubai without compromising on quality or the safety of your
                belongings. We offer tailored solutions to fit different
                budgets.
              </>
            ),
          },
          {
            question:
              "Do your home movers in Dubai offer packing and unpacking services?",
            answer: (
              <>
                Absolutely. We offer comprehensive{" "}
                <Link className="underline underline-offset-2" href={"#"}>
                  packing and unpacking services
                </Link>{" "}
                using high-quality materials to ensure your items are secure
                during transit.
              </>
            ),
          },
          {
            question:
              "Are furniture disassembly and assembly included in your home moving services in Dubai?",
            answer: (
              <>
                Yes, our professional team is skilled in the safe disassembly
                and reassembly of furniture as part of our standard home moving
                services.
              </>
            ),
          },
          {
            question:
              "Why are you considered among the best home movers in Dubai for fragile items? ",
            answer: (
              <>
                We use specialized packing techniques and high-quality
                protective materials to ensure fragile and delicate items are
                securely packed and transported, minimizing the risk of damage.
              </>
            ),
          },
          {
            question:
              "Can you provide home shifting services in Dubai including temporary storage?  ",
            answer: (
              <>
                Yes, we offer secure, temporary storage solutions if needed
                between moving out of your old home and into your new one.
              </>
            ),
          },
          {
            question:
              "What is the typical studio apartment moving cost in Dubai? ",
            answer: (
              <>
                The cost for moving a studio apartment is from AED 650 to 1050
                which is generally lower than larger properties and depends on
                the volume of items and distance.
              </>
            ),
          },
          {
            question:
              "Do you have experience with moving services for large villas in Dubai?  ",
            answer: (
              <>
                Yes, we have 15+ experience in handling moves for large villas,
                with the team and equipment necessary for efficient and safe
                relocation of all your belongings.
              </>
            ),
          },
        ]}
      />
      <CTA
        desc="Ready to plan your stress-free home move in Dubai? Contact Abu Muhammad Movers today for a free, no-obligation quote. Our team is ready to assist you with personalized moving solutions that fit your needs and budget."
        title="Get Your Free Quote for Home Moving in Dubai
"
      />
    </main>
  );
};

export default HomeMovingDubaiPage;

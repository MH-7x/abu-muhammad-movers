import FAQs from "@/components/core/FAQs";
import ServiceHeroSection from "@/components/core/ServiceHeroSection";
import TestimonialSlider from "@/components/core/TestimonialsSlider";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  DollarSign,
  MedalIcon,
  Truck,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { APP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Single Item Movers in Dubai | Affordable Furniture Moving Service",
  description:
    "Need to move just one item in Dubai? Abu Muhammad Movers offers licensed, affordable single item moving for sofas, appliances, pianos & more. Same-day pickup available. Get a free quote now!",
  alternates: {
    canonical: `${APP.url}/single-item-movers-dubai`,
  },
  openGraph: {
    title: "Single Item Movers in Dubai | Affordable Furniture Moving Service",
    description:
      "Need to move just one item in Dubai? Abu Muhammad Movers offers licensed, affordable single item moving for sofas, appliances, pianos & more. Same-day pickup available. Get a free quote now!",
    url: `${APP.url}/single-item-movers-dubai`,
    images: [
      {
        url: `${APP.url}/single/single-item-movers-dubai-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Abu Muhammad Movers team loading a single sofa into a moving truck in Dubai.",
      },
    ],
  },
  twitter: {
    title: "Single Item Movers in Dubai | Affordable Furniture Moving Service",
    description:
      "Need to move just one item in Dubai? Abu Muhammad Movers offers licensed, affordable single item moving for sofas, appliances, pianos & more. Same-day pickup available. Get a free quote now!",
    images: [
      {
        url: `${APP.url}/single/single-item-movers-dubai-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Abu Muhammad Movers team loading a single sofa into a moving truck in Dubai.",
      },
    ],
  },
};

const SingleItemMoversPage = () => {
  return (
    <main>
      <section className="con mt-40 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Single Item Movers in Dubai, Abu Muhammad Movers
          </h1>
          <p className="mt-3 text-muted-foreground">
            At Abu Muhammad Movers, we specialize in single item moving services
            across Dubai.
          </p>
          <p className="mt-3 text-muted-foreground">
            We know it can be hard to find a mover for just one sofa, fridge, or
            piano, but our licensed, insured team is ready 24/7 to help. With
            over 10 years of experience in Dubai, we offer same-day pickup,
            transparent pricing, and a 100% satisfaction guarantee.
          </p>
          <p className="mt-3 text-muted-foreground">
            Our local mini movers are on call to make your life easier. Whether
            it’s heavy furniture or delicate artwork, we provide stress-free,
            hassle-free moves at affordable rates.
          </p>

          <div className="flex gap-x-3 mt-3">
            <Link href={"tel:+971556461731"}>
              <Button>Call Us Now</Button>
            </Link>

            <Link href="#moving-cost-section">
              <Button variant={"link"}>Pricing List</Button>
            </Link>
          </div>
        </div>
        <div className="bg-accent md:h-96 h-80 relative md:mx-10 mx-5 rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-full rotate-12 -z-10 rounded-3xl bg-[#ECD920]"></div>
          <Image
            src={"/single/single-item-movers-dubai-hero.jpg"}
            alt="Abu Muhammad Movers team loading a single sofa into a moving truck in Dubai."
            fill
            className="absolute object-cover object-center rounded-3xl"
          />
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-5xl mx-auto">
        <h2 className="md:text-4xl text-3xl font-semibold">
          Our Single Item Moving Services
        </h2>
        <p className="text-gray-600 mt-3">
          At Abu Muhammad Movers, no job is too small or too large. As
          experienced furniture movers, appliance movers and piano movers in
          Dubai, we handle a wide range of items. Our services include moving:
        </p>

        <ul className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4 list-disc list-inside text-gray-600 font-semibold">
          <li className="bg-secondary/50 p-5 rounded-2xl">
            Sofas, couches and living room furniture
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            Chairs, tables and bedroom furniture
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            Refrigerators, washing machines and kitchen appliances
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            TVs, computers and other electronics
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            Pianos and other musical instruments (upright or keyboard)
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            Artwork, mirrors, antiques and decor
          </li>
          <li className="bg-secondary/50 p-5 rounded-2xl">
            Office equipment (desks, chairs, printers)
          </li>
        </ul>
        <p className="text-gray-600 mt-5 text-lg">
          Each item is carefully packed and protected using high-quality packing
          materials (bubble wrap, blankets, custom crates, etc.) – we even offer
          full packing services if needed.
        </p>
        <p className="text-gray-600 mt-3 text-lg">
          Our mini movers use clean, well-maintained vans and trucks, so your
          item gets to its destination safely.
        </p>
        <p className="text-gray-600 mt-3 text-lg">
          Because we operate compact vehicles, same-emirate moves can often cost
          under AED 500, making us one of the most budget-friendly movers for
          single items.
        </p>
      </section>
      <section className="con mt-36 md:px-0 px-3">
        <h2 className="md:text-4xl text-3xl font-semibold md:leading-12 leading-[38px]">
          <span className="block">Why Choose Us For Moving?</span>
          <span className="underline underline-offset-4 bg-primary text-[#ECD920] p-1">
            Abu Muhammad Movers
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
                Licensed & Insured
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                We are fully licensed and insured in Dubai, giving you complete
                peace of mind.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <UsersRoundIcon className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                10+ Years Experience
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Our Dubai-based team has a decade of experience, so we know the
                city inside out.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <Truck className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                100% Satisfaction Guarantee:
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Your happiness is our priority. We promise reliable, friendly
                service on every move.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <DollarSign className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Expert & Certified Crew:
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Our movers are professionally trained and certified. They have
                the right equipment (dollies, straps, padding) to handle heavy
                or delicate items with care.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <DollarSign className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Fast & Flexible:
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                Need a last-minute or same-day move? We offer quick response
                times and can often arrange moves on short notice.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-3xl">
            <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
              <DollarSign className="w-16 h-16" />
            </div>
            <div className="col-span-3 bg-accent rounded-r-2xl p-4">
              <h3 className="font-semibold md:text-xl text-lg">
                Affordable & Transparent
              </h3>
              <p className=" text-muted-foreground mt-1 text-sm">
                We give clear, all-inclusive pricing with no hidden fees. For
                example, moving a single sofa within Dubai starts around AED
                400, with smaller items like chairs starting from AED 100.
              </p>
            </div>
          </div>
        </div>
        <p className="md:text-xl text-base mt-8 max-w-4xl text-muted-foreground">
          With our dedicated local service, you’ll enjoy a worry-free,
          stress-free move. Relax while our team does the heavy lifting and
          setup – we’ll even place and assemble your furniture at no extra
          charge!
        </p>
      </section>
      <section className="md:px-0 px-3 mt-36 con">
        <h2 className="text-center md:text-4xl text-3xl font-semibold">
          How Our Single-Item Moving Process Works
        </h2>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-center">
          Our moving process is designed to be simple and efficient, ensuring a
          smooth transition for you and your belongings.
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
              1. Free Quote & Booking:
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Contact us via phone, WhatsApp or our website to get a fast, free
              estimate. Tell us about your item (type, size, pickup and drop-off
              locations) and we’ll provide a clear quote.
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
              2. Planning & Packing:
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              We assess whether packing is needed. If your item is delicate
              (glass, electronics, etc.), we pack it securely with bubble wrap,
              boxes, or custom crates. Otherwise, we can move it as-is.
            </p>
          </div>

          <div className="bg-accent rounded-2xl p-5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 relative">
              <Image
                src={"/images/packing-and-loading-icon.png"}
                alt="4. Packing and Loading icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">3. Pickup Day</h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Our professional movers arrive on time in a clean mini-truck. They
              carefully load your item using the proper lifting techniques and
              equipment.
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
              4. Safe Transportation
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              We drive directly to the destination – often with no stops in
              between – to ensure the fastest, safest delivery.
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
              5. Delivery & Setup:
            </h3>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Upon arrival, we unload and place your item exactly where you want
              it. Need your TV mounted or furniture reassembled? Our team can
              help with that too.
            </p>
          </div>
        </div>
        <p className="text-muted-foreground mt-5 max-w-3xl mx-auto text-center">
          Ready to make your move? Call Now for Fast Pickup or Get a Free Quote
          – our team is standing by to help you book a stress-free single-item
          move in Dubai.
        </p>
      </section>
      <section
        id="moving-cost-section"
        className="flex flex-col lg:flex-row items-center justify-between con mt-36 md:px-0 px-3"
      >
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Single Items Moving Prices
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            We keep costs low by using efficient small vans and clear pricing.
            Starting prices for common single-item moves include (Dubai local
            moves, starting from):
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
            {[
              "Single Chair: ~AED 100",
              "Armchair: ~AED 150",
              "2-Seater Sofa: ~AED 200",
              "3-Seater Sofa: ~AED 300",
              "Single Fridge: ~AED 250",
              "Washing Machine: ~AED 200",
              "Upright Piano: ~AED 600",
              "Artwork/Antiques: ~AED 150",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-semibold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg">
            (Example: Moving a standard sofa within Dubai is about AED 400.)
            Actual rates depend on distance and item specifics, but rest assured
            we provide no-surprise quotes and a precise final price before any
            move.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full  mt-10 lg:mt-0 lg:pl-32">
          <div className="rounded-xl shadow-lg relative md:h-[400px] h-80 overflow-hidden">
            <Image
              src="/single/trust-guarantee-badge.jpg" // Replace with actual path
              alt="100% satisfaction guarantee badge for Abu Muhammad Movers in Dubai."
              fill
              className="object-cover object-center absolute"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-between con mt-36 md:px-0 px-3">
        <div className="lg:w-1/2 w-full  mt-10 lg:mt-0 lg:pr-32">
          <div className="rounded-xl shadow-lg relative md:h-[400px] h-80 overflow-hidden">
            <Image
              src="/single/item-types-moved-collage.jpg" // Replace with actual path
              alt="Collage of single items moved by Abu Muhammad Movers: piano, fridge, sofa, and artwork."
              fill
              className="object-cover object-center absolute"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What We Move
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            We specialize in one-item moves and “mini moves.” In addition to
            furniture and appliances, here are some items we regularly handle:
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
            {[
              "Electronics: TV, home theater, computers",
              "Gym Equipment: Treadmill, exercise bike",
              "Personal Items: Boxed belongings, luggage",
              "Office Equipment: Printers, copiers",
              "Delicate Items: Antiques, paintings, sculptures",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-semibold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg">
            If you have a unique item, just ask us! Our team has the tools and
            know-how to move almost anything safely and efficiently.
          </p>
        </div>
      </section>
      <section className="con mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
        <div className="bg-accent md:h-[420px] h-80 relative md:mx-10 mx-5 rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-full rotate-12 -z-10 rounded-3xl bg-[#ECD920]"></div>
          <Image
            src={"/single/customer-testimonial-scene.jpg"}
            alt="Customer posing with Abu Muhammad Movers team after a successful move in Dubai."
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
            cus_name: " Fatima S., Dubai ",
            cus_message:
              "Abu Muhammad Movers made our single-item move a breeze. They arrived on time and moved my piano carefully and quickly. Friendly, professional service – I will definitely use them again!",
            cus_rating: "5/5",
            cus_avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          },
          {
            cus_name: "Omar H., Dubai Marina",
            cus_message:
              "Highly recommended! They helped us move a heavy sofa set to our villa. Very efficient team, no damage, and great rates",
            cus_rating: "4/5",
            cus_avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          },

          {
            cus_name: "Aisha M., Jumeirah ",
            cus_message:
              "Quick and reliable. I needed a same-day move for my fridge, and they were there within hours. Excellent customer service!",
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
      <FAQs
        Faqs={[
          {
            question: "Do you really move just one item?",
            answer:
              "Yes! Whether it’s one piece of furniture, a single box, or any single item, we specialize in one-item and small moves across Dubai.",
          },
          {
            question: "Are you licensed and insured?",
            answer:
              "Absolutely. Abu Muhammad Movers is fully licensed to operate in Dubai and offers full insurance coverage for your peace of mind.",
          },
          {
            question: "Do you offer packing services?",
            answer:
              "Yes, we provide professional packing services and materials if you need them. Otherwise, you can also pack the item yourself.",
          },
          {
            question: "How do you calculate the price?",
            answer:
              "We charge based on the item size, weight and distance. After we understand your move details, we give you a fixed quote with no hidden fees. For example, a local sofa move is around AED 400.",
          },
          {
            question: "Can I get same-day service?",
            answer:
              "We often offer same-day or next-day pickup for moves within Dubai, depending on availability. Call us, and we’ll do our best to accommodate your schedule.",
          },
          {
            question: "How can I book a move?",
            answer:
              "Simply Call Now or Book Your Move Online through our website. Provide your details, and our friendly team will confirm your booking immediately.",
          },
        ]}
      />
      <ServiceHeroSection
        ctaUse={true}
        title={{
          first: "Ready to Move?",
          second: "Contact Abu Muhammad Movers Today!",
        }}
        description="Ready to move your single item with ease? Contact Abu Muhammad Movers today for a free quote and let us make your next single-item move fast, easy, and worry-free!"
        image={{
          src: "/single/same-day-single-item-move.jpg",
          alt: "Mover delivering a TV for a same-day single item move in Dubai.",
        }}
      />
    </main>
  );
};

export default SingleItemMoversPage;

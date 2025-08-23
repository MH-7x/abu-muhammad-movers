import Content from "@/components/Content";
import CTA from "@/components/core/CTA";

import { Button } from "@/components/ui/button";
import {
  BadgeDollarSignIcon,
  FileCheck2Icon,
  FileCheckIcon,
  HandshakeIcon,
  LucideUsers2,
  MedalIcon,
  MessageCircleMore,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import FAQs from "../components/core/FAQs";
import Link from "next/link";
import Services from "@/components/core/Services";
import { LocationCard } from "@/components/core/LocationCards";
import type { Metadata } from "next";
import { APP } from "@/lib/constants";
import ServiceHeroSection from "@/components/core/ServiceHeroSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import { homePageFaqs } from "@/lib/FAQs";
import Script from "next/script";

export const locations = [
  {
    city: "Movers in Dubai",
    description:
      "Connect with Movers in Dubai, just call / whatsapp to us and you got highly trained movers in you gate!",
    link: "#",
  },
  {
    city: "Movers in Sharjah",
    description:
      "Looking for reliable movers in Sharjah? Call or WhatsApp us and our trained team will be at your doorstep in no time!",
    link: "#",
  },
  {
    city: "Movers in Abu Dhabi",
    description:
      "Need expert movers in Abu Dhabi? Just give us a call or ping us on WhatsApp — our team is ready to help you move with ease!",
    link: "#",
  },
  {
    city: "Movers in Ajman",
    description:
      "Moving in or out of Ajman? We’re just a call or WhatsApp away — let our skilled movers handle everything for you!",
    link: "#",
  },
];

export const metadata: Metadata = {
  title: "Movers in Sharjah | Affordable Packers & Relocation Services",
  description:
    " Hire the best movers in Sharjah for home, office & furniture relocation. Affordable rates, expert packing & 24/7 service. Get a free quote today.",
  alternates: {
    canonical: APP.url,
  },
  openGraph: {
    title: "Movers in Sharjah | Affordable Packers & Relocation Services",
    description:
      " Hire the best movers in Sharjah for home, office & furniture relocation. Affordable rates, expert packing & 24/7 service. Get a free quote today.",
    images: [`${APP.url}/images/abu-muhammad-movers.jpg`],
    url: APP.url,
    type: "website",
    siteName: "Abu Muhammad Movers",
    phoneNumbers: ["+971 55 6461731", "+971 56 7878464"],
    emails: "abumuhammad.movers@gmail.com",
  },
  twitter: {
    title: "Movers in Sharjah | Affordable Packers & Relocation Services",
    description:
      " Hire the best movers in Sharjah for home, office & furniture relocation. Affordable rates, expert packing & 24/7 service. Get a free quote today.",
    images: [`${APP.url}/images/abu-muhammad-movers.jpg`],
  },
};
const homeFAQsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homePageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <head>
        <Script
          id="ld-json-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Abu Muhammad Movers",
              url: "https://abumuhammadmovers.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          id="ld-json-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Get A Quote",
                  item: "https://abumuhammadmovers.com/book-movers-online",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Home Moving",
                  item: "https://abumuhammadmovers.com/home-moving-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Local Moving",
                  item: "https://abumuhammadmovers.com/local-movers-in-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Packing Services",
                  item: "https://abumuhammadmovers.com/packing-services-in-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Single Item Moving",
                  item: "https://abumuhammadmovers.com/single-item-movers-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "FAQs",
                  item: "https://abumuhammadmovers.com/faqs",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "About Us",
                  item: "https://abumuhammadmovers.com/about-us",
                },
              ],
            }),
          }}
        />
        <Script
          id="faqs-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFAQsSchema) }}
        />
      </head>
      <main>
        <ServiceHeroSection
          title={{
            first: "Movers in Sharjah",
            second: "– Affordable & Professional Relocation Services",
          }}
          description={
            <>
              Looking for trusted, affordable, and professional movers in
              Sharjah who can make your move stress free? <br />
              At Abu Muhammad Movers, we bring 15+ years of moving experience
              across the UAE, delivering smooth relocations for homes, offices,
              and furniture — all with competitive rates and exceptional
              customer care.
            </>
          }
          image={{
            src: "/abu-muhammad-movers-in-sharjah.jpg",
            alt: "Movers in Sharjah - Abu Muhammad Movers",
          }}
        />
        <section className="md:px-0 px-3 max-w-5xl mx-auto text-xl flex flex-col gap-y-5 text-gray-600 mt-36">
          <p>
            Whether you’re shifting across Sharjah or moving to another emirate
            in UAE like dubai, abu dhabi, ajman, our skilled packers in Sharjah
            handle every detail, so you can relax while we do the heavy lifting.
          </p>

          <p>
            We understand that we&#39;re not just moving boxes; we&#39;re moving
            your life, your memories, and your most cherished possessions.
          </p>
        </section>
        <section className="con mt-36 md:px-0 px-3">
          <h2 className="md:text-4xl text-3xl font-semibold md:leading-12 leading-[38px]">
            <span className="block">Why Choose Abu Muhammad Movers</span>
            <span className="underline underline-offset-4 bg-primary text-[#ECD920] p-1">
              for Your Move in Sharjah
            </span>
          </h2>
          <p className="md:text-lg text-base mt-5 max-w-4xl  text-muted-foreground">
            With over 15 years of dedicated service in the UAE, Abu Muhammad
            Movers has become a trusted name for seamless relocations in Dubai
            and Sharjah.
          </p>
          <p className="md:text-lg text-base mt-2 max-w-4xl text-muted-foreground">
            Our expert team specializes in helping families and businesses move
            with ease, ensuring a stress-free experience from start to finish.
            When you&lsquo;re looking for reliable and professional movers in
            Sharjah, trust our proven track record to handle all your moving
            needs.
          </p>
          <p className="md:text-lg text-base mt-2 max-w-4xl text-muted-foreground">
            Here is why Abu Muhammad Movers are the Best Movers and Packers in
            Sharjah for You.
          </p>
          <div className="con grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <div className="grid grid-cols-4 rounded-3xl">
              <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
                <MedalIcon className="w-16 h-16" />
              </div>
              <div className="col-span-3 bg-accent rounded-r-2xl p-4">
                <h3 className="font-semibold md:text-xl text-lg">
                  Local Expertise in Sharjah Relocations
                </h3>
                <p className=" text-muted-foreground mt-1 text-sm">
                  From Al Majaz to Al Nahda, we know Sharjah’s neighborhoods,
                  road networks, and building regulations. Our local movers plan
                  routes to avoid traffic and delays, ensuring timely delivery
                  every time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 rounded-3xl">
              <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
                <BadgeDollarSignIcon className="w-16 h-16" />
              </div>
              <div className="col-span-3 bg-accent rounded-r-2xl p-4">
                <h3 className="font-semibold md:text-xl text-lg">
                  Affordable Pricing Without Compromise
                </h3>
                <p className=" text-muted-foreground mt-1 text-sm">
                  We offer transparent quotes and discounted moving rates in
                  Sharjah with no hidden charges. Our value driven packages keep
                  costs low while maintaining premium service quality.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 rounded-3xl">
              <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
                <HandshakeIcon className="w-16 h-16" />
              </div>
              <div className="col-span-3 bg-accent rounded-r-2xl p-4">
                <h3 className="font-semibold md:text-xl text-lg">
                  Professional, Trained Moving Crew
                </h3>
                <p className=" text-muted-foreground mt-1 text-sm">
                  Our friendly, uniformed team treats your belongings like their
                  own — using the right tools, high quality packing materials,
                  and safe handling techniques.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 rounded-3xl">
              <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
                <TruckIcon className="w-16 h-16" />
              </div>
              <div className="col-span-3 bg-accent rounded-r-2xl p-4">
                <h3 className="font-semibold md:text-xl text-lg">
                  Comprehensive Services
                </h3>
                <p className=" text-muted-foreground mt-1 text-sm">
                  We offer a wide array of moving and{" "}
                  <Link href={"/packing-services-in-dubai"}>
                    Packing Services
                  </Link>
                  , making us your one-stop solution for all your relocation
                  needs in sharjah. You can get full moving services in sharjah
                  at affordable prices.
                </p>
              </div>
            </div>
          </div>
          <GoogleReviewsSection />
          <p className="md:text-xl text-base mt-10 max-w-4xl text-muted-foreground">
            We understand that moving can be a significant undertaking, and our
            mission is to provide you with a hassle-free experience at a lower
            cost compared to other cheap movers in sharjah.
          </p>
          <p className="md:text-xl text-base mt-2 max-w-4xl text-muted-foreground">
            Whether you&#39;re looking for villa movers in sharjah, office
            movers in sharjah, or house movers in sharjah, we&#39;ve got you
            covered.
          </p>
        </section>
        <section className="con mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
          <div className="bg-accent md:h-96 h-80 relative md:mx-10 mx-5 rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-full rotate-12 -z-10 rounded-3xl bg-[#ECD920]"></div>
            <Image
              src={"/two-moving-trucks.jpg"}
              alt="Abu Muhammad Movers trucks"
              fill
              className="absolute object-cover object-center rounded-3xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Affordable Movers and Packers in Sharjah
            </h2>
            <p className="mt-3 text-muted-foreground">
              Abu Muhammad Movers is a leading moving company committed to
              delivering exceptional relocation services across the Sharjah and
              all over United Arab Emirates. Since our inception, we have
              focused on providing reliable, efficient, and affordable moving
              solutions.
            </p>
            <ul className="list-disc ml-5 mt-3 text-sm text-muted-foreground">
              <li>
                Our experienced team of professional movers and packers handles
                every aspect of your move with the utmost care and
                professionalism.
              </li>
              <li>
                {" "}
                We take pride in offering quality service at competitive rates,
                making us a preferred choice for those seeking best movers in
                Dubai without breaking the bank.
              </li>
              <li>
                If you are looking for the best movers and packers in sharjah,
                look no further than Abu Muhammad Movers.
              </li>
            </ul>
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
        <Services
          title="Our Moving Services in Sharjah"
          desc="Abu Muhammad Movers offers a full spectrum of moving and packing
        services to cater to your specific requirements:"
        />
        <section className="max-w-5xl mt-36 bg-accent mx-auto grid md:grid-cols-5 grid-cols-1 rounded-3xl overflow-hidden">
          <div className="relative md:h-auto h-96 col-span-2">
            <Image
              src={"/images/abu-muhammad-movers-team.jpg"}
              alt="team members of abu muhammad movers at work"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="col-span-3 px-5 py-10">
            <h2 className="text-3xl/7 mb-7 font-semibold">
              We Are Professional Moving Company In Sharjah
            </h2>
            <p className="text-muted-foreground ">
              Moving can be stressful — but that’s where we come in. We’re a
              team of experienced movers who genuinely care about making your
              move in the sharjah, UAE as easy and smooth as possible. With the
              right skills and modern tools, we’ve got everything needed to get
              you settled into your new place without the hassle.
            </p>
            <p className="text-muted-foreground mt-1">
              We value your feedback and are always looking for ways to improve
              our services. Trust us to handle your move with care and
              efficiency.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href={"/book-movers-online"}>
                <Button>
                  Get A Free Quote <FileCheck2Icon />
                </Button>
              </Link>
              <Link href={"/about-us"}>
                {" "}
                <Button variant={"outline"}>
                  About Us <LucideUsers2 />
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex md:gap-x-10 gap-x-5 justify-center">
              <h3 className="flex flex-col text-center">
                <span className="text-2xl font-semibold">15+</span>
                <span>Years Of Experience</span>
              </h3>
              <h3 className="flex flex-col text-center">
                <span className="text-2xl font-semibold">1000+</span>
                <span>Moves Completed</span>
              </h3>
            </div>
          </div>
        </section>
        <section className="bg-primary md:px-0 px-3 mt-36 py-16">
          <div className="con grid md:grid-cols-3 grid-cols-1 gap-y-10">
            <div className="col-span-1">
              <h2 className="text-3xl/9 text-primary-foreground font-semibold">
                Find Movers and Packers{" "}
                <span className="bg-[#ECD920] text-primary px-2">
                  Close to You
                </span>
              </h2>
              <p className="text-gray-200 mt-5">
                Moving within the UAE? We connect you with movers and packers
                across all major cities in the UAE. Discover your local options
                below.
              </p>
              <Button variant="secondary" className="mt-3">
                Whatsapp To Us <MessageCircleMore />
              </Button>
            </div>
            <div className="col-span-2 grid md:grid-cols-2 grid-cols-1 gap-5 md:ml-20">
              {locations.map((location, index: number) => (
                <LocationCard
                  key={index}
                  city={location.city}
                  description={location.description}
                  link={location.link}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="md:px-0 px-3 mt-36 con">
          <h2 className="text-center md:text-4xl text-3xl font-semibold">
            Our Moving Process
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-center">
            Our moving process is designed to be simple and efficient, ensuring
            a smooth transition for you and your belongings.
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
                1. Book Your Service
              </h3>
              <p className="text-muted-foreground mt-2 text-center text-sm">
                Get started with a simple call or meet-up. We&#39;ll discuss
                your moving service needs and organize everything for a
                stress-free experience.
              </p>
            </div>

            <div className="bg-accent rounded-2xl p-5">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 relative">
                <Image
                  src={"/images/before-we-move-icon.png"}
                  alt="2. Before We Move icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                2. Before We Move
              </h3>
              <p className="text-muted-foreground mt-2 text-center text-sm">
                Our moving experts will visit your location to inspect and
                evaluate what needs to be moved, ensuring accurate planning and
                efficient service on moving day.
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
                3. The Move Plan
              </h3>
              <p className="text-muted-foreground mt-2 text-center text-sm">
                Based on your specific requirements, we’ll build a clear plan
                outlining timing, team size, and estimated costs to keep your
                relocation on track.
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
              <h3 className="text-xl font-semibold text-center">
                4. Packing and Loading
              </h3>
              <p className="text-muted-foreground mt-2 text-center text-sm">
                Our professional packers use high-grade packing materials to
                protect your items. We load everything carefully to guarantee
                safe and secure transport.
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
                5. Safe Transportation
              </h3>
              <p className="text-muted-foreground mt-2 text-center text-sm">
                Your safety is our mission. Our licensed drivers choose optimal
                routes while our moving trucks are regularly inspected for
                reliable transport.
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
                6. Unpacking and Settling-in
              </h3>
              <p className="text-muted-foreground mt-2 text-center text-sm">
                Once we reach your new location, we’ll unpack your belongings
                and help set things up—making sure your new space feels just
                like home.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-50 py-16 mt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">
                The top rated movers and packers in Sharjah
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                What Makes Us the Best Movers and Packers in Sharjah
              </h2>
              <p className="text-gray-600 mb-6">
                For over 15 years, we&lsquo;ve been the top choice for movers
                and packers in Sharjah. Our commitment to excellence has made us
                the go-to team for stress-free residential and commercial moves
                across the UAE.
              </p>
              <Button className="bg-primary text-white hover:bg-primary-600 transition-colors">
                Get a Free Quote <FileCheckIcon />
              </Button>
              <ul className="mt-8 space-y-4 text-gray-600">
                {[
                  "15+ years of UAE moving experience",
                  "Fully insured moves (insured movers in Sharjah)",
                  "24/7 availability (24/7 movers Sharjah)",
                  "1000+ successful Sharjah relocations annually",
                  "Rated among the top packers and movers in Sharjah by clients",
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <ShieldCheckIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "1000+", label: "Moves Completed" },
                { value: "654+", label: "5 Star Reviews" },
                { value: "10+", label: "Years Experience" },
                { value: "98%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg p-6 text-center hover:shadow-md transition"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Content />

        <section className="md:px-0 px-3 mt-36 max-w-5xl mx-auto">
          <h2 className="md:text-4xl text-3xl font-semibold">
            Enjoy a Smooth & Stress-Free Move with Abu Muhammad Movers
          </h2>
          <p className="text-gray-600 mt-3">
            Relocating within Sharjah can be both exciting and overwhelming.
            From last-minute delays to unexpected challenges, moving isn’t
            always simple.
          </p>
          <p className="text-gray-600 mt-3">
            At Abu Muhammad Movers, we eliminate the stress. As a top-rated
            moving company in Sharjah, our team is backed by years of experience
            and glowing customer reviews. We pride ourselves on offering smooth,
            reliable moves—every single time.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">
            Your Trusted Furniture Movers and Packers in Sharjah
          </h2>
          <p className="text-gray-600 mt-3">
            Since 2010, Abu Muhammad Movers has been a reliable name for
            furniture moving services in Sharjah. We understand that moving
            isn&#39;t always straightforward—your new place might not be ready,
            or renovations may be ongoing.
          </p>
          <p className="text-gray-600 mt-3">
            That’s why we combine professional removal services with secure
            storage solutions, all under one roof. Whether you need to move,
            store, or both—we make the process hassle-free.
          </p>
          <h3 className="text-2xl font-semibold text-center mt-10">
            The Benefits of Choosing Abu Muhammad Movers:
          </h3>
          <ul className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4 list-disc list-inside text-gray-600">
            <li>
              Save time and money with one provider for both storage and moving
              services.
            </li>
            <li>
              Enjoy a flexible moving schedule with phased relocation options.
            </li>
            <li>
              Protect your belongings during renovations by storing them safely.
            </li>
            <li>
              Move your items directly from your old home to your new one using
              our EasyPod system—without unnecessary handling, reducing damage
              risks.
            </li>
          </ul>
        </section>
        <section className="md:px-0 px-3 mt-36">
          <div className="con grid md:grid-cols-5 grid-cols-1 gap-y-10">
            <ul className="col-span-3 md:order-1 order-2  grid md:grid-cols-2 grid-cols-1 gap-5 md:mr-20">
              <li className="bg-accent rounded-2xl overflow-hidden flex items-center justify-between p-4">
                We collaborate with you to plan and schedule every detail.
              </li>
              <li className="bg-accent rounded-2xl overflow-hidden flex items-center justify-between p-4">
                We keep you updated at each step—no surprises.
              </li>
              <li className="bg-accent rounded-2xl overflow-hidden flex items-center justify-between p-4">
                Our team expertly packs, labels, and inventories your items for
                safe transit.
              </li>
              <li className="bg-accent rounded-2xl overflow-hidden flex items-center justify-between p-4">
                Everything is carefully unpacked and arranged at your new
                destination.
              </li>
            </ul>
            <div className="col-span-2 md:order-2 order-1">
              <h2 className="md:text-3xl/9 text-2xl text-primary font-semibold">
                The Abu Muhammad Movers Advantage: How We Ensure a Perfect Move
              </h2>
              <p className="text-gray-500 mt-5 ">
                As one of Sharjah’s most trusted moving companies, our proven
                process guarantees a smooth, efficient move:
              </p>
              <Button className="mt-3">
                Whatsapp To Us <MessageCircleMore />
              </Button>
            </div>
          </div>
        </section>
        <section id="moving-cost-section" className="md:px-0 px-3 mt-36">
          <h2 className="text-center max-w-2xl font-semibold mb-5 mx-auto  md:text-4xl text-3xl">
            Moving Cost Of Abu Muhammad Movers in Sharjah
          </h2>
          <p className="max-w-4xl  mx-auto text-center text-muted-foreground">
            The cost of Abu Muhammad Movers and usually the other packers and
            movers in Sharjah depends on the capacity or size of stuff as well
            as of your moving requirements. But You can estimate to pay the
            following cost.
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
            the services you need. Here,there is no need to worry, just contact
            us and get all levels of moving and{" "}
            <Link href={"/packing-services-in-dubai"}>Packing Services</Link> at
            affordable pricing.
          </p>
        </section>

        <FAQs
          Faqs={[
            {
              question: "How much does a mover cost in Sharjah?",
              answer: (
                <>
                  <p>
                    The cost of moving a studio apartment in Sharjah typically
                    ranges from 900 AED to 1,000 AED.
                  </p>
                  <p>
                    For a one-bedroom apartment (1 BHK), the price is often
                    around 1,200 AED, while a two-bedroom apartment (2 BHK) can
                    cost approximately 1,500 AED.{" "}
                  </p>
                  <p>
                    For larger properties, such as villas, a comprehensive move
                    generally falls within the 5,000 AED to 6,000 AED range.
                  </p>
                  <p>
                    It is important to remember that these are estimates, and a
                    firm quote requires an assessment of your specific moving
                    needs.
                  </p>
                </>
              ),
            },
            {
              question: "What factors affect the price of a move in Sharjah?",
              answer: (
                <>
                  <p>
                    The final cost of your move is determined by several key
                    factors.
                  </p>
                  <p>
                    The primary determinants are the volume of your belongings
                    (e.g., the difference between a studio and a multi-bedroom
                    villa), the distance of the move, and the level of service
                    you require.
                  </p>
                  <p>
                    Additional services, such as specialized handling for
                    fragile items, piano moving, or requests for a full packing
                    and unpacking service, can also influence the total cost.{" "}
                  </p>
                  <p>
                    Furthermore, factors like the number of helpers and trucks
                    needed, and whether the move involves climbing multiple
                    flights of stairs, will be accounted for in the final quote.
                  </p>
                </>
              ),
            },

            {
              question: "Do you offer villa moving services in Sharjah?",
              answer: (
                <>
                  <p>
                    Yes, we specialize in villa moves. These relocations require
                    specific expertise due to the larger volume of items and
                    often include a garden or outdoor furniture.
                  </p>
                  <p>
                    Our trained teams use professional techniques to ensure that
                    all large and delicate items, including any outdoor
                    furnishings, are handled with the utmost care and precision,
                    from packing to reassembly.
                  </p>
                </>
              ),
            },
            {
              question:
                "Do you provide short-term and long-term storage solutions?",
              answer: (
                <>
                  <p>
                    Yes, we offer secure, climate-controlled storage units for
                    both short-term and long-term needs.
                  </p>
                  <p>
                    Our facilities are ideal for transitions between homes,
                    during renovations, or for any period where you need a safe
                    place to store your belongings.
                  </p>
                  <p>
                    We ensure your items are inventoried, packed, and stored in
                    a clean, protected environment.
                  </p>
                </>
              ),
            },
            {
              question: "Do you handle special items like pianos or artwork? ",
              answer: (
                <>
                  <p>
                    Yes, our professional teams are trained in specialized
                    moving techniques for unique and valuable items, including
                    delicate glassware, fine art, antiques, and electronics.
                  </p>
                  <p>
                    We use top-grade packing materials and tailored handling
                    techniques to ensure these possessions are transported
                    securely, providing you with complete peace of mind.
                  </p>
                </>
              ),
            },
            {
              question:
                "How can I choose a reputable moving company in Sharjah?",
              answer: (
                <>
                  {" "}
                  <p>
                    When selecting a moving company, it is essential to verify
                    their reputation and licenses.{" "}
                  </p>
                  <p>
                    A reliable company will have a clear license from the DED,
                    offer transparent, itemized pricing after a pre-move survey,
                    and carry insurance for property damage.{" "}
                  </p>
                  <p>
                    Additionally, look for companies with a long track record,
                    positive customer reviews, and a responsive customer service
                    team that can answer your questions promptly.
                  </p>
                  <p>
                    Your you Abu Muhammad Movers Which is fully licensed and
                    insured, has over 15 years of experience, and is highly
                    rated by customers for our professionalism and care.
                  </p>
                </>
              ),
            },
            {
              question:
                "What are some key moving tips for a stress-free relocation in Sharjah?",
              answer: (
                <>
                  {" "}
                  <p>
                    To ensure a smooth move, start planning at least one to two
                    weeks in advance, especially during busy seasons.
                  </p>
                  <p>
                    A good strategy is to pack one room at a time, starting with
                    non-essential items.
                  </p>
                  <p>
                    Clearly label each box with its contents and destination
                    room, and keep a detailed inventory.
                  </p>
                  <p>
                    It is also crucial to handle all utility disconnections and
                    building permit applications in advance to avoid last-minute
                    complications.
                  </p>
                </>
              ),
            },
            {
              question: "How can I get a quick quote for my move?",
              answer:
                "Visit our website to receive an instant and transparent quote. Just enter a few details about your move, and you’ll get a pricing estimate within seconds.",
            },
            {
              question: "Do you provide packing services?",
              answer:
                "Yes, our professional teams offer full, partial, and fragile-item packing options to suit any type of move, ensuring your items are packed safely and efficiently.",
            },

            {
              question: "Which areas does Abu Muhammad Movers operate in?",
              answer:
                "We serve all major locations within sharjah and across the UAE, and we also offer cross-border and international relocation services within the MENA region and beyond.",
            },
            {
              question:
                "When is the best time to book a move with Abu Muhammad Movers?",
              answer:
                "Booking 1 to 2 weeks ahead is ideal to secure your preferred date, but we also accommodate short-notice moves depending on availability.",
            },
            {
              question: "Do you offer storage services?",
              answer:
                "Yes, Abu Muhammad Movers provides safe, climate-controlled storage units for both short-term and long-term needs—perfect during transitions or renovations.",
            },
            {
              question: "Are packing materials included in the service?",
              answer:
                "Yes, packing materials are included in our Standard and Premium packages. If you choose our Saver package, materials can be added as an optional upgrade.",
            },
            {
              question: "Do you handle furniture assembly and disassembly?",
              answer:
                "Yes, our trained crew provides professional furniture disassembly and reassembly as part of our Standard and Premium moving packages.",
            },
            {
              question: "What safety measures are in place during moves?",
              answer:
                "We prioritize the safety of your items by using top-grade packing materials, skilled professionals, and secure transportation practices to prevent damage and ensure peace of mind.",
            },
            {
              question: "How do I contact customer support during my move?",
              answer:
                "Abu Muhammad Movers offers 24/7 customer support via phone, email, and live chat—so you’re never left without assistance when you need it most.",
            },
          ]}
        />
        <CTA
          title="Get Started with the Best Movers in Sharjah Today"
          desc={
            <>
              Call Abu Muhammad Movers now, click our WhatsApp link, or fill out
              our quick form to book your move in Sharjah. We’re ready 24/7 to
              make your relocation smooth, affordable, and stress free.
            </>
          }
        />
      </main>
    </>
  );
}

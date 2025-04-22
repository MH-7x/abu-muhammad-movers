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
  Send,
  ShieldCheckIcon,
  TruckIcon,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";
import FAQs from "../components/core/FAQs";
import Link from "next/link";
import Services from "@/components/core/Services";
import { LocationCard } from "@/components/core/LocationCards";

const locations = [
  {
    city: "Movers in Dubai",
    description:
      "Connect with Movers in Dubai, just call / whatsapp to us and you got highly trained movers in you gate!",
    link: "/movers-in-dubai",
  },
  {
    city: "Movers in Sharjah",
    description:
      "Looking for reliable movers in Sharjah? Call or WhatsApp us and our trained team will be at your doorstep in no time!",
    link: "/movers-in-sharjah",
  },
  {
    city: "Movers in Abu Dhabi",
    description:
      "Need expert movers in Abu Dhabi? Just give us a call or ping us on WhatsApp — our team is ready to help you move with ease!",
    link: "/movers-in-abu-dhabi",
  },
  {
    city: "Movers in Ajman",
    description:
      "Moving in or out of Ajman? We’re just a call or WhatsApp away — let our skilled movers handle everything for you!",
    link: "/movers-in-ajman",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="con mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
          <div>
            <h1 className="md:text-4xl text-3xl/[30px] font-semibold">
              <span className="block text-grd">Abu Muhammad Movers</span>
              Packers & Movers in Dubai, UAE
            </h1>
            <p className="md:text-xl/6 text-lg mt-3 text-muted-foreground max-w-2xl">
              Welcome to Abu Muhammad Movers, your premier choice for
              comprehensive moving and packing services throughout the Dubai,
              UAE.
            </p>
            <div className="mt-5 flex gap-x-5">
              <Link href={"/contact-us"}>
                <Button size={"lg"}>
                  Get A Free Quote <FileCheckIcon />
                </Button>
              </Link>
              <Link href={"/about-us"}>
                <Button size={"lg"} variant={"ghost"}>
                  About Us <UsersRoundIcon />
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary to-[#1c1716] min-h-96 md:ml-16 rounded-4xl md:p-8 p-5">
            <h3 className="text-2xl text-[#ECD920] text-center">
              Get A Free Quote
            </h3>
            <form className="mt-5 text-primary-foreground flex flex-col gap-y-4">
              <input
                name="customer-name"
                placeholder="Your Name.."
                type="text"
                required
                className="bg-gray-200 placeholder:text-muted-foreground text-primary p-3 md:p-4 rounded-lg border border-[#ECD920]"
              />
              <input
                name="phone-number"
                placeholder="Phone Number.."
                type="number"
                required
                className="bg-gray-200 placeholder:text-muted-foreground text-primary p-3 md:p-4 rounded-lg border border-[#ECD920]"
              />
              <div className="grid grid-cols-2 gap-x-4">
                <select
                  className="text-primary p-3 md:p-4 rounded-lg border border-[#ECD920] bg-gray-200"
                  name="moving-from "
                  defaultValue={""}
                >
                  <option disabled>Moving From?</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Ajman">Ajman</option>
                </select>
                <select
                  className="text-primary p-3 md:p-4 rounded-lg border border-[#ECD920] bg-gray-200"
                  name="moving-to"
                  defaultValue={""}
                >
                  <option disabled>Moving From?</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Ajman">Ajman</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Your Message.."
                className="bg-gray-200 placeholder:text-muted-foreground text-primary p-3 md:p-4 rounded-lg border border-[#ECD920] min-h-32"
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-[#ECD920] text-primary hover:bg-[#ecd720d5]"
                size={"lg"}
              >
                SEND NOW <Send />
              </Button>
            </form>
          </div>
        </section>
        <section className="con mt-36 md:px-0 px-3">
          <h2 className="md:text-4xl text-3xl font-semibold md:leading-12 leading-[38px]">
            <span className="block">They Only Furniture Movers</span>
            <span className="underline underline-offset-4 bg-primary text-[#ECD920] p-1">
              You Needed in Dubai!
            </span>
          </h2>
          <p className="md:text-xl text-base mt-5 max-w-4xl  text-muted-foreground">
            With over 15 years of dedicated service, Abu Muhammad Movers
            established ourselves as reliable movers in Dubai, assisting
            families and businesses with seamless relocations within UAE.
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
                <h3 className="font-semibold md:text-xl text-lg">Experience</h3>
                <p className=" text-muted-foreground mt-1 text-sm">
                  Over 15 years of experience as trusted movers and packers in
                  UAE.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 rounded-3xl">
              <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
                <BadgeDollarSignIcon className="w-16 h-16" />
              </div>
              <div className="col-span-3 bg-accent rounded-r-2xl p-4">
                <h3 className="font-semibold md:text-xl text-lg">
                  Affordability
                </h3>
                <p className=" text-muted-foreground mt-1 text-sm">
                  We provide competitive pricing and cheap movers in Dubai
                  solutions without compromising on service quality.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 rounded-3xl">
              <div className="col-span-1 bg-[#ECD920] text-primary flex items-center justify-center rounded-l-2xl">
                <HandshakeIcon className="w-16 h-16" />
              </div>
              <div className="col-span-3 bg-accent rounded-r-2xl p-4">
                <h3 className="font-semibold md:text-xl text-lg">
                  Professionalism
                </h3>
                <p className=" text-muted-foreground mt-1 text-sm">
                  Our trained and dedicated team of professional movers in Dubai
                  ensures a seamless and efficient move.
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
                  We offer a wide array of moving and packing services, making
                  us your one-stop solution for all your relocation needs.
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
          </div>
          <p className="md:text-xl text-base mt-5 max-w-4xl text-muted-foreground">
            We understand that moving can be a significant undertaking, and our
            mission is to provide you with a hassle-free experience at a lower
            cost compared to other cheap movers in Dubai.
          </p>
          <p className="md:text-xl text-base mt-2 max-w-4xl text-muted-foreground">
            Whether you&#39;re looking for villa movers in Dubai, office movers
            in Dubai, or house movers in Dubai, we&#39;ve got you covered.
          </p>
        </section>
        <section className="con mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-y-10">
          <div className="bg-accent md:h-96 h-80 relative md:mx-10 mx-5 rounded-3xl">
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
              Affordable Movers and Packers in Dubai, UAE
            </h2>
            <p className="mt-3 text-muted-foreground">
              Abu Muhammad Movers is a leading moving company committed to
              delivering exceptional relocation services across the United Arab
              Emirates. Since our inception, we have focused on providing
              reliable, efficient, and affordable moving solutions.
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
                If you are looking for the best movers and packers in Dubai,
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
          title=" Movers And Packers Services in Dubai"
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
              We Are Professional Moving Company In Dubai
            </h2>
            <p className="text-muted-foreground ">
              Moving can be stressful — but that’s where we come in. We’re a
              team of experienced movers who genuinely care about making your
              move in the Dubai, UAE as easy and smooth as possible. With the
              right skills and modern tools, we’ve got everything needed to get
              you settled into your new place without the hassle.
            </p>
            <p className="text-muted-foreground mt-1">
              We value your feedback and are always looking for ways to improve
              our services. Trust us to handle your move with care and
              efficiency.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href={"/contact-us"}>
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
        <Content />
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
        <section className="md:px-0 px-3 mt-36 max-w-5xl mx-auto">
          <h2 className="md:text-4xl text-3xl font-semibold">
            Enjoy a Smooth & Stress-Free Move with Abu Muhammad Movers
          </h2>
          <p className="text-gray-600 mt-3">
            Relocating within Dubai can be both exciting and overwhelming. From
            last-minute delays to unexpected challenges, moving isn’t always
            simple.
          </p>
          <p className="text-gray-600 mt-3">
            At Abu Muhammad Movers, we eliminate the stress. As a top-rated
            moving company in Dubai, our team is backed by years of experience
            and glowing customer reviews. We pride ourselves on offering smooth,
            reliable moves—every single time.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">
            Your Trusted Furniture Movers and Packers in Dubai
          </h2>
          <p className="text-gray-600 mt-3">
            Since 2010, Abu Muhammad Movers has been a reliable name for
            furniture moving services in Dubai. We understand that moving
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
                As one of Dubai’s most trusted moving companies, our proven
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
            Moving Cost Of Abu Muhammad Movers in Dubai
          </h2>
          <p className="max-w-4xl  mx-auto text-center text-muted-foreground">
            The cost of Abu Muhammad Movers and usually the other packers and
            movers in Dubai depends on the capacity or size of stuff as well as
            of your moving requirements. But You can estimate to pay the
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
            us and get all levels of moving and packing services at affordable
            pricing.
          </p>
        </section>
        <CTA
          title="Get Your Free, No-Obligation Moving Quote Today!"
          desc="Contact Abu Muhammad Movers now for a personalized quote and
            experience a stress-free move with one of the leading movers and
            packers in Dubai."
        />
        <FAQs
          Faqs={[
            {
              question:
                "How does Abu Muhammad Movers utilize technology to enhance the moving experience?",
              answer:
                "Abu Muhammad Movers uses advanced technology such as real-time GPS tracking, smart scheduling, and a digital inventory system. This keeps you informed and in control throughout your move, ensuring a smooth, reliable, and efficient experience across the UAE and the MENA region.",
            },
            {
              question:
                "Is it necessary to book Abu Muhammad Movers in advance?",
              answer:
                "While early booking is always recommended—especially during busy seasons—our flexible scheduling system often allows for last-minute bookings. We aim to make even urgent relocations simple and stress-free.",
            },

            {
              question:
                "What specialized moving services does Abu Muhammad Movers provide?",
              answer:
                "We offer a full suite of moving services, including residential, office, and commercial relocations. We also handle fragile and valuable items with care using specialized packing and handling techniques tailored to each client's needs.",
            },
            {
              question:
                "What makes Abu Muhammad Movers different from other moving companies?",
              answer:
                "Abu Muhammad Movers stands out with its tech-enabled moving process. From GPS tracking and route optimization to customer-centric services, we provide a safer, faster, and more transparent moving experience than traditional movers.",
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
                "We serve all major locations within Dubai and across the UAE, and we also offer cross-border and international relocation services within the MENA region and beyond.",
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
      </main>
    </>
  );
}

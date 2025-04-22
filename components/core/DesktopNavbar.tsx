import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const servicesLinks = [
  "/home-moving-dubai",
  "/office-moving",
  "/local-moving-in-dubai",
  "/packing-services",
  "/single-item-moving",
  "/furniture-installation",
  "/storage-services-dubai",
  "/furniture-movers-dubai",
];
export const locationsLinks = [
  "/movers-in-dubai",
  "/movers-in-sharjah",
  "/movers-in-abu-dhabi",
  "/movers-in-ajman",
];
import {
  ListChecks,
  LucidePhoneCall,
  MessageCircleMoreIcon,
  Send,
} from "lucide-react";
export const companyLinks = ["/about-us", "/contact-us", "/resources"];
export const othersLinks = [
  "/faqs",
  "/gallery",
  "/sitemap",
  "https://dubaiusedfurniture.ae/en",
];
const DesktopNavbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-11/12 mx-auto flex items-center bg-white/95 py-3 px-6 mt-3 rounded-4xl drop-shadow-xl justify-between">
        <Link href={"/"} className="">
          <Image
            src={"/logo.png"}
            alt="Abu Muhammad Movers LOGO"
            width={200}
            loading="eager"
            priority
            height={200}
          />
        </Link>
        <div className="flex items-center gap-x-10">
          <ul className="flex items-center gap-x-2">
            <NavItem
              links={servicesLinks}
              title="SERVICES"
              dropdownItems={[
                "Home Moving",

                "Office Moving",
                "Local Moving in Dubai",
                "Packing Services",
                "Single Item Moving",
                "Furniture Installation",
                "Storage Services",
                "Furniture Movers in Dubai",
              ]}
            />
            <NavItem
              links={locationsLinks}
              title="LOCATIONS"
              dropdownItems={[
                "Movers in Dubai",
                "Movers in Sharjah",
                "Movers in Abu Dhabi",
                "Movers in Ajman",
              ]}
            />
            <NavItem
              links={companyLinks}
              title="COMPANY"
              dropdownItems={["About Us", "Contact Us", "Resources"]}
            />

            <li>
              <Link
                href={"/blogs"}
                className="transition-colors px-2 border-b border-transparent hover:border-primary"
              >
                BLOGS
              </Link>
            </li>
            <NavItem
              links={othersLinks}
              title="MORE"
              dropdownItems={[
                "FAQS",
                "Gallery",
                "Sitemap",
                "Used Furniture Buyers",
              ]}
            />
          </ul>
          <div className="relative">
            <input
              type="checkbox"
              id="contact-toggle"
              className="peer hidden"
            />
            <label htmlFor="contact-toggle">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                Contact Info
              </span>
            </label>
            <ul className="hidden peer-checked:block absolute top-10 bg-accent w-72 p-4 rounded-2xl drop-shadow-xl right-0">
              <div className="bg-white p-2 flex items-center justify-between rounded-lg">
                <p>+971 55 6461731</p>
                <div className="flex gap-x-2">
                  <Link title="Call" href={"tel:+971556461731"}>
                    <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                      <LucidePhoneCall className="text-gray-500 w-5 h-5" />
                    </div>
                  </Link>
                  <Link
                    href={
                      "https://wa.me/+971556461731?text=I%20am%20looking%20for%20movers%20!"
                    }
                    title="WhatsApp"
                  >
                    <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                      <MessageCircleMoreIcon className="text-gray-500 w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-white p-2 flex items-center justify-between rounded-lg mt-3">
                <p>+971 56 7878464</p>
                <div className="flex gap-x-2">
                  <Link title="Call" href={"tel:+971556461731"}>
                    <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                      <LucidePhoneCall className="text-gray-500 w-5 h-5" />
                    </div>
                  </Link>
                  <Link
                    title="WhatsApp"
                    href={
                      "https://wa.me/+971567878464?text=I%20am%20looking%20for%20movers%20!"
                    }
                  >
                    <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                      <MessageCircleMoreIcon className="text-gray-500 w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full h-11 mt-3 flex items-center gap-x-3 text-muted justify-between">
                <Link href={"/contact-us"}>
                  <Button variant={"link"}>
                    Free Quote <ListChecks />
                  </Button>
                </Link>
                <Link href={"mailto:abumuhammad.movers@gmail.com"}>
                  <Button variant={"link"}>
                    Send Mail
                    <Send />
                  </Button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavbar;

function NavItem({
  title,
  dropdownItems,
  links,
}: {
  title: string;
  links: string[];
  dropdownItems: string[];
}) {
  return (
    <li className="relative z-20 group">
      <Link
        className="transition-colors cursor-pointer px-2 border-b border-transparent hover:border-primary"
        href="#"
      >
        {title}
      </Link>
      <ul
        className={`absolute left-0
          hidden w-max bg-accent drop-shadow-xl p-5 rounded-2xl group-hover:block`}
      >
        {dropdownItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2.5 hover:bg-white rounded-lg text-sm border-b"
          >
            <Link href={links[index]}>{item}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

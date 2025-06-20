"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  ListChecks,
  LucidePhoneCall,
  Menu,
  MessageCircleMoreIcon,
  Plus,
  Send,
} from "lucide-react";

const MobileNavbar = () => {
  return (
    <header className="w-full px-3  drop-shadow-xl bg-white py-2.5 fixed top-0 left-0 z-50">
      <nav className="flex items-center relative justify-between">
        <Link className="w-[170px] h-11 relative " href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Abu Muhammad Movers LOGO"
            loading="eager"
            priority
            fill
            className="object-contain object-center absolute"
          />
        </Link>
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <input
              type="checkbox"
              id="contact-toggle"
              className="peer hidden"
            />
            <label htmlFor="contact-toggle">
              <span className="border text-primary/90 px-4 py-1.5 rounded-lg">
                Contact
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
                <Link href={"/book-movers-online"}>
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
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="w-10 rounded-md h-9 flex items-center justify-center bg-primary text-accent cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </label>
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default MobileNavbar;

const Sidebar = () => {
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };
  return (
    <div className="sidebar scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary">
      {/* Close Button */}
      <label
        htmlFor="menu-toggle"
        className="absolute top-3 right-4 text-xl cursor-pointer"
      >
        <span className="text-2xl">✖</span>
      </label>

      <ul className="w-full px-5 mt-[70px] text-lg">
        {/* SERVICES DROPDOWN */}
        <li className="border-b border-accent/50 mb-2">
          <input type="checkbox" id="services-toggle" className="peer hidden" />
          <label
            htmlFor="services-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>SERVICES</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={[
              {
                title: "Home Moving",
                link: "/home-moving-dubai",
              },

              {
                title: "Office Moving",
                link: "#",
              },
              {
                title: "Local Moving in Dubai",
                link: "/local-movers-in-dubai",
              },
              {
                title: "Packing Services",
                link: "#",
              },
              {
                title: "Single Item Moving",
                link: "/single-item-movers-dubai",
              },
              {
                title: "Furniture Installation",
                link: "#",
              },
              {
                title: "Storage Services",
                link: "#",
              },
              {
                title: "Furniture Movers Dubai",
                link: "#",
              },
            ]}
          />
        </li>

        {/* LOCATIONS DROPDOWN */}
        <li className="border-b border-accent/50 mb-2">
          <input type="checkbox" id="location-toggle" className="peer hidden" />
          <label
            htmlFor="location-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>LOCATIONS</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={[
              {
                title: "Movers In Dubai",
                link: "#",
              },
              {
                title: "Movers In Sharjah",
                link: "#",
              },
              {
                title: "Movers In Abu Dhabi",
                link: "#",
              },
              {
                title: "Movers In Ajman",
                link: "#",
              },
            ]}
          />
        </li>
        <li className="border-b border-accent/50 mb-2">
          <input type="checkbox" id="company-toggle" className="peer hidden" />
          <label
            htmlFor="company-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>COMPANY</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={[
              {
                title: "About Us",
                link: "/about-us",
              },
              {
                title: "Contact Us",
                link: "/book-movers-online",
              },
              {
                title: "Resources",
                link: "#",
              },
            ]}
          />
        </li>

        {/* OTHER LINKS */}
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link onClick={closeSidebar} href={"#"}>
            BLOGS
          </Link>
        </li>
        <li className="border-b border-accent/50 mb-2">
          <input type="checkbox" id="others-toggle" className="peer hidden" />
          <label
            htmlFor="others-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>More</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={[
              {
                title: "FAQs",
                link: "/faqs",
              },
              {
                title: "Gallery",
                link: "#",
              },
              {
                title: "Sitemap",
                link: "#",
              },
              {
                title: "Used Furniture Buyer",
                link: "https://dubaiusedfurniture.ae/en",
              },
            ]}
          />
        </li>
      </ul>
    </div>
  );
};

const DropDown = ({ list }: { list: { title: string; link: string }[] }) => {
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <ul className="hidden peer-checked:block pl-4 pb-2 space-y-2 text-sm text-accent/80 font-light ">
      {list.map((item) => (
        <li key={item.title} title={item.title}>
          <Link
            className="pb-0.5 px-1 flex items-center gap-x-1 text-base"
            href={item.link}
            onClick={closeSidebar} // Close sidebar on link click
          >
            <span className="text-sm inline-block pr-1">
              <ArrowRight className="text-accent" width={18} />
            </span>{" "}
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

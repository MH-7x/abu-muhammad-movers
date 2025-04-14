"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  ArrowRightCircleIcon,
  Contact2,
  ListChecks,
  LucidePhoneCall,
  Menu,
  MessageCircleMoreIcon,
  Plus,
  Send,
} from "lucide-react";

const MobileNavbar = () => {
  return (
    <header className="w-full px-3  drop-shadow-xl bg-white py-1 fixed top-0 left-0 z-50">
      <nav className="flex items-center relative justify-between">
        <Link className="w-44 h-14 relative" href={"/"}>
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
                <p>+92 3471309916</p>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                    <LucidePhoneCall className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                    <MessageCircleMoreIcon className="text-gray-500 w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 flex items-center justify-between rounded-lg mt-3">
                <p>+92 3471309916</p>
                <div className="flex gap-x-2">
                  <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                    <LucidePhoneCall className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="cursor-pointer w-9 rounded-4xl h-9 border flex items-center justify-center">
                    <MessageCircleMoreIcon className="text-gray-500 w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="w-full h-11 mt-3 flex items-center gap-x-3 text-muted justify-between">
                <Button variant={"link"}>
                  Free Quote <ListChecks />
                </Button>
                <Button variant={"link"}>
                  Send Mail
                  <Send />
                </Button>
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
                link: "/home-moving",
              },
              {
                title: "Corporate Relocation",
                link: "/corporate-relocation",
              },
              {
                title: "Office Moving",
                link: "/office-moving",
              },
              {
                title: "Local Moving in Dubai",
                link: "/local-moving-dubai",
              },
              {
                title: "Packing Services",
                link: "/packing-services",
              },
              {
                title: "Single Item Moving",
                link: "/single-item-moving",
              },
              {
                title: "Furniture Installation",
                link: "/furniture-installation",
              },
              {
                title: "Storage Services",
                link: "/storage-services",
              },
              {
                title: "Furniture Movers Dubai",
                link: "/furniture-movers-dubai",
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
                link: "/contact-us",
              },
              {
                title: "Resources",
                link: "/resources",
              },
            ]}
          />
        </li>

        {/* OTHER LINKS */}
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link onClick={closeSidebar} href={"/blogs"}>
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
                link: "/gallery",
              },
              {
                title: "Sitemap",
                link: "/sitemap",
              },
              {
                title: "Used Furniture Buyer",
                link: "#",
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

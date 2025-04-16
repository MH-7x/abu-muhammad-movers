import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const CTA = () => {
  return (
    <section className="py-16 px-3 mt-36 bg-[#ECD920]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-primary text-4xl font-bold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-gray-400 after:left-0 after:right-0 after:mx-auto after:rounded-full">
          Get Your Free, No-Obligation Moving Quote Today!
        </h2>
        <div className="mt-12">
          <p className="text-slate-600 text-base">
            Contact Abu Muhammad Movers now for a personalized quote and
            experience a stress-free move with one of the leading movers and
            packers in Dubai.
          </p>
        </div>
        <div className="flex gap-x-4 mt-5 justify-center">
          <Link href="/contact-us">
            <Button size={"lg"}>
              Get A Free Quote <ArrowRight />
            </Button>
          </Link>
          <Link href="/about-us">
            <Button variant={"secondary"} size={"lg"}>
              Know About Us
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

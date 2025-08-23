import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Building2Icon,
  Drill,
  HomeIcon,
  MapPinnedIcon,
  PackageCheckIcon,
  PianoIcon,
  Warehouse,
} from "lucide-react";

const Services = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <section id="services-section" className="con mt-36 md:px-0 px-3 ">
      <h2 className="md:text-4xl text-3xl font-semibold text-center">
        {title}
      </h2>
      <p className="max-w-3xl mx-auto text-center text-muted-foreground mt-3">
        {desc}
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 mt-10">
        <ServiceCard
          list={[
            {
              title: "House Movers in Sharjah & Dubai",
              description:
                "We move villas, apartments, and shared accommodation with care. From villa shifting services in Sharjah to apartment moves, we ensure your household is relocated without damage or delay.",
              link: "/home-moving-dubai",
              icon: (
                <HomeIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Office Movers in Sharjah",
              description:
                "Our reliable office relocation services in Sharjah include dismantling workstations, IT equipment handling, and overnight moves to minimize downtime.",
              link: "#",
              icon: (
                <Building2Icon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Local Moving in Dubai",
              description:
                "Whether you're moving within Dubai as local movers in Dubai, we provide reliable services to ensure your belongings arrive safely.",
              link: "/local-movers-in-dubai",
              icon: (
                <MapPinnedIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Furniture Movers in Sharjah",
              description:
                "We dismantle, pack, transport, and reassemble everything from sofas to wardrobes. Choose us as your affordable furniture moving company in Sharjah for safe and efficient handling",
              link: "/single-item-movers-dubai",
              icon: (
                <MapPinnedIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Single Item Moving",
              description:
                "No move is too small. We handle the relocation of individual items with the same care and attention to detail.",
              link: "/single-item-movers-dubai",
              icon: (
                <MapPinnedIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Packing and Unpacking Services",
              description:
                "From bubble wrapped glassware to labeled boxes, our packing and unpacking services in Sharjah use premium packing materials in Sharjah for maximum protection.",
              link: "/packing-services-in-dubai",
              icon: (
                <PackageCheckIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Furniture Installation",
              description:
                "Our team provides furniture dismantling and assembly services, ensuring that your furniture is set up correctly in your new space. We are the best furniture movers in sharjah.",
              link: "#",
              icon: <Drill className="w-6 h-6 yel dark:text-gray-400 mb-3" />,
            },
            {
              title: "Special Moving Services",
              description:
                "We offer pet friendly moves, eco friendly packing, and same day or weekend moving services in Sharjah to fit your schedule.",
              link: "#",
              icon: (
                <PianoIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Secure Storage Solutions",
              description:
                "Need temporary or long term storage? Our secure storage facilities in Sharjah are climate controlled, monitored 24/7, and insured.",
              link: "#",
              icon: (
                <Warehouse className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Services;

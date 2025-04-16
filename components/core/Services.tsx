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
              title: "Home Moving in Dubai",
              description:
                "From apartments to villas, our home movers in Dubai ensure a smooth transition for your residential move. We specialize in apartment movers in Dubai, villa movers in Dubai, and comprehensive house moving in Dubai.",
              link: "/home-moving",
              icon: (
                <HomeIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Office Moving Within UAE",
              description:
                "Looking for reliable office moving within the UAE? Our professional movers and packers in Dubai and beyond specialize in seamless corporate relocations. We manage everything from packing and transporting furniture to IT equipment for businesses of all sizes.",
              link: "/office-moving",
              icon: (
                <Building2Icon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Local Moving in Dubai",
              description:
                "Whether you're moving within Dubai as local movers in Dubai, we provide reliable services to ensure your belongings arrive safely.",
              link: "/local-moving-in-dubai",
              icon: (
                <MapPinnedIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Single Item Moving",
              description:
                "No move is too small. We handle the relocation of individual items with the same care and attention to detail.",
              link: "/single-item-moving",
              icon: (
                <MapPinnedIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Packing Services",
              description:
                "Our expert packers and movers in Dubai use high-quality packing materials to safeguard your possessions during transit. We are known for our meticulous packing and moving services.",
              link: "/packing-services",
              icon: (
                <PackageCheckIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Furniture Installation",
              description:
                "Our team provides furniture dismantling and assembly services, ensuring that your furniture is set up correctly in your new space. We are the best furniture movers in Dubai.",
              link: "/furniture-installation-dubai",
              icon: <Drill className="w-6 h-6 yel dark:text-gray-400 mb-3" />,
            },
            {
              title: "Fine Art Relocation",
              description:
                "Trust our specialists to handle the secure relocation of your delicate and valuable fine art pieces.",
              link: "/fine-art-relocation",
              icon: (
                <PianoIcon className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Storage Services Dubai",
              description:
                "Secure storage solutions are available for your short-term or long-term needs in dubai, providing a safe space for your belongings.",
              link: "/storage-services-dubai",
              icon: (
                <Warehouse className="w-6 h-6 yel dark:text-gray-400 mb-3" />
              ),
            },
            {
              title: "Furniture Movers Dubai",
              description:
                "Get free quotes or book your moving service in Dubai. We provide apartment, villa, office, and single-item moving & relocation services at unbeatable prices",
              link: "/furniture-movers-dubai",
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

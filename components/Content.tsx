import { LucidePackageCheck, Medal, Truck, Warehouse } from "lucide-react";
import React, { ReactNode } from "react";

const Content = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-evenly -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex md:flex-row flex-col items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 bg-secondary rounded-2xl h-72 m-3"></div>
                  <div className="py-3 sm:py-4 bg-red-300 rounded-2xl h-72 m-3"></div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 md:my-4 m-3 bg-secondary rounded-2xl h-72 md:h-96"></div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div className="mt-10 lg:mt-0 md:px-0 px-3">
                <span className="block mb-2 yel text-lg font-semibold ">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-semibold sm:text-[40px]/[43px]">
                  Why So Many Happy Customers Choose Abu Muhammad Movers
                </h2>
                <p className="mb-5 text-base text-gray-600">
                  At Abu Muhammad Movers, we’re transforming the moving and
                  storage experience in Dubai with our innovative approach and
                  customer-first services.
                </p>
                <p className="mb-8 text-base text-gray-600">
                  As one of the leading moving companies in the UAE, here’s why
                  thousands trust us every day:
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Know More..
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <div className="md:-mx-4 flex flex-wrap">
          <ServiceCard
            title="Reliable and Fast Moving Services in Dubai"
            details="We’re not just movers—we’re professionals committed to the safe and efficient transport of your belongings. You can relax knowing your items are in expert hands. And yes, we even throw in a little treat to celebrate your stress-free move!"
            icon={<Truck width={36} height={36} />}
          />
          <ServiceCard
            title="All-in-One Moving and Storage Solution in Dubai"
            details="From packing to delivery and storage, Abu Muhammad Movers is your go-to solution. Our world-class customer support is always ready to help, ensuring a seamless moving experience."
            icon={<Medal width={36} height={36} />}
          />

          <ServiceCard
            title="Safe & Secure Storage Facilities – Access 7 Days a Week"
            details="With 24/7 security and free facility access every day of the week, your peace of mind is guaranteed. Store with confidence knowing your possessions are protected around the clock."
            icon={<Warehouse width={36} height={36} />}
          />
          <ServiceCard
            title="Eco-Friendly Packing and Top-Notch Equipment"
            details="We use high-quality, reusable packing materials and tools to ensure the safety of your items. Your belongings stay clean, dust-free, and protected from damage or mold."
            icon={<LucidePackageCheck width={36} height={36} />}
          />
        </div>
      </div>
    </>
  );
};

export default Content;

const ServiceCard = ({
  icon,
  title,
  details,
}: {
  icon: ReactNode;
  title: string;
  details: string;
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 lg:drop-shadow-lg drop-shadow-md dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
            {icon}
          </div>
          <h4 className="mb-[10px] text-lg/5 font-semibold text-dark">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground">{details}</p>
        </div>
      </div>
    </>
  );
};

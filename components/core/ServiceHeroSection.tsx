import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { ReactNode } from "react";

const ServiceHeroSection = ({
  title,
  description,
  image,
}: {
  title: { first: string; second: string };
  description: string | ReactNode;
  image: {
    src: string;
    alt: string;
  };
}) => {
  return (
    <section className="relative ">
      <div className="absolute inset-0 object-cover w-full h-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="relative bg-black/50 pt-16">
        <svg
          className="absolute inset-x-0 -bottom-1 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-3 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-xl mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                {title.first} <br className="hidden md:block" />
                {title.second}
              </h2>
              <p className="max-w-xl mb-4 line text-base leading-[22px] text-gray-200 md:text-lg">
                {description}
              </p>
              <Link
                href="https://wa.me/+971556461731?text=I%20am%20looking%20for%20movers%20!"
                aria-label="Whatsapp Us"
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-[#ecd920]"
              >
                Whatsapp Us
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
              <Link
                href="tel:+971556461731"
                aria-label="Call To Us"
                className="inline-flex items-center ml-5 font-semibold tracking-wider transition-colors duration-200 text-[#ecd920]"
              >
                Call Now
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;

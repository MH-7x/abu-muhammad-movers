import { APP } from "@/lib/constants";
import type { Metadata } from "next";
import Script from "next/script";
const allFAQs = [
  {
    title: "Movers in Dubai Related FAQs",
    faqs: [
      {
        question: "What services do movers in Dubai offer?",
        answer:
          "Abu Muhammad Movers provides comprehensive relocation services: packing, loading, transportation, unloading, and furniture setup. Our skilled team can dismantle and reassemble large furniture items as needed, and we even handle tasks like wall-mounting TVs or installing appliances. We take care of every detail so your move is worry-free.",
      },
      {
        question: "How much do movers in Dubai charge?",
        answer:
          "Moving costs vary widely by the size of your home, distance, and services chosen. A basic studio move may range from AED 700 to 1,200, while a villa could be AED 3,000 to 5,000 or more. Get a personalized quote quickly through our online booking form.",
      },
      {
        question: "Are movers in Dubai insured and licensed?",
        answer:
          "Yes. Abu Muhammad Movers is fully licensed and offers optional damage protection to cover your belongings. We prioritize safety and security, giving you peace of mind during your move.",
      },
      {
        question: "How do I book a mover in Dubai?",
        answer:
          "You can book our services via our online booking portal or by contacting us directly. We recommend booking 1–2 weeks in advance, especially during busy periods.",
      },
      {
        question: "What day is best for moving in Dubai?",
        answer:
          "Weekdays (Sunday through Thursday) are generally less busy and more cost-effective. Weekends are in higher demand and may have higher rates. We’re available every day and can guide you on the best day to move.",
      },
      {
        question: "Do movers in Dubai provide packing and unpacking services?",
        answer:
          "Yes, we offer full and partial packing services, and can deliver boxes in advance for DIY. Our team labels and organizes your boxes for easy unpacking.",
      },
      {
        question: "Can movers disassemble and reassemble my furniture?",
        answer:
          "Yes. Our team dismantles beds, cabinets, and other large furniture before transit and reassembles them at your new home.",
      },
      {
        question: "Will movers handle permits and parking arrangements?",
        answer:
          "Yes. Abu Muhammad Movers takes care of logistics, including parking arrangements and permits needed during the move.",
      },
      {
        question: "Why should I choose Abu Muhammad Movers in Dubai?",
        answer:
          "With over 15 years of experience and a reputation for reliability, our professional team ensures smooth, efficient moves across the UAE.",
      },
      {
        question: "How are my items protected during the move?",
        answer:
          "We use insulated trucks, padding, and straps to secure your items. We also offer insurance and damage compensation up to AED 4,000.",
      },
    ],
  },
  {
    title: "Movers in Sharjah Related FAQs",
    faqs: [
      {
        question: "Do Dubai moving companies service Sharjah moves?",
        answer:
          "Yes. Abu Muhammad Movers frequently handles relocations between Dubai and Sharjah. The distance is short, and we ensure a smooth transition.",
      },
      {
        question: "How long does a move from Dubai to Sharjah take?",
        answer:
          "Travel time is usually 20–30 minutes. Including packing and loading, the full process can take a few hours.",
      },
      {
        question: "Are there extra charges for moving to or from Sharjah?",
        answer:
          "There might be a slightly higher fee compared to local moves due to travel time. All charges are explained upfront.",
      },
      {
        question: "Can I schedule a move to Sharjah on any day?",
        answer:
          "Yes, but Friday is a weekend day and may have restrictions. We recommend moving Sunday–Thursday or Saturday.",
      },
      {
        question: "What areas of Sharjah do you cover?",
        answer:
          "We cover all areas of Sharjah, including Al Majaz, Al Nahda, University City, and Aljada. Just share your addresses for planning.",
      },
      {
        question: "Do movers in Sharjah help with packing?",
        answer:
          "Yes. We provide full packing services including wrapping, labeling, and organizing fragile items carefully.",
      },
      {
        question:
          "Is moving to Sharjah more difficult than moving within Dubai?",
        answer:
          "Not at all. It just adds a bit of distance. Our team manages all logistics and makes your move seamless.",
      },
      {
        question: "How do I prepare for my Sharjah move?",
        answer:
          "Declutter and label boxes. Share special access instructions if needed. We handle the rest.",
      },
      {
        question: "What if I need storage before moving to Sharjah?",
        answer:
          "We can help you arrange safe, climate-controlled storage in Dubai or Sharjah through trusted partners.",
      },
      {
        question:
          "Why should I hire professional movers for a Sharjah relocation?",
        answer:
          "Professionals simplify your move, manage logistics, and handle your items with care. Our insured services offer peace of mind.",
      },
    ],
  },
  {
    title: "Movers in Ajman Related FAQs",
    faqs: [
      {
        question: "Can Abu Muhammad Movers handle moves in Ajman?",
        answer:
          "Yes. We provide moving services to and from Ajman and the rest of the UAE. Our team is experienced in cross-emirate moves.",
      },
      {
        question: "How much does it cost to move to Ajman?",
        answer:
          "Prices vary based on distance and volume. Moves to Ajman may cost slightly more than local Dubai moves. We offer upfront quotes.",
      },
      {
        question: "What logistics are involved in moving to Ajman?",
        answer:
          "We plan the route in advance and schedule accordingly. The packing, transport, and setup are handled just like any move.",
      },
      {
        question: "Are there parking or permit considerations in Ajman?",
        answer:
          "Parking in Ajman is generally relaxed, but we coordinate loading areas and building permissions when needed.",
      },
      {
        question: "Can you move a single item to or from Ajman?",
        answer:
          "Yes. Our Single Item Movers service allows you to move one appliance or furniture piece efficiently.",
      },
      {
        question: "What should I prepare for my Ajman move?",
        answer:
          "Label boxes, separate essentials, and inform us of fragile or large items. Preparation helps the move go faster.",
      },
      {
        question: "Is it more expensive to move to Ajman during weekends?",
        answer:
          "Yes, weekends often have higher rates. We recommend weekday bookings to save money.",
      },
      {
        question: "How do I book my move to Ajman?",
        answer:
          "Use our online booking form or contact us directly. We’ll confirm availability and give you a detailed quote.",
      },
      {
        question: "Do movers in Ajman charge extra for heavy items?",
        answer:
          "Extra charges may apply for oversized or heavy items needing special tools or manpower. We identify this during the quote.",
      },
      {
        question: "Why trust Abu Muhammad Movers for my Ajman relocation?",
        answer:
          "We’re experienced in long-distance UAE moves. Our customers value our efficiency, friendliness, and safe handling of belongings.",
      },
    ],
  },
  {
    title: "Movers in Abu Dhabi Related FAQs",
    faqs: [
      {
        question: "Do you provide moving services between Dubai and Abu Dhabi?",
        answer:
          "Yes. Abu Muhammad Movers regularly relocates homes and offices between Dubai and Abu Dhabi, managing all logistics and timing.",
      },
      {
        question: "How long does an Abu Dhabi move take?",
        answer:
          "A full-day move is typical. Travel alone takes 1.5 hours. We factor in packing, traffic, and setup time to ensure efficiency.",
      },
      {
        question: "Are additional fees applied for Abu Dhabi relocations?",
        answer:
          "Longer distance may include fuel or tolls. We provide an all-inclusive quote with no hidden charges.",
      },
      {
        question: "Can you handle fragile or bulky items to Abu Dhabi?",
        answer:
          "Yes. We use the right equipment and padding to move large or delicate items like safes, pianos, or antiques safely.",
      },
      {
        question: "What permits are needed to move to Abu Dhabi?",
        answer:
          "No special permits are required for residential moves. We handle all vehicle and crew documentation as needed.",
      },
      {
        question: "Do you offer packing services for Abu Dhabi moves?",
        answer:
          "Yes. We offer full and partial packing options, delivering all materials and labeling your items for easy unpacking.",
      },
      {
        question: "Can I get an insurance or protection plan for my move?",
        answer:
          "Yes. Insurance is available for extra peace of mind, especially on long-distance moves. We offer up to AED 4,000 coverage.",
      },
      {
        question: "How far in advance should I book an Abu Dhabi move?",
        answer:
          "We recommend booking 2–3 weeks ahead, especially near weekends or end-of-month periods.",
      },
      {
        question: "Do you coordinate move-in details in Abu Dhabi?",
        answer:
          "Yes. Our team unloads, reassembles furniture, and places everything in your new home as requested.",
      },
      {
        question: "Why choose a professional for a Dubai–Abu Dhabi move?",
        answer:
          "Professional movers handle timing, planning, and long-haul logistics. Abu Muhammad Movers offers a smooth, stress-free experience.",
      },
    ],
  },
];

allFAQs.push(
  {
    title: "Home Moving in Dubai Related FAQs",
    faqs: [
      {
        question: "What does a home moving service in Dubai include?",
        answer:
          "We provide packing, loading, transport, unloading, and full setup including furniture reassembly and appliance installation. Abu Muhammad Movers handles everything so you can relax.",
      },
      {
        question: "How do I prepare my home for a move?",
        answer:
          "Declutter, label boxes, and separate essentials. Visit our Home Moving in Dubai page for tips and a detailed checklist.",
      },
      {
        question: "When should I notify service providers and the landlord?",
        answer:
          "Notify your landlord and utility providers (like DEWA) at least 7 days in advance. We coordinate with building management if needed.",
      },
      {
        question: "What packing services do you offer?",
        answer:
          "We offer full or partial packing using premium materials. You can also request delivery of boxes for DIY packing.",
      },
      {
        question: "Can you move specialty items in a home?",
        answer:
          "Yes, we move pianos, safes, artwork, and other special items with care using the proper tools and padding.",
      },
      {
        question: "What happens after unloading at the new home?",
        answer:
          "We reassemble furniture, place boxes in the correct rooms, and can assist with minor installations like curtain rods or wall mounts.",
      },
      {
        question: "Is moving on weekends in Dubai more expensive?",
        answer:
          "Yes, Friday and Saturday moves are in higher demand and often have higher rates. Weekday bookings are more affordable.",
      },
      {
        question: "How early should I book a home move?",
        answer:
          "Book 2–4 weeks in advance for best availability. Visit our online booking form to schedule quickly.",
      },
      {
        question: "Do you offer partial moving services (like packing only)?",
        answer:
          "Yes, we can tailor services to your needs. Choose packing-only, loading-only, or full relocation service as you prefer.",
      },
      {
        question: "Why should I hire professional home movers?",
        answer:
          "We save you time, prevent damage, and handle the entire process efficiently. Visit our Home Moving in Dubai page to learn more.",
      },
    ],
  },
  {
    title: "Packing Services Related FAQs",
    faqs: [
      {
        question: "What packing services are available?",
        answer:
          "We offer full, partial, and fragile-only packing. You can also request delivery of empty boxes for self-packing.",
      },
      {
        question: "Do you supply the packing materials?",
        answer:
          "Yes. Boxes, bubble wrap, tape, and padding are included in your quote. No need to buy them yourself.",
      },
      {
        question: "Can I pack some items myself?",
        answer:
          "Yes. We can even deliver boxes in advance. Many customers pack clothes or personal items while we pack furniture and breakables.",
      },
      {
        question: "How do you handle fragile items?",
        answer:
          "We use extra cushioning and label boxes as fragile. Glassware, dishes, electronics, and art receive special protection.",
      },
      {
        question: "Is unpacking included in the service?",
        answer:
          "Yes. If you select it, we’ll unpack boxes, set up items, and remove all packing materials for you.",
      },
      {
        question: "Are there eco-friendly packing options?",
        answer:
          "We use recyclable boxes and can offer reusable crates upon request. Let us know if you prefer a green move.",
      },
      {
        question: "How much does full packing cost?",
        answer:
          "It depends on your home size and items. It’s included in our moving quotes and explained upfront—no hidden fees.",
      },
      {
        question: "How do I prepare for the packing team?",
        answer:
          "Separate any items you’ll move yourself and keep valuables aside. Our team needs clear access to every room.",
      },
      {
        question: "What safety measures do packers take?",
        answer:
          "Our trained packers wear gloves and use proper lifting methods. We follow all safety protocols to protect your belongings.",
      },
      {
        question: "Why hire professional packers?",
        answer:
          "It saves time and prevents damage. Our team packs efficiently and ensures your belongings arrive safe and sound.",
      },
    ],
  },
  {
    title: "Local Movers in Dubai Related FAQs",
    faqs: [
      {
        question: "What defines a local move in Dubai?",
        answer:
          "Local moves happen within Dubai city limits, such as shifting from Marina to JVC. These moves are usually completed same-day.",
      },
      {
        question: "Are local moves less expensive than interstate moves?",
        answer:
          "Yes, they involve shorter distances and lower fuel/time costs. Get an exact quote via our online booking form.",
      },
      {
        question:
          "Can local movers in Dubai handle move-ins within the same building or community?",
        answer:
          "Absolutely. We use dollies and trolleys to navigate tight spaces, including elevators or walk-up buildings.",
      },
      {
        question: "What services are included in a local move?",
        answer:
          "Packing, transport, reassembly, and optional unpacking. Even short moves get our full professional treatment.",
      },
      {
        question: "Do local moves require a deposit?",
        answer:
          "A small deposit may be required to secure your date. Full payment is due upon successful completion of your move.",
      },
      {
        question: "How long do local moves in Dubai take?",
        answer:
          "Small apartments may take 2–4 hours. Larger homes can take a full day depending on volume and access.",
      },
      {
        question: "How do I save money on a local move?",
        answer:
          "Avoid weekends, pack your own items, and declutter beforehand. Fewer boxes = lower cost.",
      },
      {
        question: "Can I hire local movers for office relocation?",
        answer:
          "Yes, we offer local office moves with flexible timing, including evenings or weekends to avoid disruption.",
      },
      {
        question: "What if I need storage during a local move?",
        answer:
          "We can connect you with secure storage options and manage the logistics of drop-off and re-delivery.",
      },
      {
        question: "Why choose Abu Muhammad Movers as local movers?",
        answer:
          "We know Dubai inside out, and our team is trained for fast, careful service. Visit our Local Movers in Dubai page to learn more.",
      },
    ],
  },
  {
    title: "Single Item Movers Related FAQs",
    faqs: [
      {
        question: "What are Single Item Movers?",
        answer:
          "This service lets you move one heavy or large item like a fridge, bed, or piano. It's affordable and efficient for smaller jobs.",
      },
      {
        question: "What items can I move with this service?",
        answer:
          "Common items include sofas, dining tables, wardrobes, appliances, and safes. We’ll ask for item size and weight when booking.",
      },
      {
        question: "How is pricing determined for a single-item move?",
        answer:
          "Based on size, distance, and how many crew are needed. You'll get an instant quote through our online booking form.",
      },
      {
        question: "Do you have special equipment for moving heavy items?",
        answer:
          "Yes. We use dollies, lifting straps, and padding to protect both the item and your property.",
      },
      {
        question:
          "Can you help install or assemble the item at the new location?",
        answer:
          "Yes, if the item requires reassembly or connection (like a washing machine), we can assist.",
      },
      {
        question: "Is insurance available for single-item moves?",
        answer:
          "Yes, and recommended for high-value items. We also offer damage compensation up to AED 4,000 if needed.",
      },
      {
        question: "How quickly can I schedule a single-item move?",
        answer:
          "Often same-day or next-day, depending on availability. Use our Single Item Movers page to book now.",
      },
      {
        question:
          "What if I have multiple single items (like a sofa and a bed)?",
        answer:
          "You can group them. We'll calculate the price based on the volume and time needed.",
      },
      {
        question:
          "Can I use single-item movers for a local or interstate move?",
        answer:
          "Yes, whether you're moving within Dubai or to another emirate. We'll adjust pricing by distance.",
      },
      {
        question: "Why use a professional single-item moving service?",
        answer:
          "It’s safer, quicker, and prevents damage. Let Abu Muhammad Movers handle the heavy lifting for peace of mind.",
      },
    ],
  },

  {
    title: "Furniture Installation Related FAQs",
    faqs: [
      {
        question: "Do the movers assemble and install furniture?",
        answer:
          "Yes. We dismantle and reassemble beds, wardrobes, tables, and more. It’s included in your moving package.",
      },
      {
        question: "Do you reconnect appliances and electronics?",
        answer:
          "We can reconnect basic appliances like washing machines and TVs. For complex systems, we recommend a licensed technician.",
      },
      {
        question: "Can you mount TVs and artwork on walls?",
        answer:
          "Yes, we offer wall-mounting for TVs, mirrors, and frames. Just provide the mounting kit and we’ll handle it.",
      },
      {
        question: "Is furniture installation included, or extra?",
        answer:
          "Basic furniture setup is included. Specialty items or complex installations may carry a small additional fee.",
      },
      {
        question: "Do you provide installation for flat-pack (IKEA) furniture?",
        answer:
          "Yes, we assemble all types of flat-pack furniture. Our team is experienced and brings the necessary tools.",
      },
      {
        question: "What if my furniture gets damaged during installation?",
        answer:
          "We’re extremely careful, but if something goes wrong, we offer up to AED 4,000 in damage compensation where applicable.",
      },
      {
        question: "Do I need to prepare anything for furniture installation?",
        answer:
          "Clear the area, and gather any parts or manuals. We’ll handle the tools, lifting, and assembly.",
      },
      {
        question: "How much does furniture installation cost?",
        answer:
          "Standard assembly is free. Built-ins or plumbing-connected units may require extra charges, always quoted in advance.",
      },
      {
        question: "Can movers remove old furniture or items?",
        answer:
          "Yes, upon request. We can assist with safe disposal or removal of unwanted furniture or packing waste.",
      },
      {
        question: "Why should I choose professional installation?",
        answer:
          "It ensures safety, proper setup, and saves you hours of effort. Our team does it right the first time.",
      },
    ],
  }
);

export const metadata: Metadata = {
  title: "FAQs | Abu Muhammad Movers",
  description:
    "Find answers to common questions about moving services in Dubai, Sharjah, Ajman, Abu Dhabi, and more. Learn about pricing, services, and how to prepare for your move.",
  alternates: {
    canonical: `${APP.url}/faqs `,
  },
  openGraph: {
    title: "FAQs | Abu Muhammad Movers",
    description:
      "Find answers to common questions about moving services in Dubai, Sharjah, Ajman, Abu Dhabi, and more. Learn about pricing, services, and how to prepare for your move.",
    url: `${APP.url}/faqs `,
    images: [
      {
        url: `${APP.url}/images/movers-packers-faqs`,
        width: 1200,
        height: 630,
        alt: "Abu Muhammad Movers Faqs",
      },
    ],
    type: "website",
    siteName: "Abu Muhammad Movers",
    phoneNumbers: ["+971 55 6461731", "+971 56 7878464"],
    emails: "abumuhammad.movers@gmail.com",
  },
};

function generateFaqSchema(
  allFAQs: {
    title: string;
    faqs: { question: string; answer: string }[];
  }[]
): object {
  const faqItems = allFAQs.flatMap((group) =>
    group.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };
}

const faqSchema = generateFaqSchema(allFAQs);

const FAQsPage = () => {
  return (
    <>
      <head>
        <Script
          id="faqs-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <main className="mt-32">
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
            <header>
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900 text-center">
                Frequently asked questions
              </h1>
            </header>
            <div className="mt-6 border-t-4 border-gray-100 pt-10">
              {allFAQs.map((faq, i) => (
                <section
                  key={i}
                  id={faq.title.replace(" ", "-")}
                  className=" mb-20"
                >
                  <h2 className="text-2xl font-bold mb-5">{faq.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                    {faq.faqs.map((ques, i) => (
                      <article key={i}>
                        <h3 className="font-medium leading-6 text-gray-900 text-lg mt-4">
                          {ques.question}
                        </h3>

                        <p className=" mt-4 leading-6 text-base text-gray-500">
                          {ques.answer}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQsPage;

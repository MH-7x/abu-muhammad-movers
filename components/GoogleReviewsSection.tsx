"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const reviews = [
  {
    name: "Aakash Gosavi",
    time: "2 days ago",
    review:
      "Abu Muhammad Movers made our move in Dubai effortless — their Sharjah team arrived on time, packed everything carefully and delivered our furniture without a scratch. Highly recommended for anyone looking for professional movers in Sharjah and moving in Dubai.",
    stars: 5,
  },
  {
    name: "Fatima Al Noor",
    time: "3 days ago",
    review:
      "Great experience moving in Dubai with Abu Muhammad Movers from Sharjah. The crew handled fragile items expertly and their packing services were affordable and fully insured — stress-free relocation!",
    stars: 5,
  },
  {
    name: "Omar Khan",
    time: "1 week ago",
    review:
      "I booked Abu Muhammad Movers for a residential move from Sharjah to Dubai — their team was punctual, polite and fast. Best Sharjah movers I’ve used for moves in Dubai, and the price was very fair.",
    stars: 5,
  },
  {
    name: "Sara Bennet",
    time: "5 days ago",
    review:
      "Fantastic service — Abu Muhammad Movers’ Sharjah crew disassembled and reassembled my furniture flawlessly during our move in Dubai. Excellent communication and attention to detail.",
    stars: 5,
  },
  {
    name: "Hassan Raza",
    time: "2 weeks ago",
    review:
      "From the free on-site estimate to the final delivery, Abu Muhammad Movers made our Dubai office move seamless. Their Sharjah team is professional, efficient and perfect for commercial or residential moving in Dubai.",
    stars: 5,
  },
  {
    name: "Lina Mathews",
    time: "4 days ago",
    review:
      "Abu Muhammad Movers in Sharjah provided top-notch packing services for our move in Dubai — all boxes were labeled and fragile items were double-wrapped. Definitely the best movers for anyone relocating in Dubai.",
    stars: 5,
  },
  {
    name: "Muhammad Faisal",
    time: "6 days ago",
    review:
      "We moved from Sharjah to Dubai last month and Abu Muhammad Movers handled everything professionally. On-time pickup, secure transport and friendly staff — great value for reliable movers in Sharjah.",
    stars: 5,
  },
  {
    name: "Nadia Ali",
    time: "1 month ago",
    review:
      "Highly recommend Abu Muhammad Movers for moving in Dubai. Their Sharjah team provided excellent packing, careful handling of antiques, and clear follow-up — made our relocation completely worry-free.",
    stars: 5,
  },
  {
    name: "Ibrahim Noor",
    time: "3 weeks ago",
    review:
      "Smooth move with Abu Muhammad Movers — the Sharjah branch coordinated timing perfectly for our Dubai move and offered secure short-term storage when needed. Professional and courteous throughout.",
    stars: 5,
  },
  {
    name: "Rania Saleh",
    time: "8 days ago",
    review:
      "Excellent movers — Abu Muhammad Movers from Sharjah delivered everything on schedule during our move in Dubai. Their team protected every item and the pricing was transparent. Will use them again.",
    stars: 5,
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="w-full mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#f6f6f8] p-10 mb-8">
          <div className="flex items-center gap-2">
            {/* Google Logo Placeholder */}
            <div className="w-8 h-8 relative">
              <Image
                src={"/google-logo.png"}
                alt="Google Logo"
                fill
                className="object-contain object-center"
              />
            </div>
            <h2 className="text-xl font-semibold">Google Reviews</h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-2xl font-bold">4.7</span>
            <div className="flex text-yellow-400">{"★★★★★"}</div>
            <span className="text-gray-500 text-sm">(654)</span>
            <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
              Review us on Google
            </button>
          </div>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 rounded-xl bg-[#f6f6f8]">
                <div className="flex items-center gap-3 mb-3">
                  {/* Profile placeholder */}
                  <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
                    {item.name.split(" ")[0][0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {"★".repeat(item.stars)}
                </div>
                <p className="text-sm text-gray-700">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

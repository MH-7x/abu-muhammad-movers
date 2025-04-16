import Link from "next/link";
import { ReactNode } from "react";

const ServiceCard = ({
  list,
}: {
  list: {
    icon: ReactNode;
    title: string;
    description: string;
    link: string;
  }[];
}) => {
  return list.map((item, index) => (
    <div
      key={index}
      className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg p-6"
    >
      <div className="flex items-center mb-4">
        {item.icon}
        <Link href={item.link}>
          {" "}
          <h3 className="ml-3 text-xl font-semibold">{item.title}</h3>
        </Link>
      </div>
      <p className="block text-slate-500 leading-normal mb-4">
        {item.description}
      </p>
      <div>
        <a
          title={`more details about ${item.title}`}
          href={item.link}
          className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
        >
          More details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  ));
};

export default ServiceCard;

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  descriptions: string[];
  button: {
    text: string;
    link?: string;
  };
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  descriptions,
  button,
  imageAlt,
}) => {
  return (
    <div className="flex max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="w-1/2 relative min-h-44">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-center object-cover"
          fill
        />
      </div>
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          {button.link ? (
            <Link href={button.link}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            </Link>
          ) : (
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          )}

          {descriptions.map((desc, index) => (
            <p key={index} className="text-gray-600 mb-2">
              {desc}
            </p>
          ))}
        </div>
        <Button className="mt-4" variant="link" asChild>
          <Link href={"tel:+971 50 123 4567"}>{button.text}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Card;

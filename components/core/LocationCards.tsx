// components/LocationCard.tsx
import { Button } from "@/components/ui/button";
import { MessageCircleMore, MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface LocationCardProps {
  city: string;
  description: string;
  link: string;
}

export const LocationCard = ({
  city,
  description,
  link,
}: LocationCardProps) => (
  <div className="bg-accent rounded-2xl overflow-hidden p-4">
    <Link href={link}>
      <h3 className="text-xl hover:underline underline-offset-4 transition-colors">
        {city}
      </h3>
    </Link>
    <p className="text-muted-foreground text-sm mt-2">{description}</p>
    <div className="flex gap-x-3 mt-2">
      <Button size="sm" variant="link">
        whatsapp <MessageCircleMore />
      </Button>
      <Link title={`${city} `} href={link}>
        <Button size="sm" variant="link">
          more details <MoreHorizontal />
        </Button>
      </Link>
    </div>
  </div>
);

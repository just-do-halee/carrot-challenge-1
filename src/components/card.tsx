import { Person } from "@/utils/api";
import cn from "../utils/cn";
import Image from "next/image";

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  person: Person;
}

export default function Card({ person, className, ...props }: CardProps) {
  const hasImage = !person.squareImage.includes("undefined");
  return (
    <div
      {...props}
      className={cn(
        "w-full h-72 flex flex-col justify-center items-center rounded-sm bg-neutral-dark ",
        className
      )}
    >
      <div className="w-full h-2/3">
        {hasImage ? (
          <div className="relative size-full overflow-hidden">
            <Image
              src={person.squareImage}
              alt={person.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="bg-neutral-light size-full">
            <span className="text-5xl">F</span>
          </div>
        )}
      </div>
      <div className="mb-4 p-2 pt-4 w-full h-1/3 flex flex-col justify-start items-start gap-1 overflow-y-auto">
        <span className="font-bold text-lg">{person.name}</span>
        <span className="text-sm">
          {person.netWorth | 0} Billion / {person.industries}{" "}
        </span>
      </div>
    </div>
  );
}

import Card from "@/components/card";
import LoadingCard from "@/components/loading-card";
import { getBillionaires } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Home() {
  const { val: list, fail } = await getBillionaires();
  if (fail) return notFound();
  return (
    <div className="max-w-[62rem] h-full grid grid-cols-4 gap-4">
      {list.map((person) => (
        <Link key={person.id} href={`/person/${person.id}`}>
          <Card person={person} />
        </Link>
      ))}
    </div>
  );
}

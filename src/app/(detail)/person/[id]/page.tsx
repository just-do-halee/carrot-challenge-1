import { formatPrice } from "@/utils/\bformat-price";
import { getBillionaireById } from "@/utils/api";
import { Param } from "@/utils/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Person({ params: { id } }: Param<"id">) {
  const { val: detail, fail } = await getBillionaireById(id);
  if (fail) return notFound();
  return (
    <main className="p-10 bg-slate-900 max-w-2xl h-full flex flex-col gap-10">
      <div className="max-w-1/2 flex flex-col gap-2">
        <Image
          src={detail.squareImage}
          alt={detail.name}
          width={300}
          height={300}
        />
        <span className="text-xl font-bold">{detail.name}</span>
        <span className="text-sm">Networth: {detail.netWorth | 0} Billion</span>
        <span className="text-sm">Country: {detail.country}</span>
        <span className="text-sm">Industry: {detail.industries}</span>
        <p className="text-sm">{detail.bio}</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Financial Assets</span>
        <div className="grid grid-cols-4 gap-2 *:has-[span]:text-xs">
          {detail.financialAssets?.map((asset, index) => (
            <div
              key={index}
              className="size-full border border-gray-500 rounded-xl p-4 flex flex-col justify-start items-start"
            >
              <span>Ticker: {asset.ticker}</span>
              <span>Shares: {formatPrice(asset.sharePrice)}</span>
              {asset.exerciseOptionPrice && (
                <span>
                  Exercise Price:{" "}
                  {formatPrice(asset.exerciseOptionPrice, asset.currencyCode)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

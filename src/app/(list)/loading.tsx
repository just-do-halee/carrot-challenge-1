import LoadingCard from "@/components/loading-card";

export default function Loading() {
  return (
    <div className="w-[62rem] h-full grid grid-cols-4 gap-4 animate-pulse">
      {Array.from({ length: 16 }, (_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}

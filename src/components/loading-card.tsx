import cn from "../utils/cn";

export default function LoadingCard({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "w-full h-72 flex flex-col justify-center items-center rounded-sm bg-neutral-dark overflow-hidden",
        className
      )}
    >
      <div className="relative w-full h-2/3 overflow-hidden">
        <div className="bg-black size-full"></div>
      </div>
      <div className="bg-neutral-dark mb-4 p-2 pt-4 w-full h-1/3 flex flex-col justify-start items-start gap-1 overflow-y-auto"></div>
    </div>
  );
}

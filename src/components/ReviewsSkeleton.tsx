
type ReviewSkeletonProps = {
  count?: number;
};

export default function ReviewsSkeleton({ count = 3 }: ReviewSkeletonProps) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2 animate-pulse"
      aria-live="polite"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 rounded-lg border border-[#dbe2e6] bg-white p-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-[#eef2f4]" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-24 rounded bg-[#eef2f4]" />
              <div className="h-2.5 w-16 rounded bg-[#eef2f4]" />
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((__, starIdx) => (
              <div key={starIdx} className="h-3 w-3 rounded bg-[#eef2f4]" />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-full rounded bg-[#eef2f4]" />
            <div className="h-2.5 w-5/6 rounded bg-[#eef2f4]" />
            <div className="h-2.5 w-2/3 rounded bg-[#eef2f4]" />
          </div>
        </div>
      ))}
    </div>
  );
}
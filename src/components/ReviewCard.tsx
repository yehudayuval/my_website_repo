import { PiStarFill } from "react-icons/pi";
import Image from "next/image";

export interface Review {
  id?: string;
  name?: string;
  image_filename?: string;
  created_at?: string;
  rating?: number; 
  content?: string;
}

interface ReviewCardProps {
  review: Review;
  className?: string;
}

const formatReviewDate = (value?: string | null) => {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
};

export default function ReviewCard({ review, className = "" }: ReviewCardProps) {
  return (
    <article
      dir="rtl"
      className={[
        "flex-none w-[20rem] md:w-[22.5rem]",
        "rounded-xl border border-[#dbe2e6] bg-white shadow-sm",
        "p-5 inline-block align-top",
        className,
      ].join(" ")}
    >
      <header className="flex items-center gap-3">
        <Image
          src={review.image_filename ?? "/poster-ceiling.png"}
          alt={review.name ?? "לקוח מרוצה"}
          className="rounded-full shrink-0 "
          width={40}
          height={40}
        />
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-[#111618]">
            {review.name ?? "לקוח מרוצה"}
          </p>
          <p className="text-xs text-[#617c89]">{formatReviewDate(review.created_at)}</p>
        </div>
      </header>

      <div className="mt-3 flex gap-0.5" aria-label={`דירוג ${review.rating ?? 0} כוכבים`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <PiStarFill
            key={i}
            size={18}
            className={i < (review.rating ?? 0) ? "text-[#facc15]" : "text-[#dbe2e6]"}
          />
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[#111618] line-clamp-4">
        {review.content ?? ""}
      </p>
    </article>
  );
}

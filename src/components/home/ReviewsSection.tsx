import Marquee from 'react-fast-marquee';

import ReviewCard from '@/components/ReviewCard';
import { fetchReviews } from '@/lib/queries/reviews';

export default async function ReviewsSection() {
  const { reviews = [] } = await fetchReviews();

  return (
    <div id="reviews">
      {reviews.length === 0 ? (
        <p className="text-[#617c89] text-base font-normal leading-normal px-4 py-3">
          לא נמצאו המלצות
        </p>
      ) : (
        <Marquee gradient speed={500} pauseOnHover autoFill>
          {[...reviews, ...reviews].map((review, idx) => (
            <ReviewCard key={`${review.id ?? review.name}-${idx}`} review={review} idx={idx} />
          ))}
        </Marquee>
      )}
    </div>
  );
}
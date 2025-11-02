import { Review } from '@/types';

export type FetchReviewsResult = {
  status: 'success' | 'error';
  reviews?: Review[];
};

const baseUrl = process.env.__NEXT_PRIVATE_ORIGIN ?? '';

export async function fetchReviews(): Promise<FetchReviewsResult> {
  const response = await fetch(`${baseUrl}/api/reviews`, { next: { tags: ['reviews'] } });
  
  if (!response.ok) {
    return {
      status: 'error',
      reviews: [],
    };
  }

  const data = await response.json();
  return {
    status: 'success',
    reviews: Array.isArray(data?.reviews) ? data.reviews : [],
  };
}

export async function fetchReviewsExistence(): Promise<boolean> {
  const response = await fetch(`${baseUrl}/api/reviews/exists`, { next: { tags: ['reviews-exists'] } });
  if (!response.ok) {
    throw new Error(`Failed to check review availability: ${response.status}`);
  }

  const data = await response.json();
  return Boolean(data?.hasReviews);
}
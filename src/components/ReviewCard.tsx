'use client';

import Image from 'next/image';

interface ReviewCardProps {
  rating: number;
  content: string;
  imageFilename?: string;
  createdAt: string;
}

const ReviewCard = ({ rating, content, imageFilename, createdAt }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ⭐
        </span>
      );
    }
    return stars;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Rating */}
      <div className="flex justify-center mb-4">
        {renderStars(rating)}
      </div>

      {/* Content */}
      <p className="text-gray-700 text-center mb-4 leading-relaxed">
        {content}
      </p>

      {/* Image */}
      {imageFilename && (
        <div className="mb-4 flex justify-center">
          <div className="relative w-full max-w-md h-48">
            <Image
              src={`/${imageFilename}`}
              alt="תמונת ביקורת"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      )}

      {/* Date */}
      <div className="text-sm text-gray-500 text-center">
        {formatDate(createdAt)}
      </div>
    </div>
  );
};

export default ReviewCard;
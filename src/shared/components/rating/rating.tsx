import React from 'react';
import type { FC } from 'react';

type RatingProps = {
  rating: number;
  reviews: number;
};

export const Rating: FC<RatingProps> = ({ rating, reviews }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={`full-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-yellow-500"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
  
        {/* Половина звезды */}
        {hasHalfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill="currentColor"
            className="text-yellow-500"
          />
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill="currentColor"
            className="text-gray-200"
            style={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
            }}
          />
        </svg>
      )}

      {/* Пустые звезды */}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <svg
          key={`empty-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-gray-200"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}

        <div>
          <span className="ml-2 text-sm font-semibold text-text-title">{rating}</span>
          <span className="ml-2 text-sm text-[#9EA0AB]">{`(${reviews} reviews)`}</span>
        </div>
      </div>
    );
}
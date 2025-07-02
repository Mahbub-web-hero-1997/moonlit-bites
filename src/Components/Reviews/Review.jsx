import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
  const { title, details, rating, reviewer } = review;
  console.log(reviewer?.fullName);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition duration-300">
      {/* Reviewer Info */}
      <div className="text-center mb-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl font-bold">
          <img src={reviewer?.avatar || "U"} alt="" />
        </div>
        <h3 className="mt-2 text-lg font-semibold text-orange-500">
          {reviewer?.fullName || 'Anonymous'}
        </h3>
      </div>

      {/* Title */}
      <h4 className="text-xl font-bold text-gray-800 text-center mb-2">
        {title}
      </h4>

      {/* Rating */}
      <div className="flex justify-center items-center gap-1 text-yellow-500 mb-2">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} />
        ))}
        <span className="ml-2 text-gray-700 text-sm">({rating}/5)</span>
      </div>

      {/* Review Details */}
      <p className="text-gray-600 text-sm text-justify leading-relaxed">
        {details}
      </p>
    </div>
  );
};

export default Review;

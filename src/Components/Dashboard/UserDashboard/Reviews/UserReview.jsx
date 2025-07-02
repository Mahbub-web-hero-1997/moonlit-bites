import React, { useState } from 'react';
import UseAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaUserAlt, FaCommentDots, FaPaperPlane, FaStar, FaRegStar } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import Rating from 'react-rating';

const UserReview = () => {
  const axiosSecurePublic = UseAxiosPublic();
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      title: data.name,
      details: data.recipe,
      rating,
    };

    axiosSecurePublic.post('/reviews/create', reviewData).then((res) => {
      if (res.data?.statusCode === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Review Submitted!',
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setRating(0);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-500 flex items-center justify-center gap-2">
          <HiOutlineSpeakerphone className="text-4xl" /> Submit Your Review
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Share your feedback with us to help improve our service.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600 flex items-center gap-2">
              <FaUserAlt /> Your Name
            </label>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div>
            <label className="text-sm text-gray-600 flex items-center gap-2">
              <FaCommentDots /> Your Review
            </label>
            <textarea
              {...register('recipe', { required: true })}
              placeholder="What would you like to share?"
              rows={5}
              className="w-full mt-1 px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.recipe && <p className="text-red-500 text-sm mt-1">Review is required</p>}
          </div>

          <div>
            <label className="text-sm text-gray-600 flex items-center gap-2 mb-2">
              <FaStar className="text-yellow-400" /> Your Rating
            </label>
            <Rating
              initialRating={rating}
              emptySymbol={<FaRegStar className="text-2xl text-gray-300" />}
              fullSymbol={<FaStar className="text-2xl text-yellow-500" />}
              onChange={(value) => setRating(value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaPaperPlane /> Publish Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserReview;

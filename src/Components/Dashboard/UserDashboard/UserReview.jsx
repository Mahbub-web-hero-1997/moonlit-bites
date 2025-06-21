import React from 'react';
import UseAxiosPublic from '../../../CustomHook/UseAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaUserAlt, FaCommentDots, FaImage, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const UserReview = () => {
  const axiosSecurePublic = UseAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.name);
    formData.append('content', data.recipe);
    formData.append('image', data.image[0]);

    axiosSecurePublic.post('/blogs', formData).then((res) => {
      if (res.data) {
        Swal.fire({
          icon: 'success',
          title: 'Review Submitted!',
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
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
          </div>

          <div>
            <label className="text-sm text-gray-600 flex items-center gap-2">
              <FaImage /> Upload an Image
            </label>
            <input
              type="file"
              {...register('image', { required: true })}
              className="w-full mt-1 px-3 py-2 border border-orange-300 rounded-lg bg-white text-gray-700 cursor-pointer"
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

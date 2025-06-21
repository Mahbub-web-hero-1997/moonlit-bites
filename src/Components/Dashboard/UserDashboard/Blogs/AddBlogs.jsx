import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';

const AddBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('images', data.images[0]);
    axiosPublic.post('/blogs/create', formData).then((res) => {
      if (res.data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Blog Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-white px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">📝 Add New Blog</h2>
        <p className="text-center text-gray-500 mb-6">
          Share your thoughts and inspire others with your words.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Blog Title</label>
            <input
              type="text"
              {...register('title', { required: true })}
              placeholder="Enter blog title"
              className="w-full mt-1 px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Blog Content</label>
            <textarea
              {...register('content', { required: true })}
              placeholder="Write your blog here..."
              rows={6}
              className="w-full mt-1 px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Upload Image</label>
            <input
              type="file"
              {...register('images', { required: true })}
              className="w-full mt-1 px-3 py-2 border border-orange-300 rounded-lg bg-white text-gray-700 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;

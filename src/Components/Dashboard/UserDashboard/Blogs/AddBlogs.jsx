import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';

const AddBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const [files, setFiles] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (files.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Please select at least one image',
      });
      return;
    }

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    axiosPublic
      .post('/blogs/create', formData)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Blog Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          setFiles([]);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to upload blog',
          text: err.response?.data?.error || err.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-white px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
          Add New Blog
        </h2>
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
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600">Blog Content</label>
            <textarea
              {...register('content', { required: true })}
              placeholder="Write your blog here..."
              rows={6}
              className="w-full mt-1 px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">Content is required</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600">Upload Images</label>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              className="w-full mt-1 px-3 py-2 border border-orange-300 rounded-lg bg-white text-gray-700 cursor-pointer"
            />
            {files.length > 0 && (
              <p className="text-gray-600 text-sm mt-1">
                {files.length} file(s) selected
              </p>
            )}
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

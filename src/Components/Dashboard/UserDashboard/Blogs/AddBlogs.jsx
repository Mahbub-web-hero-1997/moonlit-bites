import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';


const AddBlogs = () => {
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.recipe);
    formData.append('images', data.images[0]);
    axiosPublic.post('/blogs/create', formData).then((res) => {
      if (res.data) {
        console.log(res.data?.data);
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
    <div className="w-full h-screen md:h-[500px] md:w-1/2 mx-auto p-4 mt-18 shadow-lg overflow-hidden">
      <h1 className="text-2xl font-semibold text-center text-orange-500">
        Add Product
      </h1>
      <hr className="w-2/3 md:w-1/2  mx-auto mt-3" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
        action=""
      >
        <input
          type="text"
          {...register('title')}
          required
          placeholder="Title"
          className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
        />
        <textarea
          type="text"
          {...register('content')}
          required
          placeholder="Blog Description"
          className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
        />
        <input
          type="file"
          {...register('images')}
          required
          className=" outline-none border-b-[1px] border-orange-500 px-2 py-4 bg-white text-gray-500"
        />

        <input
          type="submit"
          value="Publish"
          className="btn bg-orange-500 text-white text-xl hover:bg-white hover:text-orange-500 hover:border-orange-500"
        />
      </form>
    </div>
  );
};

export default AddBlogs;

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';
import axios from 'axios';

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { setMenus } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('recipe', data.recipe);
    formData.append('image', data.image[0]);

    axiosPublic.post('/menus/create', formData).then((res) => {   
      if (res.data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        setMenus((prevMenus) => [...prevMenus, res.data?.data]);
        reset();
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-xl transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-6 drop-shadow-sm">
          Add New Menu Item
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            {...register('name')}
            required
            placeholder="Product Name"
            className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <div className="flex gap-4">
            <input
              type="number"
              {...register('price')}
              required
              placeholder="Price"
              className="w-1/2 p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <select
              {...register('category')}
              required
              className="w-1/2 p-4 border border-orange-300 rounded-xl bg-white text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            >
              <option disabled selected>
                Select Category
              </option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Dessert</option>
              <option>Popular</option>
              <option>Drinks</option>
              <option>Soup</option>
            </select>
          </div>

          <textarea
            {...register('recipe')}
            required
            placeholder=" Product Description"
            className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <input
            type="file"
            {...register('image')}
            required
            className="w-full p-3 file:border file:border-orange-300 file:rounded-md file:px-4 file:py-2 file:bg-orange-100 file:text-orange-700 text-gray-600 rounded-xl border border-orange-300 focus:outline-none"
          />

          <input
            type="submit"
            value="Publish"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 hover:border hover:border-orange-500 transition-all duration-300 shadow-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;

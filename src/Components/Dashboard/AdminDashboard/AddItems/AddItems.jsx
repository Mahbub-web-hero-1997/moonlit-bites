import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';
import UseCloudinary from '../../../../CustomHook/UseCloudinary';

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { setMenus } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { uploadImage, err } = UseCloudinary();

  const onSubmit = async (data) => {
    try {
      const file = data.image[0];
      const imageUrl = await uploadImage(file); // Upload to Cloudinary

      if (!imageUrl) {
        Swal.fire({
          icon: 'error',
          title: 'Image Upload Failed',
          text: err || 'Unknown error during image upload',
        });
        return;
      }

      const payload = {
        name: data.name,
        price: data.price,
        category: data.category,
        recipe: data.recipe,
        image: imageUrl,
      };

      const res = await axiosPublic.post('/menus/create', payload);
      if (res.data?.data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        setMenus((prevMenus) => [...prevMenus, res.data.data]);
        reset();
      }
    } catch (error) {
      console.error('Error creating menu:', error);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: error?.response?.data?.message || 'Something went wrong!',
      });
    }
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
            {...register('name', { required: true })}
            placeholder="Product Name"
            className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <div className="flex gap-4">
            <input
              type="number"
              {...register('price', { required: true })}
              placeholder="Price"
              className="w-1/2 p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <select
              {...register('category', { required: true })}
              className="w-1/2 p-4 border border-orange-300 rounded-xl bg-white text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Dessert">Dessert</option>
              <option value="Popular">Popular</option>
              <option value="Drinks">Drinks</option>
              <option value="Soup">Soup</option>
            </select>
          </div>
          {errors.category && <p className="text-red-500">Category is required</p>}

          <textarea
            {...register('recipe', { required: true })}
            placeholder="Product Description"
            className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          {errors.recipe && <p className="text-red-500">Description is required</p>}

          <input
            type="file"
            {...register('image', { required: true })}
            className="w-full p-3 file:border file:border-orange-300 file:rounded-md file:px-4 file:py-2 file:bg-orange-100 file:text-orange-700 text-gray-600 rounded-xl border border-orange-300 focus:outline-none"
          />
          {errors.image && <p className="text-red-500">Image is required</p>}

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

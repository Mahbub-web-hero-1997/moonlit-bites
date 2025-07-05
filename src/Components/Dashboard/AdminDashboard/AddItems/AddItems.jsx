import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';


const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { setMenus } = useContext(AuthContext)
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
      console.log(res.data?.data);
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
          {...register('name')}
          required
          placeholder="Product Name"
          className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
        />
        <div className="flex w-full gap-2">
          <input
            type="number"
            {...register('price')}
            required
            placeholder="Price"
            className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-1/2"
          />
          <select
            {...register('category')}
            required
            className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-1/2 text-gray-500"
            id=""
          >
            <option disabled selected>
              Pick your favorite Simpson
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
          type="text"
          {...register('recipe')}
          required
          placeholder="Product Description"
          className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
        />
        <input
          type="file"
          {...register('image')}
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

export default AddItems;

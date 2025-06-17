import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageItem = () => {
  const item = useLoaderData();
  // console.log(item);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen md:h-[400px] md:w-1/2 mx-auto p-4 mt-18 shadow-lg overflow-hidden">
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
          value={item.name}
          required
          placeholder="Product Name"
          className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
        />
        <div className="flex w-full gap-2">
          <input
            type="number"
            value={item.price}
            {...register('price')}
            required
            placeholder="Price"
            className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-1/2"
          />
          <select
            {...register('category')}
            value={item.category}
            required
            className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-1/2 text-gray-500"
            id=""
          >
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Salad</option>
            <option>Pizza</option>
            <option>Popular</option>
            <option>Drinks</option>
            <option>Soup</option>
          </select>
        </div>

        <textarea
          type="text"
          {...register('recipe')}
          value={item.recipe}
          required
          placeholder="Product Description"
          className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
        />
        {/* <input
          type="file"
          {...register('image')}
          required
          className=" outline-none border-b-[1px] border-orange-500 px-2 py-4 bg-white text-gray-500"
        /> */}

        <input
          type="submit"
          value="Publish"
          className="btn bg-orange-500 text-white text-xl hover:bg-white hover:text-orange-500 hover:border-orange-500"
        />
      </form>
    </div>
  );
};

export default ManageItem;

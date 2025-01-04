import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
  console.log(item);
  const { image, name, recipe, price } = item;
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
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center w-full md:w-[95%] mx-auto px-4 py-3 mt-4 shadow-lg">
      <div className=" relative  p-2">
        <img className=" w-full " src={image} alt="" />
        <h1 className="text-xl text-orange-600 font-semibold my-2">{name}</h1>
        <p className="pr-8">{recipe}</p>
        <h4 className=" z-20 absolute right-8 top-3 text-md text-white text-center font-bold  bg-orange-600 w-[80px] h-[50px] rounded-full p-3">
          ${price}
        </h4>
      </div>
      {/* Form */}
      <div className="w-full mx-auto px-4 py-8 mt-18  overflow-hidden">
        <h1 className="text-2xl font-semibold text-center text-orange-500">
          Please Fill-Up Below Form!
        </h1>
        <hr className="w-2/3 md:w-1/2  mx-auto mt-3" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-4"
          action=""
        >
          <div className="md:flex  w-full gap-2">
            <input
              type="text"
              {...register('name')}
              required
              placeholder="Type Your Full Name"
              value={user?.displayName}
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-full md:w-[50%]"
            />
            <input
              type="number"
              {...register('phone')}
              required
              placeholder="+880"
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-full md:w-[50%]"
            />
          </div>         
          <textarea
            type="text"
            {...register('address')}
            
            required
            placeholder="Enter Your Delivery Address. "
            className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
          />    
          <input
            type="submit"
            value="Confirm-Order"
            className=" py-3 rounded-sm bg-orange-500 text-white text-xl hover:transition-all cursor-pointer focus:scale-[99%]"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;

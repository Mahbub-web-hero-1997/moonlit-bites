import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdShareLocation } from 'react-icons/md';

const Contact = () => {
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
    <>
      <Helmet>
        <title>moonlit || contact</title>
      </Helmet>
      <div className="w-full flex flex-col md:flex-row mt-4 md:mt-8 px-4">
        <div className="w-full md:w-1/3  px-4  shadow-lg overflow-hidden ">
          <h1 className="text-2xl font-semibold text-center text-orange-500">
            Drop us a line
          </h1>
          <hr className="w-2/3 md:w-1/2  mx-auto mt-3" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4 p-4"
            action=""
          >
            <input
              type="text"
              {...register('name')}
              required
              placeholder="Name"
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
            />
            <input
              type="email"
              {...register('email')}
              required
              placeholder="Example@gmail.com"
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
            />
            <input
              type="phone"
              {...register('phone')}
              required
              placeholder="+880"
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
            />

            <textarea
              type="text"
              {...register('recipe')}
              required
              placeholder="Product Description"
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
            />
            <input
              type="submit"
              value="Publish"
              className="btn bg-orange-500 text-white text-xl hover:bg-white hover:text-orange-500 hover:border-orange-500"
            />
          </form>
        </div>

        <div className=" w-full md:w-2/3 px-4 mt-8 md:mt-0 md:ml-8 ">
          <div className="px-20">
            <h1 className="text-orange-500 text-2xl font-semibold text-center">
              Contact Us
            </h1>
            <p className="text-md text-center">
              For Any Information, Feel Free to Contact Us Using Below Way!
            </p>
            <hr className="w-2/3 md:w-1/3  mx-auto my-3" />
          </div>
          <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-3 mt-6">
            <p className="w-3/2 mb-10 shadow-inner text-xl text-gray-500 p-4 flex items-center gap-3">
              <FaEnvelope className="text-2xl text-orange-500" />
              moonlitBite@gmail.com
            </p>
            <p className="w-3/2 mb-10 shadow-inner text-xl text-gray-500 p-4 flex items-center gap-3">
              <FaPhone className="text-2xl text-orange-500" />
              +8801644196242
            </p>
            <p className="w-3/2 mb-10 shadow-inner text-xl text-gray-500 p-4 flex items-center gap-3">
              <MdShareLocation className="text-4xl text-orange-500" />
              22 Baker Street, London, United Kingdom, W1U 3BW
            </p>

            <p className="w-3/2 mb-10 shadow-inner text-xl text-gray-500 p-4 flex flex-col md:flex-row md:items-center gap-3">
              <FaClock className="text-2xl text-orange-500" />
              <span>
                Sun-wed :- <span className="text-orange-500">9:00 am</span>
                {'to'}
                <span className="text-orange-500"> 5:00 pm</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

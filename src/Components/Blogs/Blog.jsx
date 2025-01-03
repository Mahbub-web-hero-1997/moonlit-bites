import React from 'react';

const Blog = ({ blog }) => {
  const { title, description, image } = blog;

  return (
    <div className="w-full md:w-2/3  mx-auto ">
      <div className="relative ">
        <img className="w-full md:h-[400px]  " src={image} alt="" />
        <div className="bg-black w-full md:h-[400px] absolute top-0 left-0 inset-0 opacity-30 hover:hidden"></div>
      </div>
      <div className="mt-6 mb-16 ">
        <h1 className='text-xl md:text-2xl font-semibold md:font-bold my-4'>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Blog;

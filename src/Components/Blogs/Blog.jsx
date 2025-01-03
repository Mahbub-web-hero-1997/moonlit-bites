import React from 'react';

const Blog = ({ blog }) => {
  const { title, description, image } = blog;

  return (
    <div>
      <div className="w-full md:w-2/3 mx-auto relative ">
        <img className="w-full md:h-[400px]  " src={image} alt="" />
        <div className="bg-black w-full md:h-[400px] absolute top-0 left-0 inset-0 opacity-30 hover:hidden"></div>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Blog;

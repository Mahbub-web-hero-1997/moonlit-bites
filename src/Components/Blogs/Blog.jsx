import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';

const Blog = ({ blog }) => {
  const { title, content, images } = blog;

  return (
    <div className="w-full max-w-md h-[550px] bg-white shadow-md rounded-xl overflow-hidden border border-orange-100 hover:shadow-xl transition duration-300 mx-auto">
      <div className="relative group h-[250px] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={images[0]}
          alt="Blog Cover"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[300px]">
        <h1 className="text-xl font-bold text-orange-600 flex items-center gap-2 mb-2">
          <FaRegNewspaper className="text-orange-500" />
          {title}
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {content.length > 180 ? content.slice(0, 180) + '...' : content}
        </p>
        <button className="mt-auto text-orange-600 hover:text-orange-800 font-semibold underline underline-offset-4 transition duration-200">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;

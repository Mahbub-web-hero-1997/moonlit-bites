import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineImage } from 'react-icons/md';

const Blog = ({ blog }) => {
  const { title, content, images } = blog;

  return (
    <div className="w-full md:w-2/3 mx-auto bg-white shadow-md rounded-xl overflow-hidden mb-10 border border-orange-100">
      <div className="relative group">
        <img className="w-full md:h-[400px] transition-transform duration-300 group-hover:scale-105" src={images[0]} alt="Blog Cover" />

      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold text-orange-600 flex items-center gap-2">
          <FaRegNewspaper /> {title}
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default Blog;

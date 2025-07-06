import React from 'react';
import { Helmet } from 'react-helmet-async';

import Blog from './Blog';
import UseBlogs from '../../CustomHook/UseBlogs';

const Blogs = () => {
  const { blogs, isLoading, error } = UseBlogs();

  if (isLoading)
    return <p className="text-center mt-8 text-orange-500 font-semibold animate-pulse">Loading blogs...</p>;

  if (error)
    return <p className="text-center text-red-500 mt-8 font-medium">Failed to load blogs.</p>;

  return (
    <>
      <Helmet>
        <title>moonlit || blogs</title>
      </Helmet>

      <div className="w-full  mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-8 border-b-4 border-orange-500 inline-block">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
            >
              <Blog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;

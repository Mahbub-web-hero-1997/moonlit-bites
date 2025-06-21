import React from 'react';
import { Helmet } from 'react-helmet-async';
import useBlogs from '../../CustomHook/useBlogs';
import Blog from './Blog';

const Blogs = () => {
  const { blogs, isLoading, error } = useBlogs();

  if (isLoading) return <p className="text-center mt-8">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">Failed to load blogs.</p>;

  return (
    <>
      <Helmet>
        <title>moonlit || blogs</title>
      </Helmet>
      <div className="w-full mx-auto">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;

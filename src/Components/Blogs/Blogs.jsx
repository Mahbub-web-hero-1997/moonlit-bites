import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import Blog from './Blog';

const Blogs = () => {
  const { blogs } = useContext(AuthContext)  
  
  return (
    <>
      <Helmet>
        <title>moonlit || blogs</title>
      </Helmet>
      <div className="flex justify-center items-center h-[calc(100vh-95px)]">
        {
          blogs.map(blog => {
            <Blog key={blog._id} blog={blog} />
          })
        }
      </div>
    </>
  );
};

export default Blogs;

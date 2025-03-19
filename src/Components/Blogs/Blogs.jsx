import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import Blog from './Blog';

const Blogs = () => {
  const { blogs } = useContext(AuthContext)  
  console.log(blogs);
  return (
    <>
      <Helmet>
        <title>moonlit || blogs</title>
      </Helmet>
      <div className="w-full mx-auto">
        {
          blogs.map(blog => 
            <Blog key={blog._id} blog={blog} />   
          )
        }
      </div>
    </>
  );
};

export default Blogs;

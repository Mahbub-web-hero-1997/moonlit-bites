import React from 'react';
import UseAxios from '../../../CustomHook/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever } from 'react-icons/md';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import Category from '../../Shared/Category';

const GetItems = () => {
  const axiosSecure = UseAxios();
  const { data: allItems=[] } = useQuery({
    queryKey: 'items',
    queryFn: async () => {
        const res = await axiosSecure.get('/menu');
        console.log(allItems[0]);
        
      return res.data;
    },
  });

  return (
      <div className=" w-full mx-auto bg-white p-5">
          {/* <Category/> */}
      <div className="flex justify-between items-center p-3 bg-[#614500] text-white">
        <p className="text-xl text-center">
          Total Users: <span className="text-orange-500">{allItems.length}</span>
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-orange-500 text-white text-md ">
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>              
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allItems.map((item, index) => (
              <tr key={item._id} className="shadow-md hover:shadow-none">
                <th>{index + 1}</th>
                <td><img className='w-16 h-16' src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button>
                    <HiMiniPencilSquare className="text-3xl text-orange-500" />
                  </button>
                </td>
                <td>
                  <button>
                    <MdDeleteForever className="text-3xl text-orange-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetItems;

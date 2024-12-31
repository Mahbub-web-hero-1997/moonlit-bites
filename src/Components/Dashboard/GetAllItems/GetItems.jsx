import React from 'react';
import UseAxios from '../../../CustomHook/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever } from 'react-icons/md';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import Category from '../../Shared/Category';
import { Link } from 'react-router-dom';

const GetItems = () => {
  const axiosSecure = UseAxios();
  const { data: allItems = [], refetch } = useQuery({
    queryKey: 'items',
    queryFn: async () => {
      const res = await axiosSecure.get('/menu');
      return res.data;
    },
  });

  const handleDeleteItem = (id) => {
     Swal.fire({
       title: 'Are you sure?',
       text: "You won't be able to revert this!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Yes, delete it!',
     }).then((result) => {
       if (result.isConfirmed) {
         axiosSecure.delete(`/menu/${id}`).then((res) => {
           refetch()
           if (res.data.modifiedCount > 0) {
             Swal.fire({
               title: 'Deleted!',
               text: 'Your file has been deleted.',
               icon: 'success',
             });
           }
         });
       }
     });
  };

  return (
    <div className=" w-full mx-auto bg-white p-5">
      {/* <Category/> */}
      <div className="flex justify-between items-center p-3 bg-[#614500] text-white">
        <p className="text-xl text-center">
          Total Users:{' '}
          <span className="text-orange-500">{allItems.length}</span>
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
                <td>
                  <img className="w-16 h-16" src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/dashboard/manage/${item._id}`}>
                    <button>
                      <HiMiniPencilSquare className="text-3xl text-orange-500" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDeleteItem(item._id)}>
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

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever } from 'react-icons/md';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
// import Category from '../../../Shared/Category';

const GetItems = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allItems = [], refetch, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await axiosPublic.get('/menus/all');
      return res.data?.data || [];
    },
  });

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action can't be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/menu/delete/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            refetch();
            Swal.fire('Deleted!', 'Item removed successfully.', 'success');
          }
        });
      }
    });
  };

  // if (isLoading) {
  //   return <p className="text-center py-8 text-orange-500 font-semibold">Loading items...</p>;
  // }

  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-5  ">
      {/* <Category /> */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#614500] text-white p-4 rounded-md my-4">
        <h2 className="text-lg md:text-xl font-semibold">Manage Menu Items</h2>
        <p>
          Total Items:{' '}
          <span className="bg-orange-500 px-3 py-1 rounded-full text-white font-semibold">
            {allItems.length}
          </span>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border text-sm md:text-base">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, index) => (
              <tr key={item._id} className="hover:bg-orange-50 transition-all">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-md object-cover border border-orange-100 shadow"
                  />
                </td>
                <td className="font-medium">{item.name}</td>
                <td>
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-xs font-medium">
                    {item.category}
                  </span>
                </td>
                <td className="font-semibold">${item.price.toFixed(2)}</td>
                <td>
                  <Link to={`/dashboard/manage/${item._id}`}>
                    <HiMiniPencilSquare className="text-2xl text-green-500 hover:text-green-600 cursor-pointer" />
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDeleteItem(item._id)}>
                    <MdDeleteForever className="text-3xl text-red-500 hover:text-red-600" />
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

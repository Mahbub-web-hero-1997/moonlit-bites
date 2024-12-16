import React from 'react';
import UseAxios from '../../../CustomHook/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    // Load All user Using Tanstack Query
  const axiosSecure = UseAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/user');
      return res.data;
    },
  });
    // User Deleted Function
    const handleDeleteUser = (id) => {
        console.log(id);
        
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
           
              axiosSecure.delete(`/user/${id}`)
                  .then(res => {
                     refetch()
                      if (res.data.deletedCount > 0) {
                        Swal.fire({
                          title: 'Deleted!',
                          text: 'User has been Successfully deleted.',
                          icon: 'success',
                        });
                      }
              })
          }
        });
        
    }
  return (
    <div className=" w-full mx-auto bg-white p-5">
      <div className="flex justify-between items-center p-3 bg-[#614500] text-white">
        <p className="text-xl text-center">
          Total Users: <span className="text-orange-500">{users.length}</span>
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-orange-500 text-white text-md ">
            <tr>
              <th>SL</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} className="shadow-md hover:shadow-none">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button>
                    <FaUsers className="text-2xl text-orange-500" />
                  </button>
                </td>
                <td>
                  <button>
                    <MdDeleteForever
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-3xl text-orange-500"
                    />
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

export default AllUsers;

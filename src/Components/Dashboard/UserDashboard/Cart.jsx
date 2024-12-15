import React from 'react';
import UseCart from '../../../CustomHook/UseCart';
import SectionHeading from '../../Shared/SectionHeading';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import UseAxios from '../../../CustomHook/UseAxios';

const Cart = () => {
  const [cart, refetch] = UseCart();
  // console.log(cart);
  const axiosSecure = UseAxios();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
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
      
        axiosSecure.delete(`/cart/${id}`)
          .then(res => {
            refetch()
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          }
          )
       
      }
    });
  };
  return (
    <>
      <SectionHeading subHeading={'My cart'} />
      <div className=" w-full md:w-[80%] mx-auto bg-white p-5 md:ml-60 ">
        <div className="flex justify-between items-center p-3 bg-[#614500] text-white">
          <p className="text-xl text-center">
            Total Selected Items:{' '}
            <span className="text-orange-500">{cart.length}</span>
          </p>
          <p className="text-xl text-center">
            Total Price: <span className="text-orange-500">{totalPrice}</span>
          </p>
          <Link
            className="btn text-xl text-white hover:text-gray-600 bg-[#b38000]  p-2 outline-none border-l-[1px]"
            to="#"
          >
            Pay-Now
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-orange-500 text-white text-md ">
              <tr>
                <th>SL</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id} className="shadow-md">
                  <th>{index+1}</th>
                  <td>
                    <img
                      className="w-[40px] h-[45px] rounded-full"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item._id)}>
                      <MdDeleteForever className="text-3xl text-orange-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;

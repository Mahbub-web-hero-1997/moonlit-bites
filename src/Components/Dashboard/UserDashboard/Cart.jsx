import React from 'react';
import UseCart from '../../../CustomHook/UseCart';
import SectionHeading from '../../Shared/SectionHeading';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0) 
    return (
    <>
      <SectionHeading subHeading={'My cart'} />
      <div className=" w-full md:w-[80%] mx-auto bg-white p-5 h-screen ">
        <div className="flex justify-between items-center p-3 bg-[#614500] text-white">
          <p className="text-xl text-center">
            Total Selected Items:{' '}
            <span className="text-orange-500">{cart.length}</span>{' '}
          </p>
          <p className="text-xl text-center">Total Price: { totalPrice}</p>
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
            <thead className="bg-orange-500 text-white text-md">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
              cart.map=item=>console.log(item)              
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;

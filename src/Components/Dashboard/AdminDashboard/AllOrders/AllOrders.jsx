import React from 'react';

import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import UseOrders from '../../../../CustomHook/UseOrders';
import UseAdminOrders from '../../../../CustomHook/UseAdminOrders';


const AllOrders = () => {
  const [orders, refetch] = UseAdminOrders()
  console.log(orders[0]);
  const totalAmount = orders.reduce((total, item) => total + item.totalPrice, 0)

  return (
    <>
      {/* <SectionHeading subHeading={'My cart'} /> */}
      <div className=" w-full mx-auto bg-white p-5">
        <div className="flex justify-between items-center p-3 bg-[#614500] text-white">
          <div className="md:flex w-full justify-around items-center ">
            <p className=" md:text-xl md:text-center ">
              Total orders:{' '}
              <span className="text-orange-500">{orders.length}</span>
            </p>
            <p className=" md:text-xl md:text-center md:ml-16">
              Sub-Total:
              <span className="text-orange-500"> $ {totalAmount}</span>
            </p>
          </div>
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
                <th className="text-center">Buy</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {orders.map((item, index) => (
                <tr key={item._id} className="shadow-md">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-[40px] h-[45px] rounded-full"
                      src={item?.productId.image}
                      alt=""
                    />
                  </td>
                  <td>{item?.productId.name}</td>
                  <td>{item?.productId.price}</td>
                  <td className="text-center">
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

export default AllOrders;
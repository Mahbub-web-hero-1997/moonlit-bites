import React, { useContext, useEffect, useState } from 'react';
import UseAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';
import UserOrder from './UserOrder';
import { loadStripe } from '@stripe/stripe-js';
import {
 
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const UserOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
  const totalPrice = orders.reduce(
    (total, item) => total + item.orderData.price,
    0
  );
  const message = (
    <>
      <p className="md:text-2xl font-semibold text-red-600 flex justify-center items-center w-full md:w-1/2 text-center mx-auto px-12 pt-32 md:pt-11 md:px-4">
        There Have No Active Order Right Now In Your Order Page.
      </p>
    </>
  );

  const axiosPublic = UseAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get(`http://localhost:5000/booking?email=${user?.email}`)
      .then(async (res) => {
        if (res.data) {
          setOrder(res.data);
        }
      });
  }, []);
  // Payment Method
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_ID);

  return (
    <>
      {orders.length === 0 ? (
        message
      ) : (
        <div className=" w-full mx-auto bg-white p-5 ">
          <div className=" flex flex-col md:flex-row justify-between md:items-center p-3 bg-[#614500] text-white">
            <p className="text-xl md:text-center">
              Total Ordered Items:{' '}
              <span className="text-orange-500">{orders.length}</span>
            </p>
            <p className="text-xl md:text-center">
              Total Price: <span className="text-orange-500">{totalPrice}</span>
            </p>
            {/* <Link
                className="btn text-xl text-white hover:text-gray-600 bg-[#b38000]  p-2 outline-none border-l-[1px]"
                to="#"
              >
                Pay-Now
              </Link> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn text-orange-600"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Pay-Now
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <p className="text-gray-600 mb-2 font-semibold">Payment Info</p>
                <p className="text-gray-600 mb-6 font-semibold">
                  Sub Total :{' '}
                  <span className="text-orange-600">${totalPrice}</span>
                </p>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-orange-600 text-white">
                    ✕
                  </button>
                </form>

                <Elements stripe={stripePromise}>
                  <PaymentForm />
                </Elements>
              </div>
            </dialog>
          </div>
          <div className="overflow-x-scroll h-screen md:h-auto">
            <table className="table rounded-none table-zebra overflow-x-scroll md:overflow-hidden ">
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
              {orders.map((order, index) => (
                <UserOrder key={order._id} order={order} index={index} />
              ))}
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default UserOrders;

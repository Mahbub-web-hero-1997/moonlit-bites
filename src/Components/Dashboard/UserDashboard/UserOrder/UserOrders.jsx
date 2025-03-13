import React, { useContext, useEffect, useState } from 'react';
import UseAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';
import UserOrder from './UserOrder';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const UserOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [isPaid, setIsPaid] = useState(false); 
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get(`http://localhost:5000/booking?email=${user?.email}`)
      .then((res) => {
        if (res.data) {
          setOrders(res.data);
        }
      });
  }, []);

  const totalPrice = orders.reduce(
    (total, item) => total + item.orderData.price,
    0
  );

  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_ID);

  return (
    <>
      {orders.length === 0 ? (
        <p className="text-xl font-semibold text-orange-500 text-center">
          Loading....
        </p>
      ) : (
        <div className="w-full mx-auto bg-white p-5">
          <div className="flex flex-col md:flex-row justify-between md:items-center p-3 bg-[#614500] text-white">
            <p className="text-xl">
              Total Ordered Items:{' '}
              <span className="text-orange-500">{orders.length}</span>
            </p>
            <p className="text-xl">
              Total Price:{' '}
              <span className="text-orange-500">${totalPrice}</span>
            </p>

          
            <button
              className={`btn text-orange-600 ${
                isPaid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => document.getElementById('my_modal_3').showModal()}
              disabled={isPaid}
            >
              {isPaid ? 'Paid' : 'Pay-Now'}
            </button>
          </div>

        
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <p className="text-gray-600 mb-2 font-semibold">Payment Info</p>
              <p className="text-gray-600 mb-6 font-semibold">
                Sub Total:{' '}
                <span className="text-orange-600">${totalPrice}</span>
              </p>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-orange-600 text-white">
                  ✕
                </button>
              </form>

            
              <Elements stripe={stripePromise}>
                <PaymentForm
                  totalPrice={totalPrice}
                  closeModal={closeModal}
                  setIsPaid={setIsPaid}
                />
              </Elements>
            </div>
          </dialog>

          {/* Order List Table */}
          <div className="overflow-x-scroll h-screen md:h-auto">
            <table className="table rounded-none table-zebra">
              <thead className="bg-orange-500 text-white text-md">
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

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
  const { image, name, recipe, price, _id } = item.data;
  const location = useLocation();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const quantity = location.state?.quantity || 1;
  const totalPrice = price * quantity;

  const orderData = { productId: _id, quantity };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderInfo = { data, orderData };
    axiosPublic.post('/order/create', orderInfo).then((res) => {
      if (res.data?.data?._id || res.data?.insertedId) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Order Booked Successfully!',
          showConfirmButton: false,
          timer: 2000,
        });

        axiosPublic.delete(`/cart/remove/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            console.log("Item removed from cart");
          }
        });

        reset();
        navigate('/menu');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to place order',
          text: 'Please try again.',
        });
      }
    }).catch(err => {
      console.error("Order failed:", err);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Something went wrong. Please try again later.',
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-100 to-white flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-lg rounded-3xl shadow-lg border border-orange-200 p-6 sm:p-10 space-y-8">
        {/* Product Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={image} alt={name} className="w-full sm:w-1/2 h-64 object-cover rounded-xl shadow-md" />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-orange-600">{name}</h2>
            <p className="text-gray-600 mt-2">{recipe}</p>
            <div className="mt-4 inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow">
              Total: ${totalPrice}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h3 className="text-center text-2xl font-semibold text-orange-500 mb-4">Enter Delivery Details</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="number"
                {...register('phone')}
                required
                placeholder="+880..."
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
              <textarea
                {...register('address')}
                required
                placeholder="Enter full delivery address"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition-all duration-200 shadow-lg active:scale-95"
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

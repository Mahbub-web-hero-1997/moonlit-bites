import React from 'react';
import UseCart from '../../../CustomHook/UseCart';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import { FaCartArrowDown } from 'react-icons/fa6';
import useAxiosPublic from '../../../CustomHook/UseAxiosPublic';

const Cart = () => {
  const [cart, refetch] = UseCart();
  const axiosPublic = useAxiosPublic();

  const totalPrice = cart.reduce((total, item) => {
    const price = item.productId?.price || 0;
    return total + price * item.quantity;
  }, 0);

  const handleDelete = (productId) => {
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
        axiosPublic.delete(`/cart/remove/${productId}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Item has been removed from cart.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handleBuyNow = (id) => {
    // Implement buy now functionality here if needed
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-5 rounded-lg mb-6 shadow-md">
        <div className="text-center md:text-left space-y-2">
          <p className="text-lg font-semibold">
            Total Selected Items: <span className="text-yellow-700">{cart.length}</span>
          </p>
          <p className="text-lg font-semibold">
            Total Price: <span className="text-yellow-700">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
        {/* Uncomment if you want Pay Now button */}
        {/* <Link
          disabled={!cart.length}
          to="/dashboard/payment"
          className={`mt-4 md:mt-0 px-6 py-2 rounded-md font-semibold text-white
          ${cart.length ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-300 cursor-not-allowed'}`}
        >
          Pay Now
        </Link> */}
      </header>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-orange-500 text-white uppercase text-sm md:text-md font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Item Image</th>
              <th className="px-6 py-3 text-left">Item Name</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-center">Delete</th>
              <th className="px-6 py-3 text-center">Buy</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {cart.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500 italic">
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr
                  key={item.productId?._id}
                  className="hover:bg-yellow-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                      src={item.productId?.image}
                      alt={item.productId?.name || 'Item Image'}
                      loading="lazy"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">
                    {item.productId?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-yellow-600 font-semibold">
                    ${item.productId?.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => handleDelete(item.productId._id)}
                      aria-label="Delete Item"
                      className="text-red-600 hover:text-red-800 transition cursor-pointer"
                    >
                      <MdDeleteForever className="text-3xl" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link
                      to={`/checkout/${item.cartId}`}
                      onClick={() => handleBuyNow(item)}
                      className="text-yellow-600 hover:text-yellow-800 transition text-2xl"
                      aria-label="Buy Now"
                    >
                      <FaCartArrowDown />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

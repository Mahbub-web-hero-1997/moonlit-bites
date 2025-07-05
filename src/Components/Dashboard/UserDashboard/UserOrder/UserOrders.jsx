import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseOrders from '../../../../CustomHook/UseOrders';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { MdDelete } from "react-icons/md";
const UserOrders = () => {
  const [orders, refetch] = UseOrders();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handlePayment = (order) => {
    navigate(`/dashboard/paymentForm/${order._id}`);

  };
  // Handle Delete Order
  const handleDelete = async (orderId) => {
    try {
      const res = await axiosPublic.delete(`/order/delete/${orderId}`);
      if (res.data.deletedCount > 0) {
        Swal.fire('Deleted!', 'Your order has been deleted.', 'success');
        await refetch();
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to delete the order.', 'error');
    }
  }

  const handleCancel = async (orderId) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e74c3c',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, cancel it!',
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosPublic.patch(`/order/cancel/${orderId}`);
        if (res.data.modifiedCount > 0) {
          Swal.fire('Cancelled!', 'Your order has been cancelled.', 'success');
          await refetch();
        }
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to cancel the order.', 'error');
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-600 text-center mb-6 border-b pb-3">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You have not placed any orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-orange-500 text-white text-sm md:text-base uppercase">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order, index) => (
                console.log(order),
                <tr
                  key={order._id}
                  className="hover:bg-yellow-50 transition-all duration-150"
                >
                  <td className="px-4 py-3 font-medium text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img
                      src={order.productId?.image}
                      alt={order.productId?.image}
                      className="w-12 h-12 rounded-md object-cover border"
                    />
                    <span className="font-semibold text-gray-800">
                      {order.productId?.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">${order.productId?.price?.toFixed(2)}</td>
                  <td className="px-4 py-3 text-gray-600">{order.quantity}</td>
                  <td className="px-4 py-3 text-orange-600 font-bold">
                    ${(order.totalPrice || 0).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full font-semibold ${order.status === 'confirmed'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'cancelled'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                        }`}
                    >
                      {order.status || 'pending'}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    {order.status === 'pending' ? (
                      <>
                        <button
                          onClick={() => handlePayment(order)}
                          className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
                        >
                          Make Payment
                        </button>
                        <button
                          onClick={() => handleCancel(order._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                      >
                        <MdDelete size={20} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserOrders;

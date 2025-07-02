import React from 'react';

const paymentHistory = [
  {
    id: 1,
    transactionId: 'txn_123456',
    amount: 45.99,
    date: '2025-07-01',
    method: 'card',
    status: 'succeeded',
  },
  {
    id: 2,
    transactionId: 'txn_789101',
    amount: 89.5,
    date: '2025-06-28',
    method: 'card',
    status: 'succeeded',
  },
];

const UserPayment = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-600 text-center mb-6 border-b pb-3">
        Payment History
      </h2>

      {paymentHistory.length === 0 ? (
        <p className="text-center text-gray-500">No payment history found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-orange-500 text-white text-sm md:text-base uppercase">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Transaction ID</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Payment Method</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paymentHistory.map((payment, index) => (
                <tr key={payment.id} className="hover:bg-yellow-50 transition-all duration-150">
                  <td className="px-4 py-3 font-medium text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold">{payment.transactionId}</td>
                  <td className="px-4 py-3 text-orange-600 font-bold">${payment.amount.toFixed(2)}</td>
                  <td className="px-4 py-3 capitalize text-gray-600">{payment.method}</td>
                  <td className="px-4 py-3 text-gray-600">{payment.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full font-semibold text-sm ${payment.status === 'succeeded'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                        }`}
                    >
                      {payment.status}
                    </span>
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

export default UserPayment;

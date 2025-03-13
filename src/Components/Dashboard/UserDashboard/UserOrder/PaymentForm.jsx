import React, { useContext, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import UseAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';

const PaymentForm = ({ totalPrice, closeModal, setIsPaid }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = UseAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    try {
    
      const { data } = await axiosPublic.post('/create-payment-intent', {
        price: totalPrice,
      });

     
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card,
            billing_details: { name: user?.displayName || 'Customer' },
          },
        }
      );

      if (error) {
        setError(error.message);
        console.log(error.message);
      } else if (paymentIntent.status === 'succeeded') {
     
        const paymentDetails = {
          customer: user?.displayName,
          email: user?.email,
          amount: totalPrice,
          transactionId: paymentIntent.id,
          paymentMethod: paymentIntent.payment_method_types[0],
          status: paymentIntent.status,
          date:new Date(),
          cartId: cart.map(item=>item._id),
          menuItemId:cart.map(item=>item.cartId)
        };

        await axiosPublic.post('/payments', { payment:paymentDetails });

        setIsPaid(true);
        closeModal();
      }
    } catch (err) {
      setError('Payment failed. Try again.');
      console.log(err.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border p-3 rounded-md mb-4" />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn bg-orange-600 text-white w-full mt-4"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default PaymentForm;

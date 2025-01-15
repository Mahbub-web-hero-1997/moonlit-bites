import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseAxios from '../../../../CustomHook/UseAxios';

import { useContext } from 'react';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';
import UseAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const [error, setError] = useState('');
  const [orders, setOrder] = useState([]);
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState('');
  const navigate = useNavigate();

  const stripe = useStripe();
  const axiosSecure = UseAxios();
  const elements = useElements();
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
  const totalPrice = orders.reduce(
    (total, item) => total + item.orderData.price,
    0
  );
  useEffect(() => {
    axiosSecure
      .post(`/create-payment-intent`, { price: totalPrice })
      .then((res) => {
        if (res.data.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      });
  }, [axiosSecure, totalPrice]);
  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setError(error?.message);
    } else {
      console.log({ paymentMethod });

      setError('');
    }
    //   Payment Confirmation

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });
    if (confirmError) {
      console.log({confirmError});      
    }
    else {
      console.log({ paymentIntent });
      if (paymentIntent.status === "succeeded") {
      //  Swal.fire({
      //    position: 'top-end',
      //    icon: 'success',
      //    title: 'Your work has been saved',
      //    showConfirmButton: false,
      //    timer: 1500,
        //  });
        const paymentDetails = {
          customer: user?.displayName,
          email:user?.email,
          amount: totalPrice,
          transactionId: paymentIntent.id,
          paymentMethod: paymentIntent.payment_method_types[0],
          status: paymentIntent.status,
        };
        console.log(paymentDetails);        
        axiosSecure.post("/payments", paymentDetails )
          .then(res => {
          console.log(res.data);          
        })
        // console.log({Message:"Payment Success", TransactionId:paymentIntent.id});
        
      }
      
    }
  };
  return (
    <form onSubmit={handlePayment}>
      <CardElement
        className="border-b-[1px] border-orange-500 outline-none p-3"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className="text-red-500">{error}</p>
      <button
        type="submit"
        disabled={!stripe}
        className=" mt-6 rounded-md  text-center text-white bg-orange-600 font-semibold px-6 py-3 block active:scale-95"
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;

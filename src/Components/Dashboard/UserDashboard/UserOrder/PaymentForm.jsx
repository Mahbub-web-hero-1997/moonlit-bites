import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useState } from 'react';

const PaymentForm = () => {
     const [error, setError]=useState('')
      const stripe = useStripe();
      const elements = useElements();
    const handlePayment = async (event) => {
         event.preventDefault();
        if (!stripe || !elements) {
              return
        }
        const card = elements.getElement(CardElement)
        if (!card) {
            return
        }
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
           setError(error?.message)            
        }
        else {      
            setError('')
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
            <p className='text-red-500'>{ error}</p>
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
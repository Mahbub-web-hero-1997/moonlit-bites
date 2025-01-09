import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const UserPayment = () => {
    const stripePromise = loadStripe(`${import.meta.env.VIT_PAYMENT_PK_ID}`);
    console.log(stripePromise);
    
    return (
      <div className='w-full md:w-1/3 mx-auto h-full md:h-[350px] shadow-lg'>
        <Elements stripe={stripePromise}>
          <CardElement
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
        </Elements>
      </div>
    );
};

export default UserPayment;
import React, { useContext, useEffect, useState } from 'react';
import UseAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { AuthContext } from '../../../../ContextAPI/AuthProvider';
import UserOrder from './UserOrder';

const UserOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
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
      .then( async(res) => {
        if (res.data) {
          setOrder(res.data);
        }
      });
  }, []);

    return <>{orders.length === 0 ? message : <div>
    
        {
        orders.map(order => <UserOrder key={order._id} order={ order} />
            )
       }
    
    
    </div>}</>;
};

export default UserOrders;

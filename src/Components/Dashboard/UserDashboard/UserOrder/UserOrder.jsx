import React from 'react';
import AddItems from '../../AddItems/AddItems';

const UserOrder = ({ order }) => {
    console.log(order)
    const { name, price, image } = order.orderData;  
  
    
    return (
        <div>
            <h1>{ name}</h1>
        </div>
    );
};

export default UserOrder;
import React from 'react';
import AddItems from '../../AddItems/AddItems';

const UserOrder = ({ order, index }) => {
  console.log(order);
  const { name, price, image } = order.orderData;

    return (
    <>
    
    <tr  className="shadow-md">
      <th>{index + 1}</th>
      <td>
        <img
          className="w-[100px] h-[50px]"
          src={image}
          alt=""
        />
      </td>
      <td className=''>{name}</td>
      <td className=''>{price}</td>
      <td className=''>
        <button >               
              Pending For Payment.    
        </button>
      </td>
            </tr>
        </>
  );
};

export default UserOrder;
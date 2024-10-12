import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ menu }) => {
    const { category, name, image, price, recipe } = menu;
    
    return (
        <div className="card bg-base-100 w-96 h-[450px] rounded-none shadow-xl mx-auto">
  <figure>
                <img
                    className='w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}            
    </h2>
                <p>{ recipe}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Menu;
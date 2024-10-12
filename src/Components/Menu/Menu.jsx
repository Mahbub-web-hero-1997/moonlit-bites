import React from 'react';

const Menu = ({ menu }) => {
    const { category, name, image, price } = menu;
    
    return (
        <div>
            <img src={image} alt="" />
         
        </div>
    );
};

export default Menu;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const item = useLoaderData()  
    
    return (
        <div>
            <h1>This is Checkout Form</h1>
        </div>
    );
};

export default Checkout;
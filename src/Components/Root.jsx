import React from 'react';
import Header from './Shared/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Header />
            {<Outlet/>}
        </div>
    );
};

export default Root;
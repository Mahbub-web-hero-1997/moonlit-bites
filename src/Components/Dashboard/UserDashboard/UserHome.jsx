import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthProvider';
import {
    FaShoppingCart,
    FaMoneyCheckAlt,
    FaClipboardList,
    FaUserCircle,
} from 'react-icons/fa';
import UserOrders from '../UserDashboard/UserOrder/UserOrders';
import Cart from '../UserDashboard/Cart';
import UserPayment from '../UserDashboard/UserPayment';
import MyReviews from './Reviews/MyReviews';

const UserHome = () => {
    const { user } = useContext(AuthContext);
    const isAdmin = user.role === 'admin'
    const [activeSection, setActiveSection] = useState('orders');

    const sections = [
        {
            id: 'orders',
            icon: <FaClipboardList className="text-2xl" />,
            title: 'My Orders',
        },
        {
            id: 'cart',
            icon: <FaShoppingCart className="text-2xl" />,
            title: 'My Cart',
        },
        {
            id: 'payment',
            icon: <FaMoneyCheckAlt className="text-2xl" />,
            title: 'Payments',
        },
        {
            id: 'review',
            icon: <FaUserCircle className="text-2xl" />,
            title: 'My Reviews',
        },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'orders':
                return <UserOrders />;
            case 'cart':
                return <Cart />;
            case 'payment':
                return <UserPayment />;
            case 'review':
                return <MyReviews />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4  ">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-6 md:p-8 rounded-xl shadow-lg mb-8 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Welcome, {user?.fullName || 'Valued User'}!
                </h1>
                <p className="mt-2 text-sm md:text-base">Manage everything from here at a glance.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg border transition-all duration-300 font-semibold text-sm md:text-base shadow-sm cursor-pointer
              ${activeSection === section.id
                                ? 'bg-orange-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-orange-100'
                            }`}
                    >
                        {section.icon}
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Dynamic Content Section */}
            <div className="transition-all duration-300">{renderSection()}</div>
        </div>
    );
};

export default UserHome;

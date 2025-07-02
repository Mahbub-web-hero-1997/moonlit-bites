import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthProvider';
import { FaShoppingCart, FaMoneyCheckAlt, FaClipboardList, FaUserCircle } from 'react-icons/fa';
import UserOrders from '../UserDashboard/UserOrder/UserOrders';
import Cart from '../UserDashboard/Cart';
import UserPayment from '../UserDashboard/UserPayment';
import UserReview from './Reviews/UserReview';
import MyReviews from './Reviews/MyReviews';

const UserHome = () => {
    const { user } = useContext(AuthContext);
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="w-full md:w-4/5 mx-auto px-6 py-10">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Welcome Back, {user?.displayName || 'User'}!
                </h2>
                <p className="text-sm md:text-base">
                    Access all your account activities and manage orders easily.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <button
                    onClick={() => toggleSection('orders')}
                    className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transition duration-300 group"
                >
                    <FaClipboardList className="text-3xl text-orange-500 group-hover:scale-110 transition" />
                    <h4 className="mt-4 font-bold text-lg">My Orders</h4>
                    <p className="text-sm text-gray-500">Track your recent orders</p>
                </button>

                <button
                    onClick={() => toggleSection('cart')}
                    className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transition duration-300 group"
                >
                    <FaShoppingCart className="text-3xl text-orange-500 group-hover:scale-110 transition" />
                    <h4 className="mt-4 font-bold text-lg">My Cart</h4>
                    <p className="text-sm text-gray-500">View or manage cart items</p>
                </button>

                <button
                    onClick={() => toggleSection('payment')}
                    className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transition duration-300 group"
                >
                    <FaMoneyCheckAlt className="text-3xl text-orange-500 group-hover:scale-110 transition" />
                    <h4 className="mt-4 font-bold text-lg">Payments</h4>
                    <p className="text-sm text-gray-500">See your payment history</p>
                </button>

                <button
                    onClick={() => toggleSection('review')}
                    className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transition duration-300 group"
                >
                    <FaUserCircle className="text-3xl text-orange-500 group-hover:scale-110 transition" />
                    <h4 className="mt-4 font-bold text-lg">My Reviews</h4>
                    <p className="text-sm text-gray-500">Give feedback on purchases</p>
                </button>
            </div>

            {/* Section Output Below */}
            <div className="mt-10">
                {activeSection === 'orders' && <UserOrders />}
                {activeSection === 'cart' && <Cart />}
                {activeSection === 'payment' && <UserPayment />}
                {activeSection === 'review' && <MyReviews />}
            </div>
        </div>
    );
};

export default UserHome;

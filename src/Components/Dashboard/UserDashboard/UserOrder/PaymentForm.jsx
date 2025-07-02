import React from 'react';

const PaymentForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300">
            <div className="bg-white shadow-xl p-10 rounded-lg max-w-xl w-full text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-orange-600">Coming Soon</h1>
                <p className="text-gray-600 text-lg">
                    We’re working hard to launch our new website. Stay tuned for something amazing!
                </p>

                <div className="flex justify-center gap-4 text-center text-white text-sm md:text-base">
                    {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
                        <div key={i} className="bg-orange-500 rounded-md px-4 py-3">
                            <div className="text-2xl font-bold">00</div>
                            <div>{label}</div>
                        </div>
                    ))}
                </div>

                <form className="mt-6 space-y-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-md border border-orange-300 focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition-all"
                    >
                        Notify Me
                    </button>
                </form>

                <p className="text-sm text-gray-400 mt-4">© 2025 Moonlit Bites. All rights reserved.</p>
            </div>
        </div>
    );
};

export default PaymentForm;
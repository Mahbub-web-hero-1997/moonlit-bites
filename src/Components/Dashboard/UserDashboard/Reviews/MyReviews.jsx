import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';
import { FaStar } from 'react-icons/fa';

const MyReviews = () => {
    const axiosPublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosPublic.get('/reviews/myReviews').then((res) => {
            setReviews(res.data?.data || []);
        });
    }, [axiosPublic]);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">My Reviews</h2>

            {reviews.length === 0 ? (
                <p className="text-center text-gray-500">You haven’t submitted any reviews yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-yellow-500 flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                                        />
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-orange-600 mb-1">{review.title}</h3>
                            <p className="text-gray-600 text-sm">{review.details}</p>
                            <p className="text-right mt-4 text-sm text-gray-400">
                                {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyReviews;

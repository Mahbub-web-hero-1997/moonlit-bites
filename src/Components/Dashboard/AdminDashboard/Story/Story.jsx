import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../CustomHook/UseAxiosPublic';

const Story = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axiosPublic.post("/story/create", data).then(res => {
            if (res.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your story has been published successfully.',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
                reset();
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: res.data.message || 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            }
        })


    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-xl transition-all duration-300 hover:scale-[1.01]">
                <h1 className="text-3xl font-bold text-orange-500 text-center mb-6 drop-shadow-sm">
                    Add New Story
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <input
                        type="text"
                        {...register('title')}
                        required
                        placeholder="title"
                        className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />

                    <div className="flex gap-4">
                        <input
                            type="number"
                            {...register('phone')}
                            required
                            placeholder="+8801XXXXXXXX"
                            className="w-1/2 p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />
                        <input
                            type="text"
                            {...register('email')}
                            required
                            placeholder="example@gmail.com"
                            className="w-1/2 p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />

                    </div>
                    <textarea
                        {...register('details')}
                        required
                        placeholder=" Write your story here..."
                        className="w-full p-4 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />
                    <input
                        type="submit"
                        value="Publish"
                        className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 hover:border hover:border-orange-500 transition-all duration-300 shadow-md cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default Story;

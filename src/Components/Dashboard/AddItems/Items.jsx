import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Items = () => {
    const {
        register,
        handleSubmit,
        reset,
    
        formState: { errors },
    } = useForm();
     const onSubmit = (data) => {
        createUser(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            
            updateUserProfile(data.name, data.photoUrl)
              .then(()=> {
                const userInfo = {
                  name: data.name,
                  email: data.email,
                }
                axiosPublic.post("/user", userInfo)
                  .then(res => {
                    if (res.data.insertedId) {
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Account Successfully Created',
                        showConfirmButton: false,
                        timer: 1500,
                      });
                  }
                })
                reset()    
            
              navigate("/")  
            })
          })
          .catch((err) => {
            console.error(err.message);
          });
      };
    
    return (
      <div className="w-full h-screen md:h-[500px] md:w-1/2 mx-auto p-4 mt-18 shadow-lg overflow-hidden">
        <h1 className="text-2xl font-semibold text-center">Add Product</h1>
        <hr className="w-2/3 md:w-1/2  mx-auto mt-3 bg-orange-500" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-4"
          action=""
        >
          <input
            type="text"
            {...register('productName')}
            placeholder="Product Name"
            className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
          />
          <div className="flex w-full gap-2">
            <input
              type="number"
              {...register('Price')}
              placeholder="Price"
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-1/2"
            />
            <input
              type="text"
              {...register('Category')}
              placeholder="Category"
              className="border-b-[1px] border-orange-500 outline-none px-2 py-4 w-1/2"
            />
          </div>

          <textarea
            type="text"
            {...register('productTitle')}
            placeholder="Product Title"
            className="border-b-[1px] border-orange-500 outline-none px-2 py-4"
          />

          <input
            type="submit"
            value="Publish"
            className="btn bg-orange-500 text-white text-xl hover:bg-white hover:text-orange-500 hover:border-orange-500"
          />
        </form>
      </div>
    );
};

export default Items;
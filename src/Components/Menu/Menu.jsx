import React, { useContext, useEffect } from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import Swal from 'sweetalert2';
import UseAxios from '../../CustomHook/UseAxios';
import UseCart from '../../CustomHook/UseCart';
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic';
import axios from 'axios';

const Menu = ({ menu }) => {
  const { name, image, price, recipe, _id } = menu;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // const axiosSecure = UseAxios();
  // const axiosPublic = UseAxiosPublic();
  const [, refetch] = UseCart();
  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartData = {
        productId: _id,
        quantity: 1,
      };

      axios
        .post('http://localhost:5000/api/v1/cart/addToCart', cartData, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully added to cart',
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        })
        .catch((err) => {
          console.error('Error adding to cart:', err);
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: err?.response?.data?.message || 'Failed to add to cart.',
          });
        });
    } else {
      Swal.fire({
        title: "You're not logged in.",
        text: 'Please log in to add this item to your cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  // Handle Checkout Function

  const handleBuyNow = (id) => {
    // console.log(id);
  };

  return (
    <div className="card bg-base-100 w-full h-[500px] rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none  shadow-xl mx-auto  ">
      <figure className="relative ">
        <img
          className="w-full h-[200px] rounded-tl-md rounded-tr-md "
          src={image}
          alt="image"
        />
      </figure>
      <div className="absolute w-full h-[200px] md:h-[200px] bg-black hover:opacity-36 transition-all duration-300 opacity-60 top-0 left-0 rounded-tl-md rounded-tr-md mb-1"></div>
      <h4 className=" absolute right-3 top-3 text-md text-white text-center font-bold  bg-orange-500 w-[80px] h-[50px] rounded-full p-3">
        ${price}
      </h4>
      <div className=" card-body w-[95%] mx-auto ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe.slice(0, 200)}</p>
        <div className="card-actions justify-between ">
          <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold ">
            <Link onClick={handleAddToCart} className="">
              Add to cart
            </Link>
          </div>

          <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov">
            <Link to={`/checkout/${_id}`} onClick={() => handleBuyNow(_id)}>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

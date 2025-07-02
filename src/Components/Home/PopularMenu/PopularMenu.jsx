import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../ContextAPI/AuthProvider';
import UseAxios from '../../../CustomHook/UseAxios';
import UseCart from '../../../CustomHook/UseCart';
import axios from 'axios';

const PopularMenu = ({ menu }) => {
  const { name, image, price, recipe, _id } = menu;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxios();
  const [, refetch] = UseCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartData = {
        productId: _id,
        quantity: 1,
      };

      axios
        .post('http://localhost:5000/api/v1/cart/addToCart', cartData, {
          withCredentials: true,
        })
        .then((res) => {
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
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
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
  const handleBuyNow = (id) => {

  };

  return (
    <div className="relative group card bg-white w-96 h-[500px] rounded-2xl shadow-2xl mx-auto overflow-hidden transform hover:-translate-y-4 hover:shadow-2xl transition duration-500">
      {/* Image */}
      <figure className="relative overflow-hidden rounded-t-2xl h-64">
        <img
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition duration-500 rounded-t-2xl"></div>
        <span className="absolute top-4 right-4 bg-orange-500 text-white font-bold text-lg px-5 py-2 rounded-full shadow-lg">
          ${price.toFixed(2)}
        </span>
      </figure>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-[calc(500px-16rem)]">
        <div>
          <h2 className="text-2xl font-extrabold text-orange-600 mb-2 truncate">{name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{recipe}</p>
        </div>

        <div className="flex justify-between mt-6 gap-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-orange-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none transition duration-300"
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>

          <Link
            to={`/checkout/${_id}`}
            onClick={() => handleBuyNow(_id)}
            className="flex-1 border border-orange-500 text-orange-500 font-semibold py-3 rounded-lg text-center shadow-md hover:bg-orange-500 hover:text-white transition duration-300"
            aria-label={`Buy ${name} now`}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;

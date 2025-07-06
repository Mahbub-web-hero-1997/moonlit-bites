import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import Swal from 'sweetalert2';
import UseCart from '../../CustomHook/UseCart';
import axios from 'axios';

const Menu = ({ menu }) => {
  const { name, image, price, recipe, _id } = menu;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
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
    // Placeholder for buy now action
  };

  return (
    <div className="card bg-white w-[98%] max-w-sm rounded-tl-md rounded-tr-md shadow-xl mx-auto hover:shadow-orange-100 transition-shadow duration-500 cursor-pointer ">
      <figure className="relative overflow-hidden rounded-tl-md rounded-tr-md">
        <img
          className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-500"
          src={image}
          alt={name}
        />
        {/* <div className="absolute inset- bg-black bg-opacity-90 hover:bg-opacity-30 transition-opacity duration-500 rounded-tl-md rounded-tr-md"></div> */}
        <span className="absolute top-3 right-3 bg-gradient-to-tr from-orange-500 to-yellow-400 text-white font-extrabold text-lg px-5 py-2 rounded-full shadow-lg drop-shadow-lg">
          ${price}
        </span>
      </figure>

      <div className="card-body p-6">
        <h2 className="card-title text-xl font-extrabold mb-2">{name}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {recipe.length > 200 ? recipe.slice(0, 200) + '...' : recipe}
        </p>
        <div className="card-actions justify-between">
          <button
            onClick={handleAddToCart}
            className="inline-block bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg px-3 py-2 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-md hover:shadow-orange-400"
          >
            Add to Cart
          </button>
          <Link
            to={`/checkout/${_id}`}
            onClick={() => handleBuyNow(_id)}
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg px-6 py-3 shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

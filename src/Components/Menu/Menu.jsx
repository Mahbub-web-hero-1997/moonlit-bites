import React, { useContext, useEffect } from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import Swal from 'sweetalert2';
import UseAxios from '../../CustomHook/UseAxios';
import UseCart from '../../CustomHook/UseCart';

const Menu = ({ menu }) => {
  const { name, image, price, recipe, _id } = menu;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxios();
  const [, refetch] = UseCart();
  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartData = {
        cartId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post('/cart', cartData).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully added',
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are't logged in.",
        text: 'Please loge in for add to cart this item',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'LogeIn',
      }).then((result) => {
        if (result.isConfirmed) {
          //  navigate to Login Page
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
          className="w-full h-full rounded-tl-md rounded-tr-md "
          src={image}
          alt="image"
        />
      </figure>
      <div className="absolute w-full h-[250px] md:h-[272px] bg-black hover:opacity-45 transition-all duration-300 opacity-60 top-0 left-0 rounded-tl-md rounded-tr-md mb-1"></div>
      <h4 className=" z-20 absolute right-3 top-3 text-md text-white text-center font-bold  bg-orange-500 w-[80px] h-[50px] rounded-full p-3">
        ${price}
      </h4>
      <div className=" card-body mb-2 md:hover:-translate-y-10  transition-all duration-700 z-30 bg-white w-[95%] mx-auto rounded-tr-3xl rounded-tl-3xl">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-between">
          <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov">
            <Link onClick={handleAddToCart} className="">
              Add to cart
            </Link>
          </div>

          <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov">
            <button
              onClick={() => document.getElementById('my_modal_4').showModal()}
            >
              <Link onClick={() => handleBuyNow(_id)}>Buy Now</Link>
            </button>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_4"
              className=" w-full md:w-1/2  bg-transparent"
            >
              <div className="modal-box w-full md:w-4/2 h-[400px] md:h-[500px] max-w-5xl">
                <h3 className="font-bold ">
                  If you are interested in buying the{' '}
                  <span className="text-orange-600">{name}</span>, please fill
                  the form below and click on the confirm button.{' '}
                </h3>               
                <div className="modal-action"></div>
                <div className="flex justify-between">
                  <button className="btn">Confirm-Order</button>
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

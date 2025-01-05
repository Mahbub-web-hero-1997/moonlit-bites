import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaBars,
  FaBlog,
  FaCartPlus,
  FaEnvelope,
  FaFirstOrder,
  FaHome,
  FaListAlt,
  FaSearch,
  FaUsers,
} from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { FcHome } from 'react-icons/fc';
import { MdCancel } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { TbBrandBooking } from 'react-icons/tb';
import UseAdmin from '../../../CustomHook/UseAdmin';

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  // console.log(isAdmin);
  // const isAdmin = true;
  const [isShow, setIsShow] = useState(false)
  const handleSidebar = () => {
    if (isShow) {
    
     setIsShow(false)
    }
    else {
      setIsShow(true)
    }
    console.log(isShow);
    
  
}
  return (
    <>
      <div className="flex w-full relative">
        <button
          onClick={handleSidebar}
          className="absolute top-0 left-0 m-4 md:hidden"
        >
          {isShow ? (
            <FaBars className="text-xl text-orange-600 fixed top-0 left-0" />
          ) : (
            <MdCancel className="text-2xl text-white bg-orange-500 fixed top-0 left-0 mt-3" />
          )}
        </button>
        <div
          className={`w-[300px] md:w-[400px] h-screen bg-orange-500 px-4 ${
            isShow ? `hidden` : 'block'
          }`}
        >
          {isAdmin ? (
            <ul className="mt-3 text-white uppercase">
              <li className="text-center text-md md:text-xl font-semibold ">
                <NavLink to="/">MOONLIT-BITES</NavLink>
              </li>
              <hr className="w-full md:w-3/4 mx-auto my-3" />
              <li className="text-center text-md font-semibold flex items-center gap-2 ">
                <FaHome />{' '}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/userHome"
                >
                  Admin Home
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <ImSpoonKnife />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/addItems"
                >
                  Add items
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <FaListAlt />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/allItems"
                >
                  Manage Items
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <TbBrandBooking />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/userPayment"
                >
                  Manage Bookings
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <FaUsers />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/allUsers"
                >
                  All Users
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="mt-3 text-white uppercase">
              <li className="text-center text-md md:text-xl font-semibold ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/"
                >
                  MOONLIT-BITES
                </NavLink>
              </li>
              <hr className="w-full md:w-3/4 mx-auto my-3" />
              <li className="text-center text-md font-semibold flex items-center gap-2 ">
                <FaHome />{' '}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/userHome"
                >
                  User Home
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <FaCartPlus />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/cart"
                >
                  My Cart
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <FaFirstOrder />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/userOrder"
                >
                  My Order
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <FaCartPlus />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/userPayment"
                >
                  Payment History
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <IoIosStar />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/userReview"
                >
                  Add Review
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-3 ">
                <FaBlog />
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-gray-600' : ''
                  }
                  to="/dashboard/blogs"
                >
                  Write-Blog
                </NavLink>
              </li>
            </ul>
          )}
          <hr className="my-5" />
          {/* Shared Nav Menu */}
          <ul className="mt-3 text-white uppercase">
            <li className="text-center text-sm md:text-md font-semibold flex items-center gap-2 mt-3 ">
              <FcHome />
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-center text-sm md:text-md font-semibold flex items-center gap-2 mt-3 ">
              <FaSearch />
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className="text-center text-sm md:text-md font-semibold flex items-center gap-2 mt-3 ">
              <FaEnvelope />
              <NavLink to="/menu">contact</NavLink>
            </li>
            <li className="text-center text-sm md:text-md font-semibold flex items-center gap-2 mt-3 ">
              <FaBlog />
              <NavLink to="/menu">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full h-screen mx-auto md:ml-60 md:pt-10">
          {<Outlet />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import { Link, NavLink } from 'react-router-dom';
import './Header.module.css';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useContext } from 'react';
import UseCart from '../../CustomHook/UseCart';


const Header = () => {
  const { user, handleSignOut, menus } = useContext(AuthContext);
  const isAdmin = user?.role === 'admin';
  const [cart] = UseCart()
  // console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // User Dashboard Menu
  const userDashboardMenu = (
    <>
      <li>
        <NavLink className="text-black font-semibold" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleSignOut}
          className="text-black font-semibold"
          to="/"
        >
          LogOut
        </NavLink>
      </li>
    </>
  );
  // Menu Items
  const menuItem = (
    <>
      <li >
        <NavLink className="text-black font-semibold" to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black font-semibold" to="/menu">
          MENU
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black font-semibold" to="/blogs">
          BLOGS
        </NavLink>
      </li>
      {/* <li><NavLink className="text-black font-semibold" to="/experts">OUR EXPERTS</NavLink></li> */}
      <li>
        <NavLink className="text-black font-semibold" to="/review">
          REVIEW
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black font-semibold" to="/about">
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black font-semibold" to="/contact">
          CONTACT
        </NavLink>
      </li>
    </>
    // User Dashboard Menu

  );
  return (
    <>
      <div className="navbar sticky top-0  w-full z-50 pt-4 md:pt-0 bg-base-100 transition-colors duration-500 ease-in-out">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItem}
            </ul>
          </div>
          <Link
            to="/"
            className="text-sm md:text-xl font-semibold  cursor-pointer ml-2"
          >
            MOONLIT-BITES
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold ">
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end w-1/6 ml-40">
          {
            !isAdmin ? <div className="dropdown dropdown-end mr-6">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle "
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm bg-red-500 text-white font-bold indicator-item">
                    {cart.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow "
              >
                <div className="card-body z-50">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: ${totalPrice}</span>
                  <div className="card-actions">
                    <NavLink
                      className="btn btn-primary btn-block"
                      to="/dashboard/cart"
                    >
                      View cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div> : ''
          }
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <h3 className='text-xl text-orange-500 font-semibold'>{user.displayName}</h3>
                {userDashboardMenu}
              </ul>
            </div>
          ) : (
            <Link className='ms-4' to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

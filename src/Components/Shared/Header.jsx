import { Link, NavLink } from 'react-router-dom';
import './Header.module.css';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useContext } from 'react';
import UseCart from '../../CustomHook/UseCart';

const Header = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const isAdmin = user?.role === 'admin';
  const [cart] = UseCart();

  const totalPrice = cart.reduce((total, item) => {
    const price = item.productId?.price || 0;
    return total + price * item.quantity;
  }, 0);

  // User Dashboard Menu
  const userDashboardMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-orange-600 font-bold'
              : 'text-black font-semibold hover:text-orange-500 transition-colors duration-300'
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleSignOut}
          className="text-black font-semibold hover:text-red-600 transition-colors duration-300"
          to="/"
        >
          LogOut
        </NavLink>
      </li>
    </>
  );

  // Main Menu Items
  const menuItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-orange-600 font-bold border-b-2 border-orange-600'
              : 'text-black font-semibold hover:text-orange-500 transition-colors duration-300'
          }
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-orange-600 font-bold border-b-2 border-orange-600'
              : 'text-black font-semibold hover:text-orange-500 transition-colors duration-300'
          }
          to="/menu"
        >
          MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-orange-600 font-bold border-b-2 border-orange-600'
              : 'text-black font-semibold hover:text-orange-500 transition-colors duration-300'
          }
          to="/blogs"
        >
          BLOGS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-orange-600 font-bold border-b-2 border-orange-600'
              : 'text-black font-semibold hover:text-orange-500 transition-colors duration-300'
          }
          to="/review"
        >
          REVIEW
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-orange-600 font-bold border-b-2 border-orange-600'
              : 'text-black font-semibold hover:text-orange-500 transition-colors duration-300'
          }
          to="/about"
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-orange-600 font-bold border-b-2 border-orange-600'
              : 'text-black font-semibold hover:text-orange-500 transition-colors duration-300'
          }
          to="/contact"
        >
          CONTACT
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar sticky top-0 w-full z-50 pt-4 md:pt-0 bg-white shadow-md transition-colors duration-500 ease-in-out mx-a">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg z-[1] mt-3 w-56 p-4"
            >
              {menuItem}
            </ul>
          </div>
          <Link
            to="/"
            className="text-md md:text-xl font-bold cursor-pointer ml-2 text-orange-600 hover:text-orange-700 transition-colors duration-300"
          >
            MOONLIT-BITES
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{menuItem}</ul>
        </div>

        <div className="navbar-end w-1/6 ml-40 flex items-center justify-end">
          {!isAdmin && (
            <div className="dropdown dropdown-end mr-6">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle relative hover:bg-orange-100 transition-colors duration-300"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-gray-700"
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
                  {cart.length > 0 && (
                    <span className="badge badge-sm bg-red-600 text-white font-bold indicator-item animate-bounce">
                      {cart.length}
                    </span>
                  )}
                </div>
              </label>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-white shadow-xl mt-3 w-56 rounded-md p-5"
              >
                <div className="card-body p-0">
                  <span className="text-lg font-bold">{cart.length} Items</span>
                  <span className="text-info font-semibold text-orange-600">
                    Subtotal: ${totalPrice.toFixed(2)}
                  </span>
                  <div className="card-actions mt-3">
                    <NavLink
                      className="btn btn-primary btn-block bg-orange-600 hover:bg-orange-700 border-none text-white font-bold transition-colors duration-300"
                      to="/dashboard/cart"
                    >
                      View cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}

          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-orange-500 transition duration-300"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img alt="User Avatar" src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg z-[1] mt-3 w-52 p-3"
              >
                <h3 className="text-xl text-orange-600 font-semibold px-3 mb-2">{user.displayName}</h3>
                {userDashboardMenu}
              </ul>
            </div>
          ) : (
            <Link
              className="ml-4 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

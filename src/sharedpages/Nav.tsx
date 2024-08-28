import "daisyui/dist/full.css"; ///etar jnnoi@!ZZ
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

const Navbar = () => {
  const cartItemsCount = useAppSelector((state) => state.cart.cartQuantity);
  const cartItemsTotalPrice = useAppSelector(
    (state) => state.cart.cartTotalAmount
  );
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="meeting-room"> Meeting Rooms</NavLink>
      </li>

      <li>
        <NavLink to="about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="contact-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-red-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            {links}
          </ul>
        </div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
          <Link
            className="flex flex-row justify-center items-center gap-x-2"
            to="/"
          >
            Meeting Room
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <g fill="currentColor">
                <path d="M18.5 26c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4"></path>
                <path
                  fillRule="evenodd"
                  d="M14.5 28a1.999 1.999 0 1 0 0-4a1.999 1.999 0 1 0 0 4m0 2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"
                  clipRule="evenodd"
                ></path>
                <path d="M6 36.546C6 33.522 11.663 32 14.5 32s8.5 1.523 8.5 4.545V42H6z"></path>
                <path
                  fillRule="evenodd"
                  d="M8.334 35.983c-.316.312-.334.491-.334.563V40h13v-3.455c0-.07-.018-.25-.334-.562c-.334-.329-.885-.682-1.64-1.005C17.506 34.327 15.65 34 14.5 34s-3.007.327-4.526.978c-.755.323-1.306.676-1.64 1.005M14.5 32C11.663 32 6 33.523 6 36.545V42h17v-5.455C23 33.524 17.337 32 14.5 32"
                  clipRule="evenodd"
                ></path>
                <path d="M37.5 26c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4"></path>
                <path
                  fillRule="evenodd"
                  d="M33.5 28a1.999 1.999 0 1 0 0-4a1.999 1.999 0 1 0 0 4m0 2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"
                  clipRule="evenodd"
                ></path>
                <path d="M28 24c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4"></path>
                <path
                  fillRule="evenodd"
                  d="M24 26a1.999 1.999 0 1 0 0-4a1.999 1.999 0 1 0 0 4m0 2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"
                  clipRule="evenodd"
                ></path>
                <path d="M23 12.833A4.833 4.833 0 0 0 18.167 8h-3.169a4.998 4.998 0 0 0-.181 9.993L15 18v2s8-1.167 8-7.167m3-1.597A5.236 5.236 0 0 1 31.236 6H37a5 5 0 0 1 0 10h-2v3s-9-1.264-9-7.764m-1 25.31C25 33.522 30.663 32 33.5 32s8.5 1.523 8.5 4.545V42H25z"></path>
                <path
                  fillRule="evenodd"
                  d="M27.334 35.983c-.316.312-.334.491-.334.563V40h13v-3.455c0-.07-.018-.25-.334-.562c-.334-.329-.885-.682-1.64-1.005C36.506 34.327 34.65 34 33.5 34s-3.007.327-4.526.978c-.755.323-1.306.676-1.64 1.005M33.5 32c-2.837 0-8.5 1.523-8.5 4.545V42h17v-5.455C42 33.524 36.337 32 33.5 32M24 35v-.455c0-1.677-1.847-2.893-4.005-3.643A9.4 9.4 0 0 1 24 30a9.4 9.4 0 0 1 4.005.902c-2.158.75-4.005 1.966-4.005 3.643z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M24 35v-.455c0-.893.524-1.656 1.34-2.287l.141-.105c.697-.506 1.58-.923 2.524-1.25a9.5 9.5 0 0 0-2.968-.845a9.3 9.3 0 0 0-2.074 0a9.5 9.5 0 0 0-2.968.844c.943.328 1.827.745 2.523 1.25q.072.052.141.106c.817.63 1.34 1.394 1.34 2.287z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
          </Link>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* Cart Section */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {cartItemsCount}
            </span>
          </div>
          <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{cartItemsCount} Items</span>
              <span className="text-info font-bold">
                Subtotal: {cartItemsTotalPrice} BDT
              </span>
              <div className="card-actions">
                <Link to={"cart"} className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End of Cart Section */}
      </div>
    </div>
  );
};

export default Navbar;

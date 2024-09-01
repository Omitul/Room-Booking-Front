import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const role = useAppSelector((state) => state.auth.role);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("Logging out");
    navigate("/");
  };

  const links = (
    <>
      <li className="mx-6">
        <NavLink
          to="/"
          className="text-lg text-black hover:bg-white font-medium"
        >
          Home
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to="meeting-room"
          className="text-lg text-black hover:bg-white font-medium"
        >
          Meeting Rooms
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to="about-us"
          className="text-lg text-black hover:bg-white font-medium"
        >
          About Us
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to="contact-us"
          className="text-lg text-black hover:bg-white font-medium"
        >
          Contact Us
        </NavLink>
      </li>
      {!role && (
        <li className="mx-6">
          <NavLink
            to="login"
            className="text-lg text-black hover:bg-white font-medium"
          >
            Login
          </NavLink>
        </li>
      )}

      {role && (
        <li className="mx-6 relative">
          <button
            onClick={handleDropdownToggle}
            className="text-lg text-black hover:bg-white font-medium"
          >
            <div className="flex justify-end items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10 flex justify-end"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white text-black rounded-md shadow-lg w-52 mt-8 left-12 z-20">
              {role === "admin" && (
                <ul className="list-none p-2">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 font-serif font-semibold"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 font-serif font-semibold text-red-600"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
              {role === "user" && (
                <ul className="list-none p-2">
                  <li>
                    <Link
                      to="/mybookings"
                      className="block px-4 py-2 hover:bg-gray-100 font-serif font-semibold text-md"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Bookings
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 font-serif font-semibold text-red-600"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </li>
      )}
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-2 w-52 p-2 shadow-lg absolute top-full left-0 overflow-auto max-h-60 text-xs text-sm"
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
              </g>
            </svg>
          </Link>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;

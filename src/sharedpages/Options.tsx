import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";

interface BottomNavProps {
  role: string;
}

const Options: React.FC<BottomNavProps> = ({ role }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    alert("Logging out");
  };

  return (
    <div className="bg-gray-800 text-white p-4 w-full flex justify-between items-center relative z-10">
      {role === "admin" && (
        <div className="flex items-center">
          <div className="relative mr-4">
            <button
              onClick={handleDropdownToggle}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
            >
              Dashboard
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-700 text-white rounded-md shadow-lg w-52 mt-2 z-20">
                <ul className="list-none p-2">
                  <li>
                    <Link
                      to="/admin/rooms"
                      className="block px-4 py-2 hover:bg-gray-600 font-serif font-semibold"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Room Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/slots"
                      className="block px-4 py-2 hover:bg-gray-600 font-serif font-semibold"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Slots Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/bookings"
                      className="block px-4 py-2 hover:bg-gray-600 font-serif font-semibold"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Booking Management
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold absolute right-4"
          >
            Logout
          </button>
        </div>
      )}
      {role === "user" && (
        <Link to="/user/profile" className="hover:underline">
          Profile
        </Link>
      )}
    </div>
  );
};

export default Options;

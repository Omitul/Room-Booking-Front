import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../sharedpages/Nav";
import Footer from "../../sharedpages/Footer";
import { useAppSelector } from "../../redux/hook";

const MainLayout: React.FC = () => {
  let role;
  // eslint-disable-next-line prefer-const
  role = useAppSelector((state) => state.auth.role);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

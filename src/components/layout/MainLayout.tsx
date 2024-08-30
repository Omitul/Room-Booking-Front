import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../sharedpages/Nav";
import Footer from "../../sharedpages/Footer";

const MainLayout: React.FC = () => {
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

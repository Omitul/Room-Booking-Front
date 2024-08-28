import { Outlet } from "react-router-dom";
import Navbar from "../../sharedpages/Nav";
import Footer from "../../sharedpages/Footer";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

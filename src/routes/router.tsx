// router.tsx

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import MeetingRoom from "../pages/meetingroom/MeetingRoom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Booking from "../pages/admin/booking-management/Booking";
import MyBookings from "../pages/mybookings/MyBookings";
import Dashboard from "../pages/dashboard/Dashboard";
import RoomDashBoard from "../pages/admin/room-management/RoomDashboard";
import SlotDashboard from "../pages/admin/slots-management/SlotDashboard";
import DetailsRoom from "../pages/detailscard/DetailsRoom";
import Checkout from "../pages/checkout/Checkout";
import BookFormPage from "../pages/booknowform/BookFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "meeting-room",
        element: <MeetingRoom></MeetingRoom>,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About></About>,
      },
      {
        path: "contact-us",
        element: <Contact></Contact>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "details-room",
        element: <DetailsRoom></DetailsRoom>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "admin/rooms",
        element: <RoomDashBoard></RoomDashBoard>,
      },
      {
        path: "admin/slots",
        element: <SlotDashboard></SlotDashboard>,
      },
      {
        path: "admin/bookings",
        element: <Booking></Booking>,
      },
      {
        path: "mybookings",
        element: <MyBookings></MyBookings>,
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "bookingform",
        element: <BookFormPage></BookFormPage>,
      },

      // {
      //   path: "cart",
      //   element: <Cart></Cart>,
      // },
      //Add more nested routes as needed
    ],
  },
]);

export default router;

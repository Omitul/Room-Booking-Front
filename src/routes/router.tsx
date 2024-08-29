// router.tsx

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import MeetingRoom from "../pages/meetingroom/MeetingRoom";
import Login from "../pages/login/Login";
import { DetailsRoom } from "../pages/detailscard/DetailsRoom";
import Register from "../pages/register/Register";
import Room from "../pages/admin/room-management/Room";
import Slots from "../pages/admin/slots-management/Slots";
import Booking from "../pages/admin/booking-management/Booking";
import MyBookings from "../pages/mybookings/MyBookings";
import Dashboard from "../pages/dashboard/Dashboard";

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
        element: <Room></Room>,
      },
      {
        path: "admin/slots",
        element: <Slots></Slots>,
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

      // {
      //   path: "cart",
      //   element: <Cart></Cart>,
      // },
      //Add more nested routes as needed
    ],
  },
]);

export default router;

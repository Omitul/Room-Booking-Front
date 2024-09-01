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
import NotFoundPage from "../pages/notfound/NotFoundRoute";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "meeting-room", element: <MeetingRoom /> },
      { path: "/", element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "contact-us", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "admin/rooms",
        element: (
          <ProtectedRoute>
            <RoomDashBoard />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/slots",
        element: (
          <ProtectedRoute>
            <SlotDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/bookings",
        element: (
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        ),
      },
      {
        path: "mybookings",
        element: (
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "details-room",
        element: (
          <ProtectedRoute>
            <DetailsRoom />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "bookingform",
        element: (
          <ProtectedRoute>
            <BookFormPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "*",
        element: <NotFoundPage />, /// wrong routes
      },
    ],
  },
]);

export default router;

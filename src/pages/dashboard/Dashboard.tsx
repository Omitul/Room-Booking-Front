import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
        Dashboard
      </h1>
      <ul className="space-y-4 md:space-y-6 lg:space-y-8 text-center font-bold">
        <li>
          <Link
            to="/admin/bookings"
            className="block px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 md:px-6 md:py-3 lg:px-8 lg:py-8 lg:text-3xl  font-serif"
          >
            Bookings
          </Link>
        </li>
        <li>
          <Link
            to="/admin/slots"
            className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 md:px-6 md:py-3 lg:px-8 lg:py-8 lg:text-3xl font-serif"
          >
            Slots
          </Link>
        </li>
        <li>
          <Link
            to="/admin/rooms"
            className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 md:px-6 md:py-3 lg:px-8 lg:py-8 lg:text-3xl  font-serif"
          >
            Rooms
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;

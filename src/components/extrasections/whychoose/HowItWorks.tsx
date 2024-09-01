import { FaCheckCircle, FaCalendarAlt, FaClock } from "react-icons/fa";

const HowItWorks: React.FC = () => {
  return (
    <div className="p-4 bg-blue-200  mt-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <div className="text-3xl text-blue-500 mb-3">
              <FaCheckCircle />
            </div>
            <h2 className="text-xl font-semibold mb-2">Select a Room</h2>
            <p className="text-gray-600">
              Browse our selection of rooms and choose the one that best fits
              your needs.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <div className="text-3xl text-green-500 mb-3">
              <FaCalendarAlt />
            </div>
            <h2 className="text-xl font-semibold mb-2">Choose Date & Time</h2>
            <p className="text-gray-600">
              Pick your preferred date and time for the booking.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <div className="text-3xl text-red-500 mb-3">
              <FaClock />
            </div>
            <h2 className="text-xl font-semibold mb-2">Confirm Booking</h2>
            <p className="text-gray-600">
              Review your details and confirm your booking. You will receive a
              confirmation email.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600">
            If you need any assistance, feel free to contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

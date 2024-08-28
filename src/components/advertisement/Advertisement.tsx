const Advertisement = () => {
  return (
    <div
      className="flex flex-col md:flex-row p-4 md:p-10 lg:p-20 gap-y-4 md:gap-x-4 md:gap-y-0"
      style={{
        backgroundImage: `url('../public/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="border bg-blue-400 rounded-xl p-6 md:p-10 flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m-7.5-7.5v15M4.5 4.5a1.125 1.125 0 0 1 1.125 1.125v13.75A1.125 1.125 0 0 1 4.5 20.5h15a1.125 1.125 0 0 1 1.125-1.125V5.625A1.125 1.125 0 0 1 19.5 4.5H4.5z"
          />
        </svg>

        <p className="font-semibold text-lg md:text-xl">Flexible Booking</p>
        <p className="font-semibold text-gray-500 text-sm md:text-base">
          Book with ease and flexibility
        </p>
      </div>

      <div className="border bg-blue-300 rounded-xl p-6 md:p-10 flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 1.5M21 12.75V4.5a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 4.5v8.25m0 4.5V20.5a2.25 2.25 0 0 0 2.25 2.25H18a2.25 2.25 0 0 0 2.25-2.25v-3.75"
          />
        </svg>

        <p className="font-semibold text-lg md:text-xl">Instant Confirmation</p>
        <p className="font-semibold text-gray-500 text-sm md:text-base">
          Get instant booking confirmation
        </p>
      </div>

      <div className="border bg-pink-300 rounded-xl p-6 md:p-10 flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3a5 5 0 0 0 10 0v-3h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2V7a5 5 0 0 0-5-5z"
          />
        </svg>

        <p className="font-semibold text-lg md:text-xl">
          24/7 Customer Support
        </p>
        <p className="font-semibold text-gray-500 text-sm md:text-base">
          We’re here to help anytime
        </p>
      </div>

      <div className="border bg-gray-300 rounded-xl p-6 md:p-10 flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75l-6.75 6.75M12 9.75l6.75 6.75M12 9.75v11.25"
          />
        </svg>

        <p className="font-semibold text-lg md:text-xl">Best Rate Guarantee</p>
        <p className="font-semibold text-gray-500 text-sm md:text-base">
          Get the best rates available
        </p>
      </div>
    </div>
  );
};

export default Advertisement;

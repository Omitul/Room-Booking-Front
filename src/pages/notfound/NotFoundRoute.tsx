import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4 text-gray-700">Page Not Found</p>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist or you have to login
        first!
      </p>
      <div className="mt-8">
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary px-4 py-2 text-lg"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate("/login")}
          className="ml-4 btn btn-secondary px-4 py-2 text-lg"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;

import React from "react";
import { useAddLoginMutation } from "../../redux/features/auth/login.api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../../redux/hook";
import { setUserRole } from "../../redux/features/auth/authSlice";

const LoginForm = () => {
  const [addLogin, { isLoading }] = useAddLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const res = await addLogin(data).unwrap();
      console.log("res", res.data.role);
      console.log("token:", jwtDecode(res.token));
      console.log("Login successful");
      Swal.fire({
        title: "Success!",
        text: "Login successful!",
        icon: "success",
        confirmButtonText: "OK",
      });
      console.log("role", res.data.role);
      dispatch(setUserRole(res.data.role));
      navigate("/");
    } catch (error: any) {
      console.error("Login failed:", error);
      const errorMessage =
        error?.data?.message || "An unexpected error occurred";
      Swal.fire({
        title: "Error!",
        text: `Login failed. ${errorMessage}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="admin@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue="ph-password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

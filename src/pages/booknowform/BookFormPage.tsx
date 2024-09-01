import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetslotQuery } from "../../redux/features/Slot/Slot.api";
import { formatISO } from "date-fns";
import { TypeSlot } from "../../types";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { useGetRegisteredUserQuery } from "../../redux/features/auth/registration.api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface JwtPayload {
  userId: string;
}

const BookingForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [dateConfirmed, setDateConfirmed] = useState<boolean>(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const formattedDate = date ? formatISO(date, { representation: "date" }) : "";

  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useGetslotQuery(dateConfirmed ? formattedDate : "");

  const [availableTimeSlots, setAvailableTimeSlots] = useState<
    { displayTime: string; value: string }[]
  >([]);

  useEffect(() => {
    if (apiResponse && Array.isArray(apiResponse.data) && dateConfirmed) {
      const formattedSlots = apiResponse.data
        .filter(
          (slot: TypeSlot) => slot.date === formattedDate && !slot.isBooked
        )
        .map((slot: TypeSlot) => ({
          displayTime: `${slot.startTime} - ${slot.endTime}`,
          value: `${slot.startTime}-${slot.endTime}`,
        }));

      if (formattedSlots.length === 0) {
        Swal.fire({
          title: "No Slots Available",
          text: "There are no available slots for this date.",
          icon: "info",
        });
      }

      setAvailableTimeSlots(formattedSlots);
    } else {
      setAvailableTimeSlots([]);
    }
  }, [apiResponse, formattedDate, dateConfirmed]);

  const token = getTokenFromLocalStorage();
  const decodedToken: JwtPayload | null = token
    ? jwtDecode<JwtPayload>(token)
    : null;

  const userId = decodedToken ? decodedToken.userId : null;
  const {
    data,
    isLoading: userLoading,
    isError: userError,
  } = useGetRegisteredUserQuery(userId || "", {
    skip: !userId,
  });
  const userData = data?.data;

  useEffect(() => {
    if (userData) {
      setUser({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
      });
    }
  }, [userData]);

  if (isLoading || userLoading) return <p>Loading...</p>;
  if (isError || userError) return <p>Error loading data</p>;

  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };

  const handleConfirmDate = () => {
    if (date) {
      setDateConfirmed(true);
    } else {
      Swal.fire({
        title: "Select Date",
        text: "Please select a date before confirming.",
        icon: "warning",
      });
    }
  };

  const handleTimeSlotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTimeSlot) {
      Swal.fire({
        title: "Select Time Slot",
        text: "Please select a time slot before submitting the form.",
        icon: "warning",
      });
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Select Date</label>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="form-input mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleConfirmDate}
          className="btn bg-blue-500 text-white  mt-2 rounded-lg ml-2"
        >
          Confirm Date
        </button>
      </div>

      {dateConfirmed && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Available Time Slots</h3>
          <ul>
            {availableTimeSlots.length > 0 ? (
              availableTimeSlots.map((slot, index) => (
                <li key={index} className="mb-2">
                  <label>
                    <input
                      type="radio"
                      name="timeSlot"
                      value={slot.value}
                      onChange={handleTimeSlotChange}
                      className="mr-2"
                    />
                    {slot.displayTime}
                  </label>
                </li>
              ))
            ) : (
              <p>No available time slots</p>
            )}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="form-input mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="form-input mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className="form-input mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            className="form-input mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn bg-green-500 text-white px-4 py-2 rounded"
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

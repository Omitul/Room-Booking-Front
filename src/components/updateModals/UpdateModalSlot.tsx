import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TypeSlot } from "../../types";

type UpdateModalSlotProps = {
  slot: TypeSlot;
  onClose: () => void;
  onUpdate: (updatedSlot: TypeSlot) => void;
};

const UpdateModalSlot = ({ slot, onClose, onUpdate }: UpdateModalSlotProps) => {
  const [formData, setFormData] = useState<TypeSlot>({
    roomName: slot.roomName || "",
    roomNo: slot.roomNo || 0,
    date: slot.date,
    startTime: slot.startTime,
    endTime: slot.endTime,
  });

  useEffect(() => {
    setFormData(slot);
  }, [slot]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onUpdate(formData);
      Swal.fire({
        icon: "success",
        title: "Slot Updated",
        text: "Slot details updated successfully!",
      });
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while updating the slot.",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white p-8 rounded-lg z-10 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Update Slot</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Room Name</label>
            <input
              type="text"
              name="roomName"
              value={formData.roomName}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Room No</label>
            <input
              type="number"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="btn bg-green-500 text-white py-2 px-4 rounded"
            >
              Update
            </button>
            <button
              type="button"
              className="btn bg-red-400 text-white py-2 px-4 rounded ml-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModalSlot;

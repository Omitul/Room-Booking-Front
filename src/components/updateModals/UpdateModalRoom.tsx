import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TypeRoom } from "../../types";

type UpdateModalProps = {
  Room: TypeRoom;
  onClose: () => void;
  onUpdate: (updatedRoom: TypeRoom) => void;
};

const UpdateModalRoom = ({ Room, onClose, onUpdate }: UpdateModalProps) => {
  const [formData, setFormData] = useState<TypeRoom>({
    _id: Room._id,
    name: Room.name,
    roomNo: Room.roomNo,
    floorNo: Room.floorNo,
    capacity: Room.capacity,
    pricePerSlot: Room.pricePerSlot,
  });

  useEffect(() => {
    setFormData({
      _id: Room._id,
      name: Room.name,
      roomNo: Room.roomNo,
      floorNo: Room.floorNo,
      capacity: Room.capacity,
      pricePerSlot: Room.pricePerSlot,
    });
  }, [Room]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "pricePerSlot" ||
        name === "capacity" ||
        name === "floorNo" ||
        name === "roomNo"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onUpdate(formData);
      Swal.fire({
        icon: "success",
        title: "Room Updated",
        text: "Room details updated successfully!",
      });
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while updating the room.",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white p-8 rounded-lg z-10 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Update Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Room Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
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
            <label className="block font-semibold">Floor No</label>
            <input
              type="number"
              name="floorNo"
              value={formData.floorNo}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Price Per Slot</label>
            <input
              type="number"
              name="pricePerSlot"
              value={formData.pricePerSlot}
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

export default UpdateModalRoom;

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TypeSlot, TypeRoom } from "../../types";

type UpdateSlotModalProps = {
  slot: TypeSlot;
  onUpdate: (updatedSlot: TypeSlot) => Promise<void>;
  onClose: () => void;
  slots: Record<string, TypeRoom>; // Adjusted to use TypeRoom
};

const UpdateSlotModal = ({
  slot,
  onUpdate,
  onClose,
  slots,
}: UpdateSlotModalProps) => {
  const [formData, setFormData] = useState<Omit<TypeSlot, "_id" | "room">>({
    roomName: slot.roomName,
    date: slot.date,
    startTime: slot.startTime,
    endTime: slot.endTime,
    userName: slot.userName, // Added
    isConfirmed: slot.isConfirmed, // Added
  });

  useEffect(() => {
    setFormData({
      roomName: slot.roomName,
      date: slot.date,
      startTime: slot.startTime,
      endTime: slot.endTime,
      userName: slot.userName, // Added
      isConfirmed: slot.isConfirmed, // Added
    });
  }, [slot]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const room = slots[formData.roomName];
      if (!room) {
        throw new Error("Room not found");
      }
      const updatedSlot: TypeSlot = {
        ...formData,
        _id: slot._id,
        room,
        isbooked: slot.isbooked,
      };
      await onUpdate(updatedSlot);
      onClose();
      await Swal.fire({
        title: "Slot updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error(error);
      await Swal.fire("Failed to update slot", "", "error");
    }
  };

  return (
    <div className="p-10">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-green-100 p-8 rounded-lg z-10 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Update Slot</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold">Room Name</label>
              <select
                name="roomName"
                value={formData.roomName}
                onChange={handleInputChange}
                className="form-select mt-1"
                required
              >
                <option value="" disabled>
                  Select a room
                </option>
                {Object.keys(slots).map((roomName) => (
                  <option key={roomName} value={roomName}>
                    {roomName}
                  </option>
                ))}
              </select>
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
                className="btn bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                type="button"
                className="btn bg-gray-300 text-black px-4 py-2 rounded ml-2"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSlotModal;

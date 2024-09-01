import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TypeRoom } from "../../types";

type UpdateRoomModalProps = {
  room: TypeRoom;
  onUpdate: (updatedRoom: TypeRoom) => Promise<void>;
  onClose: () => void;
};

const UpdateRoomModal = ({ room, onUpdate, onClose }: UpdateRoomModalProps) => {
  const [formData, setFormData] = useState<TypeRoom>({
    name: "",
    image: [],
    roomNo: 0,
    floorNo: 0,
    capacity: 0,
    pricePerSlot: 0,
    amenities: [],
  });

  useEffect(() => {
    setFormData(room);
  }, [room]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const newValue =
      name === "capacity" ||
      name === "pricePerSlot" ||
      name === "roomNo" ||
      name === "floorNo"
        ? parseFloat(value) || 0
        : name === "amenities" || name === "image"
        ? value.split(",").map((item) => item.trim())
        : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onUpdate(formData);
      onClose();
      await Swal.fire({
        title: "Room updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error(error);
      await Swal.fire("Failed to update room", "", "error");
    }
  };

  return (
    <div className="p-10">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-green-100 p-8 rounded-lg z-10 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Update Room</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold">Name</label>
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
              <label className="block font-semibold">
                Image URLs (comma-separated)
              </label>
              <input
                type="text"
                name="image"
                value={(formData.image as string[]).join(", ")}
                onChange={handleInputChange}
                className="form-input mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Room No.</label>
              <input
                type="number"
                name="roomNo"
                value={formData.roomNo.toString()}
                onChange={handleInputChange}
                className="form-input mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Floor No.</label>
              <input
                type="number"
                name="floorNo"
                value={formData.floorNo.toString()}
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
                value={formData.capacity.toString()}
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
                value={formData.pricePerSlot.toString()}
                onChange={handleInputChange}
                className="form-input mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">
                Amenities (comma-separated)
              </label>
              <input
                type="text"
                name="amenities"
                value={(formData.amenities as string[]).join(", ")}
                onChange={handleInputChange}
                className="form-input mt-1"
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

export default UpdateRoomModal;

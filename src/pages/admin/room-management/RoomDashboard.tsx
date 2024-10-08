import { useState } from "react";
import Swal from "sweetalert2";
import { useAddRoomMutation } from "../../../redux/features/Room/Room.api";
import RoomTable from "./RoomTable";
import { TypeRoom } from "../../../types";

const RoomDashBoard = () => {
  const [addRoom, { isLoading }] = useAddRoomMutation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<TypeRoom>({
    name: "",
    image: [],
    roomNo: 0,
    floorNo: 0,
    capacity: 0,
    pricePerSlot: 0,
    amenities: [],
  });

  const toggleModal = () => {
    if (!showModal) {
      setFormData({
        name: "",
        image: [],
        roomNo: 0,
        floorNo: 0,
        capacity: 0,
        pricePerSlot: 0,
        amenities: [],
      });
    }
    setShowModal(!showModal);
  };

  if (isLoading) {
    return <p>Loading......</p>;
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
    try {
      const updatedData = {
        ...formData,
        roomNo: Number(formData.roomNo),
        floorNo: Number(formData.floorNo),
        capacity: Number(formData.capacity),
        pricePerSlot: Number(formData.pricePerSlot),
      };

      const res = await addRoom(updatedData).unwrap();

      console.log(res);

      Swal.fire({
        icon: "success",
        title: "Room Added",
        text: "Room added successfully!",
      });

      setFormData({
        name: "",
        image: [],
        roomNo: 0,
        floorNo: 0,
        capacity: 0,
        pricePerSlot: 0,
        amenities: [],
      });
      setShowModal(!showModal);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the room.",
      });
    }
  };

  return (
    <div className="p-12 mb-28">
      <RoomTable />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-green-100 p-8 rounded-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Add New Room</h2>
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
                <button type="submit" className="btn bg-green-500">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn bg-gray-300 ml-2"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex flex-row items-center justify-center gap-4 mt-4">
        <button className="btn btn-accent" onClick={toggleModal}>
          Add Room
        </button>
      </div>
    </div>
  );
};

export default RoomDashBoard;

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TypeRoom, TypeSlot } from "../../../types";
import { useAddslotMutation } from "../../../redux/features/Slot/Slot.api"; // Add useGetRoomQuery if you have it
import SlotTable from "./SlotTable";
import { useGetRoomQuery } from "../../../redux/features/Room/Room.api";

const SlotDashboard = () => {
  const [addSlot, { isLoading }] = useAddslotMutation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<TypeSlot>({
    roomName: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const [rooms, setRooms] = useState<Record<string, string>>({});

  const { data: roomData, isLoading: isRoomLoading } = useGetRoomQuery({}); // Fetch room data

  useEffect(() => {
    if (roomData) {
      const roomMap = roomData.data.reduce(
        (acc: Record<string, string>, room: TypeRoom) => {
          acc[room.name] = room._id as string;
          return acc;
        },
        {}
      );
      setRooms(roomMap);
    }
  }, [roomData]);

  const toggleModal = () => {
    if (!showModal) {
      setFormData({
        roomName: "",
        date: "",
        startTime: "",
        endTime: "",
      });
    }
    setShowModal(!showModal);
  };

  if (isLoading || isRoomLoading) {
    return <p>Loading......</p>;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
    try {
      const roomId = rooms[formData.roomName];
      if (!roomId) {
        throw new Error("Room ID not found");
      }
      const slotData = {
        ...formData,
        room: roomId, // Map roomName to roomId
      };
      const res = await addSlot(slotData).unwrap();
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "Slot Added",
        text: "Slot added successfully!",
      });
      setFormData({
        roomName: "",
        date: "",
        startTime: "",
        endTime: "",
      });
      setShowModal(!showModal);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the slot.",
      });
    }
  };

  return (
    <div className="p-12 mb-28">
      <SlotTable />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-green-100 p-8 rounded-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Add New Slot</h2>
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
                  {Object.keys(rooms).map((roomName) => (
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
          Add Slot
        </button>
      </div>
    </div>
  );
};

export default SlotDashboard;

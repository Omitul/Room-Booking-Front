import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { useState } from "react";

import { TypeRoom } from "../../../types";
import {
  useDeleteRoomMutation,
  useGetRoomQuery,
  useUpdateRoomMutation,
} from "../../../redux/features/Room/Room.api";
import UpdateModalRoom from "../../../components/updateModals/UpdateModalRoom";

const Room = () => {
  const initialRoom: TypeRoom = {
    _id: "",
    name: "",
    roomNo: 0,
    floorNo: 0,
    capacity: 0,
    pricePerSlot: 0,
  };

  const { data, isLoading } = useGetRoomQuery({});
  const [updateRoom] = useUpdateRoomMutation();
  const [deleteRoom] = useDeleteRoomMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<TypeRoom>(initialRoom);

  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (!data) {
    return <p>No data is present</p>;
  }

  const handleUpdate = async (data: TypeRoom) => {
    if (!data._id) {
      console.error("Invalid Room ID:", data._id);
      return;
    }

    const updatedRoom = {
      name: data.name,
      roomNo: data.roomNo,
      floorNo: data.floorNo,
      capacity: data.capacity,
      pricePerSlot: data.pricePerSlot,
    };

    setSelectedRoom({ ...data, ...updatedRoom });
    setShowUpdateModal(true);
  };

  const handleDelete = async (RoomId: string) => {
    if (!RoomId) {
      console.error("Invalid Room ID:", RoomId);
      await Swal.fire("Invalid Room ID", "", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure you want to delete this Room?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteRoom(RoomId).unwrap();
          Swal.fire("Deleted Successfully!", "", "success");
        } catch (error) {
          console.error("Failed to delete:", error);
          Swal.fire("Failed to delete!", "", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const tdata = data.data;
  console.log("Room Data: ", tdata);

  const columns = [
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Room Name</div>
      ),
      selector: (row: TypeRoom) => row.name,
      cell: (row: TypeRoom) => (
        <div style={{ fontSize: "1.5rem" }}>{row.name}</div>
      ),
    },
    {
      name: <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Room No</div>,
      selector: (row: TypeRoom) => row.roomNo,
      cell: (row: TypeRoom) => (
        <div style={{ fontSize: "1.5rem" }}>{row.roomNo}</div>
      ),
    },
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Capacity</div>
      ),
      selector: (row: TypeRoom) => row.capacity,
      cell: (row: TypeRoom) => (
        <div style={{ fontSize: "1.5rem" }}>{row.capacity}</div>
      ),
    },
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Price Per Slot
        </div>
      ),
      selector: (row: TypeRoom) => row.pricePerSlot,
      cell: (row: TypeRoom) => (
        <div style={{ fontSize: "1.5rem" }}>{row.pricePerSlot}</div>
      ),
    },
    {
      cell: (row: TypeRoom) => (
        <button
          className="btn bg-purple-400 ml-52"
          onClick={() => handleUpdate(row)}
        >
          Update
        </button>
      ),
    },
    {
      cell: (row: TypeRoom) => (
        <button
          className="btn bg-red-600 mr-52"
          onClick={() => handleDelete(row._id as string)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="hidden md:block">
        <DataTable columns={columns} data={tdata} />
      </div>
      <div className="md:hidden">
        {/* mobile or smaller device er jnno  */}
        {tdata.map((row: TypeRoom) => (
          <div key={row._id} className="mb-4 p-4 border rounded-lg">
            <div className="text-lg font-bold">{row.name}</div>
            <div className="text-sm text-gray-500">
              RoomNo: {row.roomNo} BDT
            </div>
            <div className="text-sm text-gray-500">FloorNo: {row.floorNo}</div>
            <div className="text-sm text-gray-500">
              Capacity: {row.capacity}
            </div>
            <div className="text-sm text-gray-500">
              Price Per Slot: {row.pricePerSlot}
            </div>
            <div className="mt-2 flex space-x-2">
              <button
                className="btn bg-purple-400 text-white py-2 px-4 rounded"
                onClick={() => handleUpdate(row)}
              >
                Update
              </button>
              <button
                className="btn bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => handleDelete(row._id as string)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* UpdateModalFrom for the Room  */}
      {showUpdateModal && selectedRoom && (
        <UpdateModalRoom
          Room={selectedRoom}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={async (updatedRoom: TypeRoom) => {
            try {
              await updateRoom({
                id: selectedRoom._id as string,
                payload: updatedRoom,
              }).unwrap();
              setShowUpdateModal(false);
            } catch (error) {
              console.error("Update failed:", error);
              await Swal.fire("Failed to update Room", "", "error");
            }
          }}
        />
      )}
    </div>
  );
};

export default Room;

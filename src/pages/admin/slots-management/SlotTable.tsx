import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { TypeSlot, TypeRoom } from "../../../types";
import UpdateSlotModal from "../../../components/updateModals/UpdateSlotModal";

import { useGetRoomQuery } from "../../../redux/features/Room/Room.api";
import {
  useDeleteslotMutation,
  useGetslotQuery,
  useUpdateslotMutation,
} from "../../../redux/features/Slot/Slot.api";

const SlotTable = () => {
  const initialSlot: TypeSlot = {
    _id: "",
    roomName: "",
    date: "",
    startTime: "",
    endTime: "",
  };

  const { data: slotData, isLoading: isSlotLoading } =
    useGetslotQuery(undefined);
  const { data: roomData, isLoading: isRoomLoading } = useGetRoomQuery({});
  const [updateSlot] = useUpdateslotMutation();
  const [deleteSlot] = useDeleteslotMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TypeSlot>(initialSlot);
  const [slots, setSlots] = useState<Record<string, string>>({});

  useEffect(() => {
    if (roomData) {
      const roomMap = roomData.data.reduce(
        (acc: Record<string, string>, room: TypeRoom) => {
          acc[room.name] = room._id as string;
          return acc;
        },
        {}
      );
      setSlots(roomMap);
    }
  }, [roomData]);

  if (isSlotLoading || isRoomLoading) {
    return <p>Loading.......</p>;
  }

  if (!slotData || !roomData) {
    return <p>No data is present</p>;
  }

  const handleUpdate = async (data: TypeSlot) => {
    setSelectedSlot(data);
    setShowUpdateModal(true);
  };

  const handleDelete = async (slotId: string) => {
    if (!slotId) {
      console.error("Invalid slot ID:", slotId);
      await Swal.fire("Invalid slot ID", "", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure you want to delete this slot?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteSlot(slotId).unwrap();
          console.log(res);

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

  const handleSlotUpdate = async (updatedSlot: TypeSlot) => {
    try {
      await updateSlot({
        id: selectedSlot._id as string,
        payload: updatedSlot,
      }).unwrap();
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Update failed:", error);
      await Swal.fire("Failed to update slot", "", "error");
    }
  };

  const FetchRoomName = (roomId: string) => {
    const room = roomData?.data.find((r: TypeRoom) => r._id === roomId);
    return room
      ? { Name: room.name, RoomNo: room.roomNo }
      : { Name: "Unknown Room", RoomNo: "N/A" };
  };

  const columns = [
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Room Name</div>
      ),
      selector: (row: TypeSlot) => row.roomName,
      cell: (row: TypeSlot) => {
        const { Name } = FetchRoomName(row.room as string);
        return <div style={{ fontSize: "1.5rem" }}>{Name}</div>;
      },
    },
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Room No.</div>
      ),
      selector: (row: TypeSlot) => row.roomName,
      cell: (row: TypeSlot) => {
        const { RoomNo } = FetchRoomName(row.room as string);
        return <div style={{ fontSize: "1.5rem" }}>{RoomNo}</div>;
      },
    },
    {
      name: <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Date</div>,
      selector: (row: TypeSlot) => row.date,
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.date}</div>
      ),
    },
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Start Time</div>
      ),
      selector: (row: TypeSlot) => row.startTime,
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.startTime}</div>
      ),
    },
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>End Time</div>
      ),
      selector: (row: TypeSlot) => row.endTime,
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.endTime}</div>
      ),
    },
    {
      cell: (row: TypeSlot) => (
        <button className="btn bg-purple-400" onClick={() => handleUpdate(row)}>
          Update
        </button>
      ),
    },
    {
      cell: (row: TypeSlot) => (
        <button
          className="btn bg-red-600"
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
        <DataTable columns={columns} data={slotData.data} />
      </div>
      <div className="md:hidden">
        {slotData.data.map((row: TypeSlot) => {
          const { Name, RoomNo } = FetchRoomName(row.room as string);

          return (
            <div key={row._id} className="mb-4 p-4 border rounded-lg">
              <div className="text-sm text-gray-500">Room Name: {Name}</div>
              <div className="text-sm text-gray-500">Room No.: {RoomNo}</div>
              <div className="text-sm text-gray-500">Date: {row.date}</div>
              <div className="text-sm text-gray-500">
                Time: {row.startTime} - {row.endTime}
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
          );
        })}
      </div>

      {showUpdateModal && selectedSlot && (
        <UpdateSlotModal
          slot={selectedSlot}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={handleSlotUpdate}
          slots={slots}
        />
      )}
    </div>
  );
};

export default SlotTable;

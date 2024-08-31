import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { useState } from "react";
import { TypeSlot } from "../../../types";
import {
  useAddslotMutation,
  useDeleteslotMutation,
  useGetslotQuery,
  useUpdateslotMutation,
} from "../../../redux/features/Slot/Slot.api";
import UpdateModalSlot from "../../../components/updateModals/UpdateModalSlot";

const Slots = () => {
  const initialSlot: TypeSlot = {
    _id: "",
    roomId: "",
    roomName: "",
    roomNo: 0,
    date: "",
    startTime: "",
    endTime: "",
  };

  const { data, isLoading } = useGetslotQuery({});
  const [addSlot] = useAddslotMutation();
  const [updateSlot] = useUpdateslotMutation();
  const [deleteSlot] = useDeleteslotMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TypeSlot>(initialSlot);

  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (!data) {
    return <p>No data is present</p>;
  }

  const handleUpdate = (slot: TypeSlot) => {
    setSelectedSlot(slot);
    setShowUpdateModal(true);
  };

  const handleDelete = async (slotId: string) => {
    if (!slotId) {
      console.error("Invalid Slot ID:", slotId);
      await Swal.fire("Invalid Slot ID", "", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure you want to delete this Slot?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteSlot(slotId).unwrap();
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

  const handleAdd = async (newSlot: TypeSlot) => {
    try {
      await addSlot(newSlot).unwrap();
      Swal.fire("Slot Added Successfully!", "", "success");
    } catch (error) {
      console.error("Failed to add slot:", error);
      Swal.fire("Failed to add slot!", "", "error");
    }
  };

  const tdata = data.data;

  const columns = [
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Room Name</div>
      ),
      selector: (row: TypeSlot) => row.roomName || "N/A",
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.roomName || "N/A"}</div>
      ),
    },
    {
      name: <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Room No</div>,
      selector: (row: TypeSlot) => row.roomNo ?? 0,
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.roomNo ?? 0}</div>
      ),
    },
    {
      name: <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Date</div>,
      selector: (row: TypeSlot) => row.date || "N/A",
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.date || "N/A"}</div>
      ),
    },
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Start Time</div>
      ),
      selector: (row: TypeSlot) => row.startTime || "N/A",
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.startTime || "N/A"}</div>
      ),
    },
    {
      name: (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>End Time</div>
      ),
      selector: (row: TypeSlot) => row.endTime || "N/A",
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.5rem" }}>{row.endTime || "N/A"}</div>
      ),
    },
    {
      cell: (row: TypeSlot) => (
        <button
          className="btn bg-purple-400 py-2 px-4 rounded"
          onClick={() => handleUpdate(row)}
        >
          Update
        </button>
      ),
    },
    {
      cell: (row: TypeSlot) => (
        <button
          className="btn bg-red-600 py-2 px-4 rounded"
          onClick={() => handleDelete(row._id as string)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="p-4">
      {/* Add Button - Desktop View */}
      <div className="hidden md:flex justify-end mb-4">
        <button
          className="btn bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => handleAdd({ ...initialSlot })}
        >
          Add Slot
        </button>
      </div>

      {/* DataTable */}
      <div className="hidden md:block">
        <DataTable columns={columns} data={tdata} />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {tdata.map((row: TypeSlot) => (
          <div key={row._id} className="mb-4 p-4 border rounded-lg">
            <div className="text-lg font-bold">{row.roomName || "N/A"}</div>
            <div className="text-sm text-gray-500">
              Room No: {row.roomNo ?? 0}
            </div>
            <div className="text-sm text-gray-500">
              Date: {row.date || "N/A"}
            </div>
            <div className="text-sm text-gray-500">
              Start Time: {row.startTime || "N/A"}
            </div>
            <div className="text-sm text-gray-500">
              End Time: {row.endTime || "N/A"}
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

      {/* Add Button - Mobile View */}
      <div className="flex md:hidden justify-center mb-4">
        <button
          className="btn bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => handleAdd({ ...initialSlot })}
        >
          Add Slot
        </button>
      </div>

      {/* UpdateModalSlot */}
      {showUpdateModal && selectedSlot && (
        <UpdateModalSlot
          slot={selectedSlot}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={async (updatedSlot: TypeSlot) => {
            try {
              await updateSlot({
                id: selectedSlot._id as string,
                payload: updatedSlot,
              }).unwrap();
              setShowUpdateModal(false);
            } catch (error) {
              console.error("Update failed:", error);
              await Swal.fire("Failed to update Slot", "", "error");
            }
          }}
        />
      )}
    </div>
  );
};

export default Slots;

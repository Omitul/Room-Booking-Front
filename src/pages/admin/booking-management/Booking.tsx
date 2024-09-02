import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import {
  useDeleteBookingsMutation,
  useGetBookingsQuery,
  useUpdateBookingsMutation,
} from "../../../redux/features/Booking/Booking.api";

/// declaring types here , dont have to see the index again and again
type TypeRoom = {
  _id?: string;
  name: string;
  image: string[];
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted?: boolean;
};

type TypeSlot = {
  isConfirmed: string;
  userName: string;
  _id: string;
  room?: TypeRoom;
  roomName: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: boolean;
};

type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
};

type DataItem = {
  _id: string;
  room: TypeRoom;
  user: User;
  date: string;
  isConfirmed: string;
  slots: TypeSlot[];
};

const transformData = (data: DataItem[]): TypeSlot[] =>
  data.flatMap((booking) =>
    booking.slots.map((slot) => ({
      _id: booking._id,
      roomName: booking.room.name,
      userName: booking.user.name,
      date: slot.date,
      startTime: slot.startTime,
      endTime: slot.endTime,
      isConfirmed: booking.isConfirmed,
    }))
  );
const Booking = () => {
  const { data, isLoading, refetch } = useGetBookingsQuery({});
  const [updateBooking] = useUpdateBookingsMutation();
  const [deleteBooking] = useDeleteBookingsMutation();

  if (isLoading) {
    return <p className="text-center text-xl">Loading.......</p>;
  }

  if (!data || !data.data) {
    return <p className="text-center text-xl">No data is present</p>;
  }

  const transformedData = transformData(data.data);

  const handleApprove = async (id: string) => {
    try {
      await updateBooking({
        id,
        payload: { isConfirmed: "confirmed" },
      }).unwrap();

      Swal.fire("Booking Approved!", "", "success");
      refetch();
    } catch (error) {
      console.error("Failed to approve booking:", error);
      Swal.fire("Failed to approve booking", "", "error");
    }
  };

  const handleReject = async (id: string) => {
    try {
      await updateBooking({
        id,
        payload: { isConfirmed: "canceled" },
      }).unwrap();
      Swal.fire("Booking Rejected!", "", "success");
      refetch();
    } catch (error) {
      console.error("Failed to reject booking:", error);
      Swal.fire("Failed to reject booking", "", "error");
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await deleteBooking(id).unwrap();
        Swal.fire("Booking Deleted!", "", "success");
        refetch();
      } catch (error) {
        console.error("Failed to delete booking:", error);
        Swal.fire("Failed to delete booking", "", "error");
      }
    }
  };

  const columns = [
    {
      name: "Room Name",
      selector: (row: TypeSlot) => row.roomName,
      cell: (row: TypeSlot) => <div className="text-lg">{row.roomName}</div>,
    },
    {
      name: "User Name",
      selector: (row: TypeSlot) => row.userName,
      cell: (row: TypeSlot) => <div className="text-lg">{row.userName}</div>,
    },
    {
      name: "Date",
      selector: (row: TypeSlot) => row.date,
      cell: (row: TypeSlot) => <div className="text-lg">{row.date}</div>,
    },
    {
      name: "Start Time",
      selector: (row: TypeSlot) => row.startTime,
      cell: (row: TypeSlot) => <div className="text-lg">{row.startTime}</div>,
    },
    {
      name: "End Time",
      selector: (row: TypeSlot) => row.endTime,
      cell: (row: TypeSlot) => <div className="text-lg">{row.endTime}</div>,
    },
    {
      name: "Status",
      selector: (row: TypeSlot) => row.isConfirmed,
      cell: (row: TypeSlot) => (
        <div className="text-lg">
          {row.isConfirmed === "confirmed" ? (
            <span className="text-green-500 font-bold">Confirmed</span>
          ) : row.isConfirmed === "canceled" ? (
            <span className="text-red-500 font-bold">Canceled</span>
          ) : (
            <span className="text-yellow-500 font-bold">Unconfirmed</span>
          )}
        </div>
      ),
    },
    {
      cell: (row: TypeSlot) => (
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            className="btn bg-green-500 text-white py-2 px-3"
            onClick={() => handleApprove(row._id as string)}
          >
            Approve
          </button>
          <button
            className="btn bg-yellow-500 text-white py-2 px-3"
            onClick={() => handleReject(row._id as string)}
          >
            Reject
          </button>
          <button
            className="btn bg-red-500 text-white py-2 px-3"
            onClick={() => row._id && handleDelete(row._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 overflow-x-auto">
      <DataTable
        columns={columns}
        data={transformedData}
        responsive
        highlightOnHover
        pointerOnHover
        noDataComponent="No bookings available"
        className="text-lg"
      />
    </div>
  );
};

export default Booking;

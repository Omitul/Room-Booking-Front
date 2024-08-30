import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import {
  useGetBookingsQuery,
  useUpdateBookingsMutation,
} from "../../../redux/features/Booking/Booking.api";
import { DataItem } from "../../../types";

type BookingPayload = {
  isConfirmed: string;
};

const Booking = () => {
  const { data, isLoading } = useGetBookingsQuery({});
  const [updateBooking] = useUpdateBookingsMutation();

  if (isLoading) {
    return <p>Loading.......</p>;
  }
  console.log("Room", data.data[0].room);

  if (!data) {
    return <p>No data is present</p>;
  }

  const handleApprove = async (id: string) => {
    try {
      const res = await updateBooking({
        id,
        payload: { isConfirmed: "confirmed" },
      }).unwrap();
      Swal.fire("Booking Approved!", "", "success");
      console.log(res);
    } catch (error) {
      console.error("Failed to approve:", error);
      Swal.fire("Failed to approve booking", "", "error");
    }
  };

  const handleReject = async (id: string) => {
    try {
      const res = await updateBooking({
        id,
        payload: { isConfirmed: "unconfirmed" },
      }).unwrap();
      Swal.fire("Booking Rejected!", "", "success");
      console.log(res);
    } catch (error) {
      console.error("Failed to reject:", error);
      Swal.fire("Failed to reject booking", "", "error");
    }
  };

  const columns = [
    {
      name: <div className="text-2xl font-semibold">Room name</div>,
      selector: (row: DataItem) => row.room.name,
      cell: (row: DataItem) => <div className="text-lg">{row.room?.name}</div>,
    },
    {
      name: <div className="text-2xl font-semibold">User name</div>,
      selector: (row: DataItem) => row.user.name,
      cell: (row: DataItem) => <div className="text-lg">{row.user.name}</div>,
    },
    {
      name: <div className="text-2xl font-semibold">Date</div>,
      selector: (row: DataItem) => `${row.date}`,
      cell: (row: DataItem) => <div className="text-lg">{`${row.date}`}</div>,
    },
    {
      name: <div className="text-2xl font-semibold">Status</div>,
      selector: (row: DataItem) => row.isConfirmed,
      cell: (row: DataItem) => (
        <div className="text-lg">
          {row.isConfirmed === "confirmed" ? (
            <span className="text-green-500 font-bold">Confirmed</span>
          ) : (
            <span className="text-red-500 font-bold">Unconfirmed</span>
          )}
        </div>
      ),
    },
    {
      cell: (row: DataItem) => (
        <div>
          <button
            className="btn bg-green-500 mr-2"
            onClick={() => handleApprove(row._id)}
          >
            Approve
          </button>
          <button
            className="btn bg-yellow-500 mr-2"
            onClick={() => handleReject(row._id)}
          >
            Reject
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <DataTable columns={columns} data={data.data} />
    </div>
  );
};

export default Booking;

import DataTable from "react-data-table-component";
import { useGetslotQuery } from "../../redux/features/Slot/Slot.api";
import { TypeSlot } from "../../types";

const MyBookings = () => {
  const { data: slots, isLoading, isError } = useGetslotQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !slots) {
    return <p>Error loading slots.</p>;
  }

  const columns = [
    {
      name: "Room Name",
      selector: (row: TypeSlot) => row.room?.name ?? "",
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.2rem" }}>{row.room?.name}</div>
      ),
      style: { fontSize: "1.2rem", fontWeight: "bold" },
    },
    {
      name: "Room No",
      selector: (row: TypeSlot) => row.room?.roomNo ?? "",
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.2rem" }}>{row.room?.roomNo}</div>
      ),
      style: { fontSize: "1.2rem", fontWeight: "bold" },
    },
    {
      name: "Date",
      selector: (row: TypeSlot) => row.date,
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.2rem" }}>{row.date}</div>
      ),
      style: { fontSize: "1.2rem", fontWeight: "bold" },
    },
    {
      name: "Time",
      selector: (row: TypeSlot) => `${row.startTime} - ${row.endTime}`,
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.2rem" }}>
          {row.startTime} - {row.endTime}
        </div>
      ),
      style: { fontSize: "1.2rem", fontWeight: "bold" },
    },
    {
      name: "Status",
      selector: (row: TypeSlot) => row.isConfirmed,
      cell: (row: TypeSlot) => (
        <div style={{ fontSize: "1.2rem" }}>
          {row.isConfirmed === "confirmed" ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              Confirmed
            </span>
          ) : row.isConfirmed === "canceled" ? (
            <span style={{ color: "red", fontWeight: "bold" }}>Canceled</span>
          ) : (
            <span style={{ color: "orange", fontWeight: "bold" }}>
              Unconfirmed
            </span>
          )}
        </div>
      ),
      style: { fontSize: "1.2rem", fontWeight: "bold" },
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center font-mono">
        My Bookings
      </h1>
      <DataTable
        columns={columns}
        data={slots.data}
        highlightOnHover
        responsive
        customStyles={{
          headCells: {
            style: {
              fontSize: "1.2rem",
            },
          },
          cells: {
            style: {
              fontSize: "1.2rem",
            },
          },
        }}
      />
    </div>
  );
};

export default MyBookings;

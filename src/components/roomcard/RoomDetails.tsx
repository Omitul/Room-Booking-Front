import { useNavigate } from "react-router-dom";
import { TRoom } from "../../types";

type RoomDetailsProps = {
  room: TRoom;
};

const RoomDetails: React.FC<RoomDetailsProps> = ({ room }) => {
  const { image, name, capacity, pricePerSlot } = room;

  const navigate = useNavigate();
  const handleSeeDetails = () => {
    navigate("/details-room", { state: room });
  };

  return (
    <div className="p-4 md:p-6">
      <div className="card bg-base-100 shadow-xl flex flex-col md:flex-row">
        <figure className="w-full md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-64 md:h-96 object-cover"
          />
        </figure>
        <div className="card-body p-4 md:p-6">
          <h2 className="card-title text-2xl md:text-5xl">{name}</h2>
          <p className="text-gray-700 text-lg md:text-4xl  font-bold mt-12">
            <span className="text-gray-900 font-serif font-semibold">
              Capacity:{" "}
            </span>
            {capacity}
          </p>
          <p className="text-lg md:text-4xl">
            <div className="flex flex-1">
              <span className="text-gray-900 font-serif font-semibold">
                Price Per Slot:{" "}
              </span>
              <span className="ml-2">{pricePerSlot}</span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="40"
                width="40"
              >
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
          </p>

          <div className="card-actions flex justify-end">
            <button
              onClick={handleSeeDetails}
              className="btn btn-primary px-4 py-2 text-lg md:text-xl"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

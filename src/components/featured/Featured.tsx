import { useNavigate } from "react-router-dom";
import RoomCard from "../../components/roomcard/RoomDetails";
import { useGetRoomQuery } from "../../redux/features/Room/Room.api";
import { TRoom } from "../../types";

const Featured = () => {
  const { data, isLoading } = useGetRoomQuery(undefined);

  if (isLoading) {
    <p className="text-2xl text-center text-black-500"> Loading...</p>;
  }

  console.log(data);
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate("/meeting-room");
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          {data ? (
            data.data
              .slice(0, 6)
              .map((room: TRoom) => <RoomCard key={room._id} room={room} />)
          ) : (
            <p className="text-2xl text-center text-black-500">No Room found</p>
          )}
        </div>
      </div>
      <div className="card-actions flex justify-center">
        <button
          onClick={handleSeeMore}
          className="btn btn-primary px-4 py-2 text-lg md:text-xl"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Featured;

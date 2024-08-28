import RoomCard from "../../components/roomcard/RoomDetails";
import { useGetRoomQuery } from "../../redux/features/Room/Room.api";
import { TRoom } from "../../types";

const MeetingRoom = () => {
  const { data, isLoading } = useGetRoomQuery(undefined);

  if (isLoading) {
    <p className="text-2xl text-center text-black-500"> Loading...</p>;
  }

  console.log(data);

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          {data ? (
            data.data.map((room: TRoom) => (
              <RoomCard key={room._id} room={room} />
            ))
          ) : (
            <p className="text-2xl text-center text-black-500">No Room found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;

import { useState, useEffect } from "react";
import { useGetRoomQuery } from "../../redux/features/Room/Room.api";
import { TRoom } from "../../types";
import RoomCard from "../../components/roomcard/RoomDetails";

const MeetingRoom = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { data, isLoading, error } = useGetRoomQuery({
    searchTerm: isSearchActive ? searchTerm : "",
    sortOption,
  });

  useEffect(() => {
    if (!isSearchActive) {
      setSearchTerm("");
      setSortOption("");
    }
  }, [isSearchActive]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setIsSearchActive(true);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortOption("");
    setIsSearchActive(false);
  };

  if (isLoading) {
    return <p className="text-2xl text-center text-black-500">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-2xl text-center text-black-500">No rooms found</p>
    );
  }

  return (
    <div>
      <div className="flex justify-end mt-5 mr-5">
        <div className="flex flex-row gap-x-3">
          <div>
            <input
              type="text"
              placeholder="Search by name or location"
              value={searchTerm}
              onChange={handleSearchChange}
              className="input"
            />
          </div>
          <div>
            <button onClick={handleSearchClick} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start w-28 gap-x-10 ml-10">
        <button onClick={handleClearFilters} className="btn btn-primary">
          Clear Filter
        </button>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 rounded-lg bg-gray-700 text-white w-60"
        >
          <option value="priceAscending">Price: Low to High</option>
          <option value="priceDescending">Price: High to Low</option>
          <option value="0">Default</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        {data && data.data.length > 0 ? (
          data.data.map((room: TRoom) => (
            <RoomCard key={room._id} room={room} />
          ))
        ) : (
          <p className="text-2xl text-center text-black-500">No rooms found</p>
        )}
      </div>
    </div>
  );
};

export default MeetingRoom;

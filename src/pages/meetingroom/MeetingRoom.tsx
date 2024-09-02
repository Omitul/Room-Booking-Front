import { useState, useEffect } from "react";
import { useGetRoomQuery } from "../../redux/features/Room/Room.api";
import { TRoom } from "../../types";
import RoomCard from "../../components/roomcard/RoomDetails";

const MeetingRoom = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(1000000);

  const { data, isLoading, error } = useGetRoomQuery({
    searchTerm: isSearchActive ? searchTerm : "",
    sortOption,
  });

  const filteredData = data?.data.filter(
    (room: TRoom) =>
      room.pricePerSlot >= minPrice &&
      room.pricePerSlot <= maxPrice &&
      room.capacity >= minCapacity &&
      room.capacity <= maxCapacity
  );

  useEffect(() => {
    if (!isSearchActive) {
      setSearchTerm("");
      setSortOption("");
      setMinPrice(0);
      setMaxPrice(1000000);
      setMinCapacity(0);
      setMaxCapacity(1000000);
    }
  }, [isSearchActive]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);
  const handleSearchClick = () => setIsSearchActive(true);
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setIsSearchActive(true);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortOption("");
    setMinPrice(0);
    setMaxPrice(1000000);
    setMinCapacity(0);
    setMaxCapacity(1000000);
    setIsSearchActive(false);
  };
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "minPrice") setMinPrice(Number(value));
    if (name === "maxPrice") setMaxPrice(Number(value));
  };
  const handleCapacityRangeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === "minCapacity") setMinCapacity(Number(value));
    if (name === "maxCapacity") setMaxCapacity(Number(value));
  };

  if (isLoading)
    return <p className="text-2xl text-center text-black-500">Loading...</p>;
  if (error)
    return (
      <p className="text-2xl text-center text-black-500">No rooms found</p>
    );

  return (
    <div>
      <div className="flex justify-end mt-5 mr-5">
        <div className="flex flex-row gap-x-3">
          <input
            type="text"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={handleSearchChange}
            className="input"
          />
          <button onClick={handleSearchClick} className="btn btn-primary">
            Search
          </button>
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
          <option value="0">Default</option>
          <option value="priceAscending">Price: Low to High</option>
          <option value="priceDescending">Price: High to Low</option>
        </select>
      </div>
      <div className="flex flex-row justify-start w-28 gap-x-10 ml-10 mt-5">
        <div className="flex flex-col gap-y-2">
          <label>Price Range:</label>
          <input
            type="number"
            name="minPrice"
            value={minPrice}
            onChange={handlePriceRangeChange}
            placeholder="Min Price"
            className="p-2 rounded-lg bg-gray-700 text-white"
          />
          <input
            type="number"
            name="maxPrice"
            value={maxPrice}
            onChange={handlePriceRangeChange}
            placeholder="Max Price"
            className="p-2 rounded-lg bg-gray-700 text-white"
          />
        </div>
        <div className="flex flex-col gap-y-2 ml-5">
          <label>Capacity Range:</label>
          <input
            type="number"
            name="minCapacity"
            value={minCapacity}
            onChange={handleCapacityRangeChange}
            placeholder="Min Capacity"
            className="p-2 rounded-lg bg-gray-700 text-white"
          />
          <input
            type="number"
            name="maxCapacity"
            value={maxCapacity}
            onChange={handleCapacityRangeChange}
            placeholder="Max Capacity"
            className="p-2 rounded-lg bg-gray-700 text-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((room: TRoom) => (
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

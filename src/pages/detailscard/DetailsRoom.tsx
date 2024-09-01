import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { TypeRoom } from "../../types";

const DetailsRoom = () => {
  const location = useLocation();
  const room = location.state as TypeRoom;
  const { name, image, roomNo, floorNo, capacity, pricePerSlot, amenities } =
    room;

  const navigate = useNavigate();

  const handleAddToCart = () => {
    Swal.fire({
      icon: "info",
      title: "Room Selection",
      text: "Room selection is now available. Click 'See Details' to proceed.",
      confirmButtonText: "See Details",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart", { state: room });
      }
    });
  };

  return (
    <div className="mb-8 p-12 md:p-6 lg:p-8">
      <div className="border border-gray-300 rounded-lg shadow-xl bg-green-300">
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row p-4 md:p-8 lg:p-12">
          <figure className="w-full md:w-1/2 md:pr-8 lg:pr-16">
            <div className="grid grid-cols-2 gap-4">
              {image.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  className="w-full h-auto object-cover rounded-md"
                  alt={`${name} image ${index + 1}`}
                />
              ))}
            </div>
          </figure>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-6xl mb-4">{name}</h2>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Room No:</span> {roomNo}
            </p>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Floor No:</span> {floorNo}
            </p>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Capacity:</span> {capacity} guests
            </p>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Price Per Slot:</span> $
              {pricePerSlot}
            </p>
            <p className="mb-4 text-xl md:text-2xl">
              <span className="font-semibold">Amenities:</span>
              <ul className="list-disc list-inside text-gray-600 text-sm md:text-base">
                {amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </p>

            <div className="mt-4 md:mt-8">
              <button onClick={handleAddToCart} className="btn btn-primary">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRoom;

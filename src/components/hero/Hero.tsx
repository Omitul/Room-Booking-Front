import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center h-[60vh] bg-cover bg-center"
      style={{
        height: "60vh",
        backgroundImage: `url('https://i.postimg.cc/PJZHLndg/office-meeting-room-2d-web-banner-poster-vector-41115399.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 py-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Book Your Ideal Meeting Room with Ease.
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Efficient, hassle-free room booking for all your meeting needs.
        </p>
        <Link
          to="/meeting-room"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

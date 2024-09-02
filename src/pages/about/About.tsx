const AboutUs = () => {
  return (
    <div className="about-us-container p-6 md:p-10 lg:p-20 bg-gray-50">
      <section className="our-mission mb-10 bg-blue-100 p-6 md:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fadeIn">
          Our Mission
        </h2>
        <p className="text-base md:text-lg lg:text-xl">
          We are dedicated to providing exceptional meeting room experiences,
          facilitating seamless bookings, and fostering productive environments
          for businesses of all sizes. Our mission is to simplify the meeting
          room booking process and deliver unparalleled customer service.
        </p>
      </section>

      <section className="meet-the-team mb-10 bg-green-100 p-6 md:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fadeIn">
          Meet the Team
        </h2>
        <div className="team-members flex flex-wrap gap-6 justify-center">
          <div className="team-member w-full md:w-64 lg:w-80 text-center transition-transform transform hover:scale-105">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-4 transition-transform transform hover:rotate-12"
            />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold animate-fadeIn">
              Jane Doe
            </h3>
            <p className="text-sm md:text-base text-gray-500">CEO & Founder</p>
          </div>
          <div className="team-member w-full md:w-64 lg:w-80 text-center transition-transform transform hover:scale-105">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-4 transition-transform transform hover:rotate-12"
            />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold animate-fadeIn">
              John Smith
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Chief Operating Officer
            </p>
          </div>
          <div className="team-member w-full md:w-64 lg:w-80 text-center transition-transform transform hover:scale-105">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-4 transition-transform transform hover:rotate-12"
            />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold animate-fadeIn">
              Emily Johnson
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Head of Marketing
            </p>
          </div>
        </div>
      </section>

      <section className="our-story bg-yellow-100 p-6 md:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fadeIn">
          Our Story
        </h2>
        <p className="text-base md:text-lg lg:text-xl">
          Founded in 2020, our company started with a vision to transform the
          way businesses book meeting rooms. With a commitment to innovation and
          excellence, we have evolved to offer cutting-edge solutions and
          unmatched service. Our story is one of growth, dedication, and a
          relentless pursuit of providing the best meeting room experiences.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

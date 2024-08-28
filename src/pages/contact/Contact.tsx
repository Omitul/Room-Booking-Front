const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-red-100 to-green-200 min-h-screen">
      <section className="bg-white shadow-lg rounded-lg p-8 mb-6 w-full max-w-lg border border-gray-300 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Contact Information
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          <strong className="text-blue-700">Email:</strong>
          <a
            href="mailto:contact@yourcompany.com"
            className="text-blue-600 hover:underline"
          >
            contact@meetingroom.com
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong className="text-blue-700">Phone:</strong>
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            {" "}
            (123) 456-7890
          </a>
        </p>
        <p className="text-lg text-gray-700">
          <strong className="text-blue-700">Office Address:</strong> 123
          Business St., Suite 456, City, State, ZIP
        </p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border border-gray-300 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-lg font-semibold text-gray-800 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-blue-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-lg font-semibold text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 bg-green-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-lg font-semibold text-gray-800 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 bg-yellow-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-lg font-semibold text-gray-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 bg-pink-50 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;

import { useEffect, useState } from "react";

const CustomerTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("customerReview.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        return response.json();
      })
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const getTestimonial = (index: number) => {
    if (testimonials.length > index && index >= 0) {
      const { name, role, testimonial, image } = testimonials[index];
      return { name, role, testimonial, image };
    } else return null;
  };

  const testimonial1 = getTestimonial(0);
  const testimonial2 = getTestimonial(1);
  const testimonial3 = getTestimonial(2);
  const testimonial4 = getTestimonial(3);

  return (
    <div className="p-4">
      <div>
        <h1 className="text-4xl text-center mb-4 font-bold mt-16">
          Customer Reviews
        </h1>
      </div>
      <div className="carousel w-full bg-gray-800">
        <div
          id="slide1"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <img
                src={testimonial1?.image}
                className="w-full h-96 object-cover"
                alt={testimonial1?.name}
              />
            </div>
            <div className="flex-1 border border-gray-300 bg-black p-4">
              <p className="text-white text-xl font-bold">
                {testimonial1?.name}
              </p>
              <p className="text-white text-lg">{testimonial1?.role}</p>
              <p className="text-white mt-2">{testimonial1?.testimonial}</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <img
                src={testimonial2?.image}
                className="w-full h-96 object-cover"
                alt={testimonial2?.name}
              />
            </div>
            <div className="flex-1 border border-gray-300 bg-black p-4">
              <p className="text-white text-xl font-bold">
                {testimonial2?.name}
              </p>
              <p className="text-white text-lg">{testimonial2?.role}</p>
              <p className="text-white mt-2">{testimonial2?.testimonial}</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <img
                src={testimonial3?.image}
                className="w-full h-96 object-cover"
                alt={testimonial3?.name}
              />
            </div>
            <div className="flex-1 border border-gray-300 bg-black p-4">
              <p className="text-white text-xl font-bold">
                {testimonial3?.name}
              </p>
              <p className="text-white text-lg">{testimonial3?.role}</p>
              <p className="text-white mt-2">{testimonial3?.testimonial}</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide4"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <img
                src={testimonial4?.image}
                className="w-full h-96 object-cover"
                alt={testimonial4?.name}
              />
            </div>
            <div className="flex-1 border border-gray-300 bg-black p-4">
              <p className="text-white text-xl font-bold">
                {testimonial4?.name}
              </p>
              <p className="text-white text-lg">{testimonial4?.role}</p>
              <p className="text-white mt-2">{testimonial4?.testimonial}</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;

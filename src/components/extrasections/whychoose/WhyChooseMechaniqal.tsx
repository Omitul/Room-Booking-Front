const WhyChooseMechaniqal = () => {
  return (
    <div className="flex flex-col text-center p-4 md:p-6 lg:p-8">
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl md:text-2xl font-medium">
          Why Choose Us?
        </div>
        <div className="collapse-content">
          <p className="text-left md:text-start font-bold text-gray-500 text-sm md:text-base">
            Choose us for your meeting room needs and benefit from our seamless
            booking system and exceptional customer service. Our
            state-of-the-art spaces are designed to ensure your meetings are
            productive and hassle-free, every time.
          </p>
        </div>
      </div>

      <div className="collapse bg-base-200 mt-4 md:mt-6 lg:mt-8">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl md:text-2xl font-medium">
          What Makes Our Service Stand Out?
        </div>
        <div className="collapse-content">
          <p className="text-left md:text-start font-bold text-gray-500 text-sm md:text-base">
            What makes our service stand out is our commitment to providing a
            streamlined and intuitive booking experience coupled with top-tier,
            well-equipped meeting spaces. We prioritize your convenience and
            satisfaction, ensuring every meeting is a success with minimal
            hassle and maximum efficiency
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMechaniqal;

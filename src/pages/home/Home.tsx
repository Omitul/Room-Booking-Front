import Advertisement from "../../components/advertisement/Advertisement";
import CustomerReview from "../../components/customerReview/CustomerReview";
import HowItWorks from "../../components/extrasections/whychoose/HowItWorks";
import WhyChooseMechaniqal from "../../components/extrasections/whychoose/WhyChooseMechaniqal";
import Featured from "../../components/featured/Featured";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Advertisement></Advertisement>
      <Featured></Featured>
      <HowItWorks></HowItWorks>
      <CustomerReview></CustomerReview>
      <WhyChooseMechaniqal></WhyChooseMechaniqal>
    </div>
  );
};

export default Home;

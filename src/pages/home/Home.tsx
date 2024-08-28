import Advertisement from "../../components/advertisement/Advertisement";
import WhyChooseMechaniqal from "../../components/extrasections/whychoose/WhyChooseMechaniqal";
import Featured from "../../components/featured/Featured";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Advertisement></Advertisement>
      <Featured></Featured>
      <WhyChooseMechaniqal></WhyChooseMechaniqal>
    </div>
  );
};

export default Home;

import FAQ from "../components/FAQ";
import HomeHero from "../components/HomeHero";
import Metrics from "../components/Metrics";
import Courses from "../components/Courses";
import ContactUs from "../components/ContactUs";
import PricePlan from "../components/Pricing";
import MentorShip from "../components/MentorShip";

const Home = () => {
  return (
    <div className="w-screen ">
      <HomeHero></HomeHero>
      <Courses></Courses>
      <MentorShip></MentorShip>
      <Metrics></Metrics>

      <PricePlan></PricePlan>
      <FAQ></FAQ>
      <ContactUs></ContactUs>

    </div>
  );
};

export default Home;

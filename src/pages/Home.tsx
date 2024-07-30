import FAQ from "../components/FAQ";
import HomeHero from "../components/HomeHero";
import NavBar from "../components/Header";
import Metrics from "../components/Metrics";
import Courses from "../components/Courses";
import ContactUs from "../components/ContactUs";
import PricePlan from "../components/Pricing";
import Footer from "../components/Footer";
import MentorShip from "../components/MentorShip";

const Home = () => {
  return (
    <div className="w-screen ">
      <NavBar></NavBar>
      <HomeHero></HomeHero>
      <Courses></Courses>
      <MentorShip></MentorShip>
      <Metrics></Metrics>

      <PricePlan></PricePlan>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;

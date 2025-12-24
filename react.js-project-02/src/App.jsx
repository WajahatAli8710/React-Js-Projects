import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import Services from "./components/Services";
import TrainerDetails from "./components/TrainerDetails";

const App = () => {
  return <div className="main">
    <Navbar/>
    <HeroSection />
    <AboutSection />
    <TrainerDetails />
    <Rating />
    <Services />
  </div>;
};

export default App;

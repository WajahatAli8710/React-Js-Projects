import About from "./components/About";
import Advantages from "./components/Advantages";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Quality from "./components/Quality";
import Rating from "./components/Rating";

const App = () => {
  return (
    <div className=" bg-[#010100] h-fit flex flex-col p-4 gap-4">
      <Navbar />
      <HeroSection />
      <Card />
      <Rating />
      <About />
      <Advantages />
      <Quality />
    </div>
  );
};

export default App;

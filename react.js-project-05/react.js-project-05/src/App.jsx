import HeroSection from "./components/HeroSection"
import SearchBar from "./components/SearchBar"
import SideBar from "./components/SideBar"
import ShowVideos from "./components/ShowVideos"


const App = () => {
  return (
    <div className="app">
      <SideBar />
      <SearchBar /> 
      <HeroSection />
      <ShowVideos />
    </div>
  )
}

export default App

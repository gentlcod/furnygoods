import LeftSide from "./components/LeftSide"
import Navbar from "./components/Navbar"
import ScrollToUpBtn from "./components/ScrollToUpBtn"
import Home from "./components/Home"
import Catalogue from "./components/Catalogue"
import Rating from "./components/Rating"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <div className='flex'>
        {/* Left side - sticky */}
        <div className="sticky top-0 h-screen z-30">
          <LeftSide />
        </div>

        {/* Right side - fixed navbar */}
        <div className="flex-1 relative">
          <div className="bg-[#2f2f2f] pb-3 md:bg-[#ffffff] fixed top-0 w-full z-20">
            <Navbar />
          </div>

            <Home />
            <Catalogue />
            <Rating />
            <Contact />
            <ScrollToUpBtn />

        </div>
      </div>
    </>
  );
}

export default App;



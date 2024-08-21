import LeftSide from "./components/LeftSide"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Catalogue from "./components/Catalogue"
import Rating from "./components/Rating"
import Contact from "./components/Contact"

function App() {

  return (
    <>
     <div className='flex'>
      {/* Left side - sticky */}
      <div className="mt-[-1.5rem] sticky top-0 h-screen">
        <LeftSide />
      </div>
      
      {/* Right side - scrollable */}
    <Navbar/>

    <Home />
    <Catalogue />
    <Rating />
    <Contact />
    
    </div>
    </>
  )
}

export default App

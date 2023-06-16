import Navbar from "./components/Navbar/Navbar";
import SliderComponent from "./components/Slider/Slider";
import AboutUs from "./components/About/AboutUs";
import Booking from "./components/Booking/Booking";
import StepByStep from "./components/StepByStep/StepByStep";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SliderComponent />
      <AboutUs />
      <Booking />
      <StepByStep />
      <Footer />
    </>
  );
}

export default App;

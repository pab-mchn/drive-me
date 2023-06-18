import Navbar from "./components/Navbar/Navbar";
import SliderComponent from "./components/Slider/Slider";
import AboutUs from "./components/About/AboutUs";
import Footer from "./components/Footer/Footer";
import ContextProvider from "./components/context/Context";
import Description from "./components/Description/Description";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <SliderComponent />
      <AboutUs />
      <Description/>
      <Footer />
    </ContextProvider>
  );
}

export default App;

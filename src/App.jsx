import Navbar from "./components/Navbar/Navbar";
import SliderComponent from "./components/Slider/Slider";
import AboutUs from "./components/About/AboutUs";
import Footer from "./components/Footer/Footer";

import { ContextProvider } from "./components/context/Context";
function App() {
  return (
    <ContextProvider>
      <Navbar />
      <SliderComponent />
      <AboutUs />
      <Footer />
    </ContextProvider>
  );
}

export default App;

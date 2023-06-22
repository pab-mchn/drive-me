import Navbar from "../Navbar/Navbar";
import SliderComponent from "../Slider/Slider";
import AboutUs from "../About/AboutUs";
import Footer from "../Footer/Footer";
import ContextProvider from "../context/Context";
import Description from "../Description/Description";

const Home = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <SliderComponent />
        <AboutUs />
        <Description />
        <Footer />
      </ContextProvider>
    </>
  );
};

export default Home;

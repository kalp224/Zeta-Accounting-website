import Navbar from "./component/Navbar"
import './App.css';
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import OurServices from "./component/OurServices";
import Reviews from "./component/Reviews";
import Contactus from "./component/Contactus";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <OurServices />
      <Reviews />
      <Contactus />
      <Footer />

    </div>
  );
}

export default App;

import { Fragment } from "react";
import NavBar from "./componets/NavBar";
// import Hero from "./componets/Hero";
// import Divider from "./componets/Divider";
// import Footer from "./componets/Footer";
import ShuffleHero from "./componets/ShuffleHero";
import Gallery from "./componets/Gallery";
import Features from "./componets/Features";
import SimpleFooter from "./componets/SimpleFooter";
import FloatingNavBar from "./componets/FloatingNavBar";
import Clients from "./componets/Clients";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <FloatingNavBar />
      {/* <Hero /> */}
      <ShuffleHero />
      {/* <Divider /> */}
      <Features />
      <Clients />
      <Gallery />
      <SimpleFooter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

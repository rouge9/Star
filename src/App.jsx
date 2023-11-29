import { Fragment } from "react";
import NavBar from "./componets/NavBar";
// import Hero from "./componets/Hero";
// import Divider from "./componets/Divider";
// import Footer from "./componets/Footer";
import ShuffleHero from "./componets/ShuffleHero";
import Gallery from "./componets/Gallery";
import Features from "./componets/Features";
import SimpleFooter from "./componets/SimpleFooter";
// import FloatingNavBar from "./componets/FloatingNavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      {/* <FloatingNavBar /> */}
      {/* <Hero /> */}
      <ShuffleHero />
      {/* <Divider /> */}
      <Features />
      <Gallery />
      <SimpleFooter />
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;

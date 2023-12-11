// import { Fragment } from "react";
// import NavBar from "./componets/NavBar";
// import Hero from "./componets/Hero";
// import Divider from "./componets/Divider";
// import Footer from "./componets/Footer";
import ShuffleHero from "./componets/ShuffleHero";
import Gallery from "./componets/Gallery";
// import Features from "./componets/Features";
// import SimpleFooter from "./componets/SimpleFooter";
// import FloatingNavBar from "./componets/FloatingNavBar";
import Clients from "./componets/Clients";
import Layout from "./layout/Layout";
import Services from "./componets/Services";
// import SimpleGallery from "./componets/SimpleGallery";
import SimpleClients from "./componets/SimpleClients";

function App() {
  return (
    <Layout>
      {/* <NavBar /> */}
      {/* <FloatingNavBar /> */}
      {/* <Hero /> */}
      <ShuffleHero />
      {/* <Divider /> */}
      <SimpleClients />
      <Clients />
      {/* <Features /> */}
      <Gallery />
      {/* <SimpleGallery /> */}
      <Services />
    </Layout>
  );
}

export default App;

import Cta from "./components/sections/Cta";
import Faq from "./components/sections/Faq";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Testemonial from "./components/sections/Testemonial";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="w-full px-8 lg:px-24 py-8 bg-gray-100">
        <Hero />
        <Features />
        <Testemonial />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}

export default App;

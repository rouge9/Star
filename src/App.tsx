import Faq from "./components/sections/Faq";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Testemonial from "./components/sections/Testemonial";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="w-full px-24 py-8 bg-gray-100 ">
      <NavBar />
      <Hero />
      <Features />
      <Testemonial />
      <Faq />
    </div>
  );
}

export default App;

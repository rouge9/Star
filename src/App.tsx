import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="w-full px-24 py-8 bg-gray-100 ">
      <NavBar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;

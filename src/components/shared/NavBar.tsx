import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center sticky top-0 bg-secondary py-8 z-30">
      <div className="flex items-center justify-between space-x-16">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="w-7 h-7" />
          <div className="text-2xl font-bold">Expanse</div>
        </div>

        <div className="flex space-x-4">
          <a href="/" className="text-teal-300 font-semibold">
            Home
          </a>
          <a href="/about" className="text-foreground font-semibold">
            About Us
          </a>
          <a href="/contact" className="text-foreground font-semibold">
            Pricing
          </a>
          <a href="/contact" className="text-foreground font-semibold">
            Features
          </a>
        </div>
      </div>
      <Button className="bg-foreground text-white">Download</Button>
    </div>
  );
}

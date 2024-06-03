import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import { PanelRightOpenIcon } from "lucide-react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <nav
      className={clsx(
        "flex justify-between sticky top-0 py-8 px-8 lg:px-24 bg-secondary w-full z-50 transition-all duration-300 ease-in-out",
        scrolled && "shadow-md"
      )}
    >
      <div className="flex items-center justify-between space-x-16 ">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="w-7 h-7" />
          <div className="text-2xl font-bold">Expanse</div>
        </div>

        <div className="hidden lg:flex space-x-4">
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
      <Button className="hidden lg:block bg-foreground text-white">
        Download
      </Button>
      <div className="lg:hidden flex justify-between items-center">
        <Sheet>
          <SheetTrigger>
            <PanelRightOpenIcon size={30} />
          </SheetTrigger>
          <SheetContent className="bg-gray-100">
            <SheetHeader>
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="logo" className="w-7 h-7" />
                <div className="text-2xl font-bold">Expanse</div>
              </div>
            </SheetHeader>
            <ul className="flex flex-col items-start space-y-5 cursor-pointer pt-10">
              <Link
                activeClass="border-b-4 border-zinc-800"
                to="explore"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-zinc-800 text-lg"
              >
                Explore
              </Link>
              <Link
                activeClass="border-b-4 border-zinc-800"
                to="company"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-zinc-800 text-lg"
              >
                Company
              </Link>
              <Link
                activeClass="border-b-4 border-zinc-800"
                to="support"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-zinc-800 text-lg"
              >
                Support
              </Link>
            </ul>
            <div className="flex justify-center items-center py-20">
              <Button className="bg-foreground text-white">Download</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

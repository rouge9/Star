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
      // id="hero"
      className={clsx(
        "flex justify-between sticky top-0 py-8 px-8 lg:px-24 bg-secondary w-full z-50 transition-all duration-300 ease-in-out",
        scrolled && "shadow-md"
      )}
    >
      <div className="flex items-center justify-between space-x-16 ">
        <Link
          activeClass=""
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img src="/logo.png" alt="logo" className="w-7 h-7" />
          <div className="text-2xl font-bold">Expanse</div>
        </Link>

        <div className="hidden lg:flex space-x-4">
          <Link
            activeClass="text-teal-300"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="font-semibold 2xl:text-xl cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="text-teal-300"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="font-semibold 2xl:text-xl cursor-pointer"
          >
            Features
          </Link>
          <Link
            activeClass="text-teal-300"
            to="testemonial"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="font-semibold 2xl:text-xl cursor-pointer"
          >
            Testemonial
          </Link>
          <Link
            activeClass="text-teal-300"
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="font-semibold 2xl:text-xl cursor-pointer"
          >
            Faq
          </Link>
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
                activeClass="text-teal-300"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-semibold 2xl:text-xl cursor-pointer"
              >
                Home
              </Link>
              <Link
                activeClass="text-teal-300"
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-semibold 2xl:text-xl cursor-pointer"
              >
                Features
              </Link>
              <Link
                activeClass="text-teal-300"
                to="testemonial"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-semibold 2xl:text-xl cursor-pointer"
              >
                Testemonial
              </Link>
              <Link
                activeClass="text-teal-300"
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-semibold 2xl:text-xl cursor-pointer"
              >
                Faq
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

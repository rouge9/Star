import { Button } from "../ui/button";
import useMediaQuery from "@/lib/usemediaQuery";
import { useTransform, useScroll, motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const grow = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const isLargeDesktop = useMediaQuery("(min-width: 1700px)");
  return (
    <div id="hero" className="flex justify-between">
      <div className="w-full">
        {/* Blob */}
        <div className="relative max-w-lg justify-center items-center">
          <div className="absolute top-40  left-0  sm:left-0 w-52 sm:w-72 h-52 sm:h-72 bg-sky-300 rounded-full blur-xl   mix-blend-multiply filter   opacity-70 animate-blob" />
          <div className="absolute top-52 -right-0 left-28 sm:left-56 w-52 sm:w-72 h-52 sm:h-72 bg-orange-300  blur-xl rounded-full mix-blend-multiply filter   opacity-70 animate-blob animation-delay-2000 " />
          <div className="absolute top-16 -right-0 left-28  sm:-right-24 w-52 sm:w-72 h-52 sm:h-72 bg-pink-300  blur-xl rounded-full mix-blend-multiply filter   opacity-70 animate-blob animation-delay-4000  " />
        </div>

        <div className=" flex flex-col justify-center items-center xl:justify-start xl:items-start gap-3 lg:gap-7 pt-0 lg:pt-16 xl:pt-28">
          <h1
            className={
              isLargeDesktop
                ? "text-6xl text-start font-bold"
                : "text-3xl lg:text-5xl font-bold text-center lg:text-start"
            }
          >
            Make The Best Finincial Descisons
          </h1>
          <p
            className={
              isLargeDesktop
                ? "text-3xl text-start font-semibold text-muted-foreground"
                : "text-lg lg:text-2xl font-semibold text-muted-foreground"
            }
          >
            Managing your finances shouldn't be a hassle. With Expanse, tracking
            your expenses and saving money is simpler than ever.
          </p>
          <div className="flex gap-6 flex-col justify-center items-center lg:flex-row">
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="cursor-pointer z-10"
            >
              <Button className="bg-foreground text-white text-xl p-8">
                Get Started
              </Button>
            </Link>
            {/* <Button className="gap-6 text-xl text-foreground bg-transparent p-8">
              <PlayCircleIcon size={24} />
              Watch Video
            </Button> */}
          </div>
          <img src="/heroTag.svg" alt="hero" className="" />
        </div>
      </div>
      <div className="w-full hidden xl:block">
        <motion.img
          src="/hero3.svg"
          alt="hero"
          className={
            isLargeDesktop ? "w-[902px] h-[1100px]" : "w-[902px] h-[900px]"
          }
          style={{ scale: grow }}
        />
      </div>
    </div>
  );
}

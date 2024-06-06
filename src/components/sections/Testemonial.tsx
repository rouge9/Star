import { people } from "@/lib/data";
import { AnimatedTooltip } from "../shared/animated_tooltip";
import useMediaQuery from "@/lib/usemediaQuery";
import clsx from "clsx";
import { useTransform, useScroll, motion } from "framer-motion";

export default function Testemonial() {
  const isLargeDesktop = useMediaQuery("(min-width: 1700px)");

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div id="testemonial" className="flex flex-col">
      <h1 className="text-3xl text-center font-semibold">Testimonial</h1>
      <h1 className="text-3xl lg:text-6xl text-center font-bold">
        What Our User
      </h1>
      <h1 className="text-2xl lg:text-5xl text-center font-bold">
        Say About Us?
      </h1>
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-center"
        style={{ scale }}
      >
        <img src="/testemonial.png" alt="testemonial" className="" />
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            The best Finiance Tracking App On The Market
          </h1>
          <p
            className={clsx(
              "text-muted-foreground pt-4 lg:pt-8",
              isLargeDesktop ? "text-2xl" : "text-lg"
            )}
          >
            "Expanse has been a game-changer for me. The fully customizable
            categories allow me to track my spending exactly how I want, giving
            me clear insights into my finances. It’s so easy to use, and I love
            being able to see exactly where my money goes each month. The
            personalized insights have helped me save more and spend smarter. I
            couldn’t imagine managing my finances without it now!"
          </p>
          <div className="flex items-center pt-8">
            <AnimatedTooltip items={people} />
          </div>
          <p className="text-muted-foreground pt-4 lg:pt-8">- Jhon Doe.</p>
        </div>
      </motion.div>
    </div>
  );
}

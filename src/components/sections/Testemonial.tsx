import { people } from "@/lib/data";
import { AnimatedTooltip } from "../shared/animated_tooltip";
import useMediaQuery from "@/lib/usemediaQuery";
import clsx from "clsx";

export default function Testemonial() {
  const isLargeDesktop = useMediaQuery("(min-width: 1700px)");
  return (
    <div id="testemonial" className="flex flex-col">
      <h1 className="text-3xl text-center font-semibold">Testemonial</h1>
      <h1 className="text-3xl lg:text-6xl text-center font-bold">
        What Our User
      </h1>
      <h1 className="text-2xl lg:text-5xl text-center font-bold">
        Say About Us?
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            cupiditate labore sequi doloribus dolor praesentium! Optio modi
            explicabo minus omnis ipsam minima, molestiae quis dolore recusandae
            consectetur.
          </p>
          <div className="flex items-center pt-8">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>
    </div>
  );
}

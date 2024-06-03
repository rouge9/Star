import { people } from "@/lib/data";
import { AnimatedTooltip } from "../shared/animated_tooltip";

export default function Testemonial() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center font-semibold">Testemonial</h1>
      <h1 className="text-6xl text-center font-bold">What Our User</h1>
      <h1 className="text-5xl text-center font-bold">Say About Us?</h1>
      <div className="flex justify-between items-center">
        <img src="/testemonial.png" alt="testemonial" className="" />
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold ">
            The best Finiance Tracking App On The Market
          </h1>
          <p className="text-lg text-muted-foreground pt-8">
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

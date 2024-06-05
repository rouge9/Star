import { useTransform, useScroll, motion } from "framer-motion";

export default function Faq() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div id="faq" className="flex flex-col pb-16" style={{ scale }}>
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-normal text-sky-300">FAQ</h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground pt-3">
          Frequently Asked
        </h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
          Questions
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-start  lg:space-x-16 pt-12">
        <div className="flex flex-col bg-sky-300 rounded-lg px-8 pt-8">
          <h1 className="text-3xl font-semibold">How does Expanse work?</h1>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            consectetur.
          </p>
        </div>
        <div className="flex flex-col px-8 pt-8">
          <h1 className="text-3xl font-semibold">How does Expanse work?</h1>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            consectetur.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-start  lg:space-x-16 pt-8">
        <div className="flex flex-col px-8 pt-8">
          <h1 className="text-3xl font-semibold">How does Expanse work?</h1>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            consectetur.
          </p>
        </div>
        <div className="flex flex-col bg-sky-300 rounded-lg px-8 pt-8">
          <h1 className="text-3xl font-semibold">How does Expanse work?</h1>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            consectetur.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start  lg:space-x-16 pt-8">
        <div className="flex flex-col bg-sky-300 rounded-lg px-8 pt-8">
          <h1 className="text-3xl font-semibold">How does Expanse work?</h1>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            consectetur.
          </p>
        </div>
        <div className="flex flex-col px-8 pt-8">
          <h1 className="text-3xl font-semibold">How does Expanse work?</h1>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            consectetur.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

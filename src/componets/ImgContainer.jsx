/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
function ImgContainer({ img, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, type: "spring" },
      }}
      viewport={{ once: true }}
      className="cursor-pointer"
      onClick={() => {
        onClick(img);
      }}
    >
      <img
        className="rounded-xl w-48 h-48 lg:w-80 lg:h-80 mx-auto hover:scale-105 transition duration-300 ease-in-out"
        src={img}
        alt="Image Description"
      />
    </motion.div>
  );
}

export default ImgContainer;

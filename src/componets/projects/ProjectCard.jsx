/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
function ProjectCard({ handleOnClick, title, subtitle, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, type: "spring" },
      }}
      viewport={{ once: true }}
      className="text-center cursor-pointer"
      onClick={handleOnClick}
    >
      <img
        className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto hover:scale-105 transition duration-300 ease-in-out"
        src={img}
        alt="Image Description"
      />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg ">
          {title}
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

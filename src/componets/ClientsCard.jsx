/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
function ClientsCard({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "spring" },
      }}
      viewport={{ once: true }}
      className="flex gap-x-5"
    >
      {icon}
      <div className="grow">
        <h3 className="text-lg font-semibold text-gray-800 ">{title}</h3>
        <p className="mt-1 text-gray-600 ">{description}</p>
      </div>
    </motion.div>
  );
}

export default ClientsCard;

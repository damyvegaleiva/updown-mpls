import { motion } from "framer-motion";

const Menu = ({ title, src, alt, customClass, axisValue }) => {
  return (
    <motion.div
      className={customClass}
      initial={{ opacity: 0, x: axisValue }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="sub-headline">{title}</h2>

      <img src={src} alt={alt} />
    </motion.div>
  );
};

export default Menu;

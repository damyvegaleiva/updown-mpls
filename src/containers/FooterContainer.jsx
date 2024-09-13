import FooterBottom from "../components/FooterBottom";
import FooterTop from "../components/FooterTop";
import { motion } from "framer-motion";

const FooterContainer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <FooterTop />
      <FooterBottom />
    </motion.footer>
  );
};

export default FooterContainer;

import { motion } from "framer-motion";
import FormContainer from "./FormContainer";

const ContactContainer = () => {
  return (
    <main className="contact-us__contenedor" id="contact">
      <h1 className="headline-pages">Contact</h1>

      <motion.div
        className="contact-us__box"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="contact-us__left">
          <img src="./images/up-down-minneapolis.png" alt="" />
        </div>

        <FormContainer />
      </motion.div>
    </main>
  );
};

export default ContactContainer;

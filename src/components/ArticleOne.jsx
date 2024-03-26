import ParrafosContainer from "../containers/ParrafosContainer";
import Aside from "./Aside";
import { motion } from "framer-motion";
const ArticleOne = () => {
  return (
    <motion.article
      className="article-one"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="article-one-subhead">
        The <span className="span-subhead"> next generation </span>of arcade
        bars has arrived to Minneapolis.
      </h1>

      <ParrafosContainer />

      <Aside />
    </motion.article>
  );
};

export default ArticleOne;

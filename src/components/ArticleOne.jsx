import { motion } from "framer-motion";
import ParrafosContainer from "../containers/ParrafosContainer";

const ArticleOne = () => {
  return (
    <motion.article
      className="article-one"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="article-one-subhead">
        The <i>ultimate</i> ARCADE BAR EXPERIENCE.
        <br />
        Visit us in Minneapolis.
      </h1>

      <ParrafosContainer />
    </motion.article>
  );
};

export default ArticleOne;

import CarouselContainer from "../containers/CarouselContainer";
import { motion } from "framer-motion";
const ArticleTwo = () => {
  return (
    <motion.article
      className="article-two"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="sub-headline">Daily Specials</h2>

      <CarouselContainer />
    </motion.article>
  );
};

export default ArticleTwo;

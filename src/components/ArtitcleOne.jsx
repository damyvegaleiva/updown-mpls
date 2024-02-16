import ParrafosContainer from "../containers/ParrafosContainer";
import Aside from "./Aside";

const ArticleOne = () => {
  return (
    <article className="article-one">
      <h1 className="article-one-subhead">
        The <span className="span-subhead"> next generation </span>of arcade
        bars has arrived to Minneapolis.
      </h1>

      <ParrafosContainer />

      <Aside />
    </article>
  );
};

export default ArticleOne;

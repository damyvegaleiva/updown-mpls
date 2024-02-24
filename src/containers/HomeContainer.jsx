import ArticleOne from "../components/ArticleOne";
import ArticleTwo from "../components/ArticleTwo";

const HomeContainer = () => {
  return (
    <main>
      <h1 className="headline-pages">WELCOME</h1>
      <section>
        <ArticleOne />
        <ArticleTwo />
      </section>
    </main>
  );
};

export default HomeContainer;

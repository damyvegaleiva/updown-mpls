import ArticleOne from "../components/ArticleOne";
import ArticleTwo from "../components/ArticleTwo";
import BackToTheTopButton from "../components/BackToTheTopButton";

const HomeContainer = () => {
  return (
    <main id="home">
      <h1 className="headline-pages">WELCOME</h1>

      <section>
        <ArticleOne />
        <ArticleTwo />
        <BackToTheTopButton />
      </section>
    </main>
  );
};

export default HomeContainer;

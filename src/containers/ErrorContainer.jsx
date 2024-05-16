import { NavLink } from "react-router-dom";

const ErrorContainer = () => {
  return (
    <main id="error404">
      <section className="notFound">
        <div className="notFound__images">
          <img
            src="../images/error404/backToTheHomepage.webp"
            alt="Back to the Homepage"
          />

          <img
            src="../images/error404/Delorean.webp"
            alt="The Delorean, The Doc y Marty McFly from back to the future."
          />
        </div>

        <div className="notFound__text">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <NavLink to={"/"}>YES</NavLink>
          <NavLink to={"/error404"}>NO</NavLink>
        </div>
      </section>
    </main>
  );
};

export default ErrorContainer;

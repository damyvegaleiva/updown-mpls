import { useLocation } from "react-router-dom";

const HeaderContainer = () => {
  const { pathname } = useLocation();
  const componentId = pathname === "/" ? "home" : pathname.substring(1);

  return (
    <header>
      <div className="header__top-container">
        <h2 className="header__updown">
          Up- <br />
          Down
        </h2>
        <p className="header__location">Minneapolis</p>
      </div>

      <div className="header__bottom-container">
        <p className="header__insert-coin">
          Insert
          <a href={`#${componentId}`}>
            <img
              src="../images/up-down-logo.png"
              alt="Up-Down logo: A circle with an angle up and an angle down inside of the circle."
            />
          </a>
          Coin !
        </p>
      </div>
    </header>
  );
};

export default HeaderContainer;

import Navbar from "../components/Navbar";

const HeaderContainer = () => {
  return (
    <>
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
            <a href="#home">
              <img
                src="../images/up-down-logo.png"
                className="header__img--size"
                alt="Up-Down logo"
              />
            </a>
            Coin !
          </p>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default HeaderContainer;

const MenuContainer = () => {
  return (
    <main id="menu">
      <h1 className="headline-pages">Menu</h1>

      <article className="menus-container">
        <div className="menu__beer-container">
          <h2 className="sub-headline">Beer Menu</h2>

          <img
            src="../images/beer-menu.jpg"
            alt="A beer menu with a list of all the tap beers and cans."
          />
        </div>

        <div className="menu__pizza-container">
          <h2 className="sub-headline">Pizza Menu</h2>

          <img
            src="../images/pizza-menu.jpg"
            alt="A pizza menu with pictures of all the different kinds of pizza."
          />
        </div>
      </article>
    </main>
  );
};

export default MenuContainer;

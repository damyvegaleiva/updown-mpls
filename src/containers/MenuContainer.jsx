import Menu from "../components/Menu";

const MenuContainer = () => {
  return (
    <main id="menu">
      <h1 className="headline-pages">Menu</h1>

      <article className="menus-container">
        <Menu
          customClass={"menu__beer-container"}
          title={"Beer Menu"}
          src={"../images/beer-menu.jpg"}
          alt={"A beer menu with a list of all the tap beers and cans."}
          axisValue={-100}
        />

        <Menu
          customClass={"menu__pizza-container"}
          title={"Pizza Menu"}
          src={"../images/pizza-menu.jpg"}
          alt={
            "A pizza menu with pictures of all the different kinds of pizza."
          }
          axisValue={100}
        />
      </article>
    </main>
  );
};

export default MenuContainer;

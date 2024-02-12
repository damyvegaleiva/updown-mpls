import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const NavBarContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const navBarIcon = (isClicked) => {
    if (isClicked)
      return <GrClose size={35} onClick={() => setIsClicked(!isClicked)} />;

    return (
      <RxHamburgerMenu
        className="burger-btn"
        size={40}
        onClick={() => setIsClicked(!isClicked)}
      />
    );
  };

  return (
    <nav>
      <img src="./images/up-down-logo.png" onClick={() => navigate("/")} />

      {navBarIcon(isClicked)}

      <ul className={"navbar-list " + (isClicked && "active")}>
        <li>
          <NavLink to={"/"} onClick={handleClick}>
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink to={"/menu"} onClick={handleClick}>
            MENU
          </NavLink>
        </li>

        <li>
          <NavLink to={"/events"} onClick={handleClick}>
            EVENTS
          </NavLink>
        </li>

        <li>
          <NavLink to={"/gallery"} onClick={handleClick}>
            GALLERY
          </NavLink>
        </li>

        <li>
          <NavLink to={"/contact"} onClick={handleClick}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarContainer;

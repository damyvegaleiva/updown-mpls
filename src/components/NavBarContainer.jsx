import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <nav className="navbar-container">
      <img src="./images/up-down-logo.png" onClick={() => navigate("/")} />

      {navBarIcon(isClicked)}

      <ul className={"navbar-list " + (isClicked && "active")}>
        <li>
          <Link to={"/"} onClick={handleClick}>
            HOME
          </Link>
        </li>

        <li>
          <Link to={"/menu"} onClick={handleClick}>
            MENU
          </Link>
        </li>

        <li>
          <Link to={"/events"} onClick={handleClick}>
            EVENTS
          </Link>
        </li>

        <li>
          <Link to={"/gallery"} onClick={handleClick}>
            GALLERY
          </Link>
        </li>

        <li>
          <Link to={"/contact"} onClick={handleClick}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarContainer;

import { NavLink } from "react-router-dom";

const NavBarList = ({ handleClick, isClicked }) => {
  return (
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
  );
};

export default NavBarList;

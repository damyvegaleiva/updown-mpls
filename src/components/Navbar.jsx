import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/menu"}>MENU</Link>
        </li>
        <li>
          <Link to={"/gallery"}>GALLERY</Link>
        </li>
        <li>
          <Link to={"/events"}>EVENTS</Link>
        </li>
        <li>
          <Link to={"/contact"}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

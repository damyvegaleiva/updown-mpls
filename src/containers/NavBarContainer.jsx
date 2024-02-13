import { useState } from "react";
import NavBarList from "../components/NavBarList";
import NavBarLogo from "../components/NavBarLogo";
import NavBarIcon from "../components/NavBarIcon";

const NavBarContainer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <nav>
      <NavBarLogo isClicked={isClicked} handleClick={handleClick} />

      <NavBarIcon isClicked={isClicked} handleClick={handleClick} />

      <NavBarList isClicked={isClicked} handleClick={handleClick} />
    </nav>
  );
};

export default NavBarContainer;

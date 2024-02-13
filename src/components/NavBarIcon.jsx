import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const NavBarIcon = ({ isClicked, handleClick }) => {
  return (
    <>
      {isClicked ? (
        <GrClose size={35} onClick={handleClick} />
      ) : (
        <RxHamburgerMenu
          className="burger-btn"
          size={40}
          onClick={handleClick}
        />
      )}
    </>
  );
};
export default NavBarIcon;

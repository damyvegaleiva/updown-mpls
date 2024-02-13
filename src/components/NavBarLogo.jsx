import { useNavigate } from "react-router-dom";

const NavBarLogo = ({ isClicked, handleClick }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (isClicked) handleClick();

    navigate("/");
  };

  return <img src="./images/up-down-logo.png" onClick={handleLogoClick} />;
};

export default NavBarLogo;

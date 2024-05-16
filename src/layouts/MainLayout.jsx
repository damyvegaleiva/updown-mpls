import { Outlet } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import FooterContainer from "../containers/FooterContainer";

const MainLayout = () => {
  return (
    <div>
      <HeaderContainer />
      <NavBarContainer />
      <Outlet />
      <FooterContainer />
    </div>
  );
};

export default MainLayout;

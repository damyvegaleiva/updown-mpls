import { NavLink } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="footer__bottom">
      <p className="footer__copyright-parrafo">
        Copyright &#169; 2024 Up-Down Minneapolis
      </p>
      <p>
        Designed by<span className="footer__author"> Damy J. Vega Leiva</span>
      </p>
      <p>
        <NavLink to={"/error404"} className="privacy-policy__link">
          Privacy Policy
        </NavLink>
      </p>
    </div>
  );
};

export default FooterBottom;

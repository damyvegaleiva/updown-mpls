const FooterBottom = () => {
  return (
    <div className="footer__bottom">
      <p className="footer__copyright-parrafo">
        Copyright &#169; 2022 Up-Down Minneapolis
      </p>
      <p>
        Designed by<span className="footer__author"> Damy J. Vega Leiva</span>
      </p>
      <p>
        <a
          href="./pages/privacy-policy.html"
          target="_blank"
          className="privacy-policy__link"
        >
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default FooterBottom;

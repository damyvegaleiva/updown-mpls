import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

const FooterContainer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <h3 className="footer__heading">Up-Down Minneapolis</h3>

          <p className="footer__social-parrafo">Follow us on social media</p>

          <ul className="footer__list-social">
            <li className="footer___list-item">
              <a
                href="https://www.facebook.com/updownmpls"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoFacebook />
              </a>
            </li>

            <li className="footer___list-item">
              <a
                href="https://www.instagram.com/updownmpls/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram />
              </a>
            </li>

            <li className="footer___list-item">
              <a
                href="https://twitter.com/updownmpls"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__hours">
          <h3 className="footer__headings">Hours</h3>
          <p>Mon-Fri 3pm to 2am</p>
          <p>Sat-Sun 11am to 2am</p>
          <p>(Must be 21+ to enter)</p>
        </div>

        <div className="footer__contact">
          <h3 className="footer__headings">Contact</h3>
          <p> Phone: 612-823-3487</p>
          <p> Have a question? </p>
          <p>Shoot us an email </p>
        </div>

        <div className="footer__address">
          <h3 className="footer__headings">Address</h3>
          <p>3012 Lyndale Ave S</p>
          <p>Minneapolis, Minnesota 55408</p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2823.7887621133273!2d-93.287406!3d44.947962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86cc613e7aaccabc!2sUp-Down%20Minneapolis!5e0!3m2!1sen!2sus!4v1655942132986!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

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
    </footer>
  );
};

export default FooterContainer;

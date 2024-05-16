import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

const FooterSocialMedia = () => {
  return (
    <div className="footer__social-content">
      <h3 className="footer__main-heading">Up-Down Minneapolis</h3>

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
  );
};

export default FooterSocialMedia;

import FooterDiv from "../components/FooterDiv";
import FooterIframe from "../components/FooterIframe";
import FooterSocialMedia from "../components/FooterSocialMedia";

const FooterTop = () => {
  return (
    <div className="footer__top">
      <FooterSocialMedia />

      <FooterDiv
        className={"footer__hours"}
        heading={"Hours"}
        firstParagraph={"Mon-Fri 3pm to 2am"}
        secondParagraph={"Sat-Sun 11am to 2am"}
        thirdParagraph={"(Must be 21+ to enter)"}
      />
      <FooterDiv
        className={"footer__contact"}
        heading={"Contact"}
        firstParagraph={"Phone: 612-823-3487"}
        secondParagraph={"Have a question?"}
        thirdParagraph={"Shoot us an email"}
      />
      <FooterDiv
        className={"footer__address"}
        heading={"Address"}
        firstParagraph={"3012 Lyndale Ave S"}
        secondParagraph={"Minneapolis, Minnesota 55408"}
      />

      <FooterIframe />
    </div>
  );
};

export default FooterTop;

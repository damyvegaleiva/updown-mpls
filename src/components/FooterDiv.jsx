const FooterDiv = ({
  className,
  heading,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}) => {
  return (
    <div className={className}>
      <h3 className="footer__headings">{heading}</h3>
      <p>{firstParagraph}</p>
      <p>{secondParagraph}</p>
      {thirdParagraph && <p>{thirdParagraph}</p>}
    </div>
  );
};

export default FooterDiv;

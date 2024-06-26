const Parrafo = ({ className, heading, svgIcon, text }) => {
  return (
    <div className={`box ${className}`}>
      <h2>{heading}</h2>
      {svgIcon}
      <p>{text}</p>
    </div>
  );
};

export default Parrafo;

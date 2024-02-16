const Parrafo = ({ svgIcon, text, className }) => {
  return (
    <div className={`box ${className}`}>
      {svgIcon}
      <p>{text}</p>
    </div>
  );
};

export default Parrafo;

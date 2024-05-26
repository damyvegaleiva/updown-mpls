const CarouselButton = ({ handleClick, className, svgIcon, setIsHovered }) => {
  return (
    <button
      className={className}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{svgIcon}</span>
    </button>
  );
};

export default CarouselButton;

const CarouselButton = ({ className, setIsHovered, handleClick, svgIcon }) => {
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

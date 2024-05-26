import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import CarouselButton from "./CarouselButton";
import CarouselSlider from "./CarouselSlider";

const Carousel = ({
  index,
  specialsText,
  handleClickNext,
  handleClickPrev,
  setIsHovered,
  direction,
}) => {
  return (
    <div className="carousel">
      <CarouselButton
        className={"prev-button"}
        handleClick={handleClickPrev}
        setIsHovered={setIsHovered}
        svgIcon={<RxTriangleLeft />}
      />

      <CarouselSlider
        index={index}
        specialsText={specialsText}
        direction={direction}
      />

      <CarouselButton
        className={"next-button"}
        handleClick={handleClickNext}
        setIsHovered={setIsHovered}
        svgIcon={<RxTriangleRight />}
      />
    </div>
  );
};

export default Carousel;

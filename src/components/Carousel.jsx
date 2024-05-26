import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import CarouselButton from "./CarouselButton";
import CarouselSlider from "./CarouselSlider";

const Carousel = ({
  index,
  direction,
  setIsHovered,
  handleClickNext,
  handleClickPrev,
  specialsImages,
}) => {
  return (
    <div className="carousel">
      <CarouselButton
        className={"prev-button"}
        setIsHovered={setIsHovered}
        handleClick={handleClickPrev}
        svgIcon={<RxTriangleLeft />}
      />

      <CarouselSlider
        index={index}
        direction={direction}
        specialsImages={specialsImages}
      />

      <CarouselButton
        className={"next-button"}
        setIsHovered={setIsHovered}
        handleClick={handleClickNext}
        svgIcon={<RxTriangleRight />}
      />
    </div>
  );
};

export default Carousel;

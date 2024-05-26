import { useEffect, useState } from "react";

const useCarousel = (imagesLength) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setDirection(1);

    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex === imagesLength - 1 ? 0 : prevIndex + 1
        );
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [isHovered, imagesLength]);

  const handleClickNext = () => {
    setDirection(1);

    if (index === imagesLength - 1) return setIndex(0);
    return setIndex((prev) => prev + 1);
  };

  const handleClickPrev = () => {
    setDirection(0);

    if (index === 0) return setIndex(imagesLength - 1);
    return setIndex((prev) => prev - 1);
  };

  return {
    index,
    handleClickNext,
    handleClickPrev,
    setIsHovered,
    direction,
  };
};

export default useCarousel;

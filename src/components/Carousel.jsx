import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";

const specialsImages = [
  "./images/monday-special.png",
  "./images/tuesday-special.png",
  "./images/wednesday-special.png",
  "./images/thursday-special.png",
  "./images/friday-special.png",
  "./images/saturday-special.png",
  "./images/sunday-special.png",
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },

  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const Carousel = ({ index, setIndex, specialsText }) => {
  const [direction, setDirection] = useState(0);

  const handleClickNext = () => {
    setDirection(1);

    if (index === specialsImages.length - 1) return setIndex(0);
    return setIndex((prev) => prev + 1);
  };

  const handleClickPrevious = () => {
    setDirection(0);

    if (index === 0) return setIndex(specialsImages.length - 1);
    return setIndex((prev) => prev - 1);
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={handleClickPrevious}>
        <span>
          <RxTriangleLeft />
        </span>
      </button>

      <div className="carousel__slidershow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="slides"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={specialsImages[index]}
            src={specialsImages[index]}
            alt={specialsText[index].text}
            custom={direction}
          />
        </AnimatePresence>
      </div>

      <button className="next-button" onClick={handleClickNext}>
        <span>
          <RxTriangleRight />
        </span>
      </button>
    </div>
  );
};

export default Carousel;

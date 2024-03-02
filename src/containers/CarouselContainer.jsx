// const specialsImages = [
//   {
//     img_url: "./images/monday-special.jpg",
//     alt: "Monday special: one dollar off all draft beers.",
//   },
//   {
//     img_url: "./images/wednesday-special.jpg",
//     alt: "Wednesday special: one dollar off domestic tallboys.",
//   },
//   {
//     img_url: "./images/thursday-special.jpg",
//     alt: "Thursday special: ten cent tokens.",
//   },
//   {
//     img_url: "./images/friday-special.jpg",
//     alt: "Friday special: first one hundred people gets 20 free tokens.",
//   },
//   {
//     img_url: "./images/saturday-special.jpg",
//     alt: "Saturday special: two for 1 tokens noon to 9pm.",
//   },
//   {
//     img_url: "./images/sunday-special.jpg",
//     alt: "Sunday special: Six Pack and a Pound. Six domestic tallboys, 80 tokens and a fanny pack for $25.",
//   },
// ];
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";

const specialsImages = [
  "./images/monday-special.jpg",
  "./images/wednesday-special.jpg",
  "./images/thursday-special.jpg",
  "./images/thursday-special.jpg",
  "./images/friday-special.jpg",
  "./images/saturday-special.jpg",
  "./images/sunday-special.jpg",
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

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDIrection] = useState(0);

  const handleClickNext = () => {
    setDIrection(1);

    if (index === specialsImages.length - 1) return setIndex(0);
    setIndex((prev) => prev + 1);
  };

  const handleClickPrevious = () => {
    setDIrection(0);

    if (index === 0) return setIndex(specialsImages.length - 1);
    setIndex((prev) => prev - 1);
  };

  return (
    <div className="carousel-container">
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
            alt={"specialsImages[index].img_url"}
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

export default CarouselContainer;

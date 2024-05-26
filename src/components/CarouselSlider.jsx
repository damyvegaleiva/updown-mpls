import { AnimatePresence, motion } from "framer-motion";

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

const CarouselSlider = ({ index, direction, specialsImages }) => {
  return (
    <div className="carousel__slidershow">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="slides"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={specialsImages[index].id}
          src={specialsImages[index].src}
          alt={specialsImages[index].text}
          custom={direction}
        />
      </AnimatePresence>
    </div>
  );
};

export default CarouselSlider;

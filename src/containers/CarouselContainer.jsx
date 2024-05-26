import useCarousel from "../hooks/useCarousel";
import Carousel from "../components/Carousel";

const specialsImages = [
  {
    id: 1,
    src: "./images/monday-special.png",
    day: "Monday",
    text: "$1 OFF All Beer on Tap",
  },
  {
    id: 2,
    src: "./images/tuesday-special.png",
    day: "Tuesday",
    text: "$1 OFF Minnesota Beer on Tap",
  },
  {
    id: 3,
    src: "./images/wednesday-special.png",
    day: "Wednesday",
    text: "$3 Domestic Tallboys",
  },
  {
    id: 4,
    src: "./images/thursday-special.png",
    day: "Thursday",
    text: "10 Cent Tokens All Night",
  },
  {
    id: 5,
    src: "./images/friday-special.png",
    day: "Friday",
    text: "First 100 people get 20 Free tokens, $2 slices until 8PM",
  },
  {
    id: 6,
    src: "./images/saturday-special.png",
    day: "Saturday",
    text: "2 For 1 Tokens until 9PM",
  },
  {
    id: 7,
    src: "./images/sunday-special.png",
    day: "Sunday",
    text: "Six-Pack and A Pound: $25 For A Six-Pack Of Domestic Cans",
  },
];

const CarouselContainer = () => {
  const { index, direction, handleClickNext, handleClickPrev, setIsHovered } =
    useCarousel(specialsImages.length);

  return (
    <div className="carousel-container">
      <h2>{specialsImages[index].day}</h2>

      <Carousel
        index={index}
        direction={direction}
        setIsHovered={setIsHovered}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        specialsImages={specialsImages}
      />

      <p>{specialsImages[index].text}</p>
    </div>
  );
};

export default CarouselContainer;

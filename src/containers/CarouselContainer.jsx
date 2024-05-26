import Carousel from "../components/Carousel";
import useCarousel from "../hooks/useCarousel";

const specialsText = [
  { day: "Monday", text: "$1 OFF All Beer on Tap" },
  { day: "Tuesday", text: "$1 OFF Minnesota Beer on Tap" },
  { day: "Wednesday", text: "$3 Domestic Tallboys" },
  { day: "Thursday", text: "10 Cent Tokens All Night" },
  {
    day: "Friday",
    text: "First 100 people get 20 Free tokens, $2 slices until 8PM",
  },
  { day: "Saturday", text: "2 For 1 Tokens until 9PM" },
  {
    day: "Sunday",
    text: "Six-Pack and A Pound: $25 For A Six-Pack Of Domestic Cans",
  },
];

const specialsImages = [
  "./images/monday-special.png",
  "./images/tuesday-special.png",
  "./images/wednesday-special.png",
  "./images/thursday-special.png",
  "./images/friday-special.png",
  "./images/saturday-special.png",
  "./images/sunday-special.png",
];

const CarouselContainer = () => {
  const { index, direction, handleClickNext, handleClickPrev, setIsHovered } =
    useCarousel(specialsImages.length);

  return (
    <div className="carousel-container">
      <h2>{specialsText[index].day}</h2>

      <Carousel
        index={index}
        specialsText={specialsText}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        setIsHovered={setIsHovered}
        direction={direction}
      />

      <p>{specialsText[index].text}</p>
    </div>
  );
};

export default CarouselContainer;

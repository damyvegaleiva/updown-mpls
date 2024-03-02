import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "../images/gallery/gallery-img1.jpg",
    alt: "Two people playing pac-man.",
    stretch: "",
  },
  {
    src: "../images/gallery/gallery-img2.jpg",
    alt: "Pint of a beer with game tokens.",
    stretch: "v-stretch",
  },
  {
    src: "../images/gallery/gallery-img13.jpg",
    alt: "Beer tap handles.",
    stretch: "h-stretch",
  },
  {
    src: "../images/gallery/gallery-img4.jpg",
    alt: "Picture of the front of updown.",
    stretch: "h-stretch",
  },
  {
    src: "../images/gallery/gallery-img5.jpg",
    alt: "Picture of arcade games.",
    stretch: "big-stretch",
  },
  {
    src: "../images/gallery/gallery-img19.jpg",
    alt: "Skeeball lanes",
    stretch: "h-stretch",
  },
  {
    src: "../images/gallery/gallery-img16.jpg",
    alt: "People playing pinball.",
    stretch: "v-stretch",
  },
  {
    src: "../images/gallery/gallery-img8.jpg",
    alt: "Picture of a whole pizza.",
    stretch: "v-stretch",
  },
  {
    src: "../images/gallery/gallery-img9.jpg",
    alt: "Wall full of flyers.",
    stretch: "big-stretch",
  },
  {
    src: "../images/gallery/gallery-img10.jpg",
    alt: "Groups of people hanging at the bar.",
    stretch: "h-stretch",
  },
  {
    src: "../images/gallery/gallery-img11.jpg",
    alt: "General picture of the inside of updown.",
    stretch: "v-stretch",
  },
  {
    src: "../images/gallery/gallery-img17.jpg",
    alt: "Picture of the up-down rooftop with shuffleboard.",
    stretch: "",
  },
  {
    src: "../images/gallery/gallery-img6.jpg",
    alt: "Groups of people hanging out and playing jenga at the front patio.",
    stretch: "h-stretch",
  },
  {
    src: "../images/gallery/gallery-img7.jpg",
    alt: "Pint of a beer on top of the bar.",
    stretch: "v-stretch",
  },
  {
    src: "../images/gallery/gallery-img18.jpg",
    alt: "Various pinball machines and one person playing on one.",
    stretch: "",
  },
  {
    src: "../images/gallery/gallery-img15.jpg",
    alt: "Bunch of arcade games.",
    stretch: "",
  },
];

const GalleryImageList = () => {
  return (
    <div className="gallery">
      {galleryImages.map((img, index) => (
        <div key={index} className={`${img.stretch}`}>
          <motion.img
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            src={`${img.src}`}
            alt={`${img.alt}`}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryImageList;

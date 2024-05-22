import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

const BackToTheTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2100) return setIsVisible(true);

      return setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#home" className={isVisible ? "back-to-the-top-btn" : undefined}>
      <BsArrowUpShort />
    </a>
  );
};

export default BackToTheTopButton;

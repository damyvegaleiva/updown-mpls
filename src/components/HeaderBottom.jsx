import { useLocation } from "react-router-dom";
import coinSound from "/src/assets/coin-sound.mp3";

const HeaderBottom = () => {
  const { pathname } = useLocation();
  const componentId = pathname === "/" ? "home" : pathname.substring(1);
  const coinSoundAudio = new Audio(coinSound);

  return (
    <div className="header__bottom-container">
      <p className="header__insert-coin">
        Insert
        <a href={`#${componentId}`} onClick={() => coinSoundAudio.play()}>
          <img
            src="../images/up-down-logo.png"
            alt="Up-Down logo: A circle with an angle up and an angle down inside of the circle."
          />
        </a>
        Coin !
      </p>
    </div>
  );
};

export default HeaderBottom;

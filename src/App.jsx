import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import NavBarContainer from "./containers/NavBarContainer";
import FooterContainer from "./containers/FooterContainer";
import HomeContainer from "./containers/HomeContainer";
import MenuContainer from "./containers/MenuContainer";
import EventsContainer from "./containers/EventsContainer";
import GalleryContainer from "./containers/GalleryContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <NavBarContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/menu" element={<MenuContainer />} />
          <Route path="/events" element={<EventsContainer />} />
          <Route path="/gallery" element={<GalleryContainer />} />
          <Route path="/contact" />
          <Route path="/privacy-policy" />
        </Routes>

        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

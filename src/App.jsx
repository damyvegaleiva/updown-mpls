import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import NavBarContainer from "./containers/NavBarContainer";
import FooterContainer from "./containers/FooterContainer";
import HomeContainer from "./containers/HomeContainer";
import MenuContainer from "./containers/MenuContainer";
import EventsContainer from "./containers/EventsContainer";
import GalleryContainer from "./containers/GalleryContainer";
import ContactContainer from "./containers/ContactContainer";
import ScrollToComponent from "./components/ScrollToComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <NavBarContainer />
        <ScrollToComponent />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/menu" element={<MenuContainer />} />
          <Route path="/events" element={<EventsContainer />} />
          <Route path="/gallery" element={<GalleryContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/privacy-policy" />
        </Routes>

        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import NavBarContainer from "./containers/NavBarContainer";
import FooterContainer from "./containers/FooterContainer";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <NavBarContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/menu" />
          <Route path="/events" />
          <Route path="/gallery" />
          <Route path="/contact" />
          <Route path="/privacy-policy" />
        </Routes>

        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

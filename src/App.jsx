import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import NavBarContainer from "./containers/NavBarContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <NavBarContainer />

        <Routes>
          <Route path="/" />
          <Route path="/menu" />
          <Route path="/events" />
          <Route path="/gallery" />
          <Route path="/contact" />
          <Route path="/privacy-policy" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

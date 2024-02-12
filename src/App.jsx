import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import NavBarContainer from "./components/NavBarContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <NavBarContainer />

        <Routes>
          <Route path="/" />
          <Route path="/menu" element={<h1>HOLA</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

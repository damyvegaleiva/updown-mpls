import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToComponent from "./components/ScrollToComponent";
import MainLayout from "./layouts/MainLayout";
import ErrorLayout from "./layouts/ErrorLayout";
import HomeContainer from "./containers/HomeContainer";
import MenuContainer from "./containers/MenuContainer";
import EventsContainer from "./containers/EventsContainer";
import GalleryContainer from "./containers/GalleryContainer";
import ContactContainer from "./containers/ContactContainer";
import ErrorContainer from "./containers/ErrorContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToComponent />

        <Routes>
          {/* Routes using MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeContainer />} />
            <Route path="/menu" element={<MenuContainer />} />
            <Route path="/events" element={<EventsContainer />} />
            <Route path="/gallery" element={<GalleryContainer />} />
            <Route path="/contact" element={<ContactContainer />} />
          </Route>

          {/* Route using ErrorLayout */}
          <Route path="error404" element={<ErrorLayout />}>
            <Route index element={<ErrorContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

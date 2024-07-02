import "./Components/Header";
import "./App.css";
import TheHeader from "./Components/Header";
import Gallery from "./Components/Home";
import GalleryDetails from "./Components/GalleryDetails";
function App() {
  return (
    <>
      <TheHeader />
      <Gallery />
      <GalleryDetails/>
    </>
  );
}

export default App;

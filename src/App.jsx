import "./Components/Header";
import "./App.css";
import TheHeader from "./Components/Header";
import Gallery from "./Components/Home";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Gallery/>
    }
  ])
 
}

export default App;

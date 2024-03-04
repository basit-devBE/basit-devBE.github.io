import React from "react";
import Homepage from "./pages/Homepage";
import About from "./pages/About"; 
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Homepage />} />
    <Route  path="/about" element={<About />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Blog" element={<Blog />} />
  </>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

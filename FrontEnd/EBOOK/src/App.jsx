import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Collection from "./Pages/collection";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Books from "./Pages/Books";
import Cart from "./Pages/cart";
import Login from "./Pages/login";
function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Books/:Books" element={<Books />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
